'use client';
import Link from "next/link";
import DropDown from "./DropDown";
import { usePathname } from "next/navigation";
import { auth } from "../_lib/auth";
import { Suspense } from "react";
import Spinner from "./Spinner";
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
export default function Navigation({ children }) {
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
                                {link.name === 'Guest area' ? children : null}
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <DropDown />
        </nav>
    );
}
