'use client';
import Link from "next/link";
import DropDown from "./DropDown";
import { usePathname } from "next/navigation";
import { ArrowRightOnRectangleIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { singOutAction } from "../_lib/actions";
import { useState } from "react";
const navigateLinks = [
    {
        name: "Cabins",
        href: "/cabins"
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Guest area",
        href: "/account"
    }
]
export default function Navigation({ children, session }) {
    const [show, setShow] = useState(false);
    const pathName = usePathname()
    return (
        <nav className="z-10 text-xl">
            {/* <Suspense fallback={<Spinner />}>
                <Avatar />
            </Suspense> */}
            <div className="hidden md:block">
                <ul className="flex gap-16 items-center ">
                    {navigateLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href} className={`hover:text-accent-400 transition-colors flex gap-4 justify-center items-center ${pathName === link.href ? "text-accent-500" : ""}`}>
                                {link.name === 'Guest area' ? (
                                    <>
                                        <div className="flex justify-center items-center">
                                            {children}
                                        </div>
                                    </>
                                ) : null}
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    {session?.user && <div className="relative">
                        <button onClick={() => setShow((prev) => !prev)}>
                            {
                                show ?
                                    (
                                        <ChevronUpIcon className='h-5 w-5 text-primary-600 cursor-pointer hover:text-accent-400' />
                                    ) : (
                                        <ChevronDownIcon className='h-5 w-5 text-primary-600 cursor-pointer hover:text-accent-400' />
                                    )
                            }
                        </button>
                        {show &&
                            <form action={singOutAction}>
                                <button className="absolute cursor-pointer bg-primary-700 flex justify-center items-center right-0 mt-5 gap-2 p-2 rounded-2xl">
                                    <ArrowRightOnRectangleIcon className='h-5 w-5 text-primary-200' />
                                    signout
                                </button>
                            </form>
                        }
                    </div>
                    }
                </ul>
            </div>
            <DropDown />
        </nav>

    );
}
