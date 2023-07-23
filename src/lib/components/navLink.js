import Link from "next/link";
import { twMerge } from "tailwind-merge";

const NavLink = ({ children, className, href }) => {
    return (
        <Link
            href={href}
            className={twMerge(
                "hover:text-link focus:text-link transition-colors",
                className
            )}>
            {children}
        </Link>
    );
};

export default NavLink;
