'use client'

import Link from "next/link";
import { useState } from "react";

const DropDown = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="relative z-10">
            <div className="md:hidden block" onClick={() => setShow(show => !show)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 cursor-pointer active:scale-95 transition-all">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </div>
            <div className="absolute left-[-7rem] top-12">
                <div className={`bg-primary-900 flex flex-col p-4 rounded-xl gap-4 text-primary-50 transition-all duration-300 ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <Link href="/cabins" onClick={() => setShow(false)} className="hover:text-accent-400 transition-colors">
                        Cabins
                    </Link>
                    <Link href="/about" onClick={() => setShow(false)} className="hover:text-accent-400 transition-colors">
                        About
                    </Link>
                    <Link href="/account" onClick={() => setShow(false)} className="hover:text-accent-400 transition-colors">
                        Guest area
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default DropDown