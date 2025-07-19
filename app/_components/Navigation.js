'use client';
import Link from "next/link";
import DropDown from "./DropDown";
import { usePathname } from "next/navigation";
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
export default function Navigation() {
    const pathName = usePathname()
    console.log(pathName)
    return (
        <nav className="z-10 text-xl">
            <div className="hidden md:block">
                <ul className="flex gap-16 items-center ">
                    {navigateLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href} className={`hover:text-accent-400 transition-colors ${pathName === link.href ? "text-accent-500 border-b-2" : ""}`}>
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
