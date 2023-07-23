import { twMerge } from "tailwind-merge";

function Container({ children, className }) {
    return (
        <div
            className={twMerge(
                "container mx-auto px-[8.4375em] max-w-[1440px]",
                className
            )}>
            {children}
        </div>
    );
}

export default Container;
