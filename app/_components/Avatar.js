import { auth } from "../_lib/auth"

const Avatar = async () => {
    const session = await auth()

    return (
        session?.user?.image ? (
            <img src={session?.user?.image} className="h-8 w-8 rounded-full" alt={session.user.name} referrerPolicy="no-referrer" />
        ) : null
    )
}

export default Avatar