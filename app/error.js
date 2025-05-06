"use client"

import Link from "next/link";

export default function Error({ error, reset }) {
    return (
        <main className='flex justify-center items-center flex-col gap-6'>
            <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
            <p className='text-lg'>{error.message}</p>

            <button onClick={reset} className='inline-block bg-accent-500 cursor-pointer text-primary-800 px-6 py-3 text-lg'>
                Try again
            </button>
            <p>OR</p>
            <Link href='/cabins' className="px-6 py-3 cursor-pointer text-lg bg-accent-500 text-primary-800" >
                back to Cabins
            </Link>
        </main>
    );
}
