"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import Container from "@/lib/components/container";
import NavLink from "@/lib/components/navLink";
import NavLogin from "@/lib/components/navLogin";

const Header = () => {
    const pathname = usePathname();
    return (
        <Container>
            <header>
                <nav className="flex justify-between items-center py-[48px]">
                    <div className="logo">
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={100}
                            height={24}
                            priority
                        />
                    </div>
                    <ul className="menu flex items-center gap-[56px] h-[62px]">
                        <li>
                            <NavLink
                                href="/"
                                className={pathname == "/" ? "text-link" : ""}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                href="/to-rent"
                                className={
                                    pathname.startsWith("/to-rent")
                                        ? "text-link"
                                        : ""
                                }>
                                To Rent
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                href="/for-sale"
                                className={
                                    pathname.startsWith("/for-sale")
                                        ? "text-link"
                                        : ""
                                }>
                                For Sale
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                href="/about"
                                className={
                                    pathname == "/about" ? "text-link" : ""
                                }>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLogin />
                        </li>
                    </ul>
                </nav>
            </header>
        </Container>
    );
};

export default Header;
