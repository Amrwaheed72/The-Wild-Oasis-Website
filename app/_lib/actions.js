'use server'

import { revalidatePath } from "next/cache"
import { auth, signIn, signOut } from "./auth"
import { supabase } from "./supabase"

export const signInAction = async () => {
    await signIn('google', {
        redirectTo: '/account'
    })
}
export const singOutAction = async () => {
    await signOut({
        redirectTo: '/'
    })
}

export const updateGuest = async (formData) => {
    const session = await auth()
    const idRegex = /^[a-zA-Z0-9]{6,20}$/; // to validate the number

    if (!session) throw new Error('You Must be logged in')
    const nationalID = formData.get('nationalID')
    const [nationality, countryFlag] = formData.get('nationality').split('%')
    if (!idRegex.test(nationalID)) throw new Error('Please provide a valid national id')

    const updatedData = { nationality, countryFlag, nationalID }
    const { data, error } = await supabase
        .from('guests')
        .update(updatedData)
        .eq('id', session.user.guestId)
        .select()
        .single();

    if (error) {
        throw new Error('Guest could not be updated');
    }
    revalidatePath('/account/profile')
}