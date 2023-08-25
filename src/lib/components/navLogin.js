"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NavLogin = () => {
    const router = useRouter();
    const pathname = usePathname();
    const supabase = createClientComponentClient();
    const [user, setUser] = useState(null);
    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
        router.push("/");
    };
    useEffect(() => {
        async function getUser() {
            // await supabase.auth.resend({
            //     type: 'signup',
            //     email: 'chayankq.cantiq@gmail.com'
            // });
            const {
                data: { session },
            } = await supabase.auth.getSession();
            if (session) {
                const {
                    data: { user },
                } = await supabase.auth.getUser();
                setUser(user);
            }
        }
        getUser();
    }, [pathname]);

    return (
        <>
            {user ? (
                <button
                    onClick={logout}
                    className="relative bg-primary text-white px-[43px] py-[19px] transition-colors duration-200 hover:text-link hover:opacity-90">
                    Log out
                </button>
            ) : (
                <Link
                    href="/login"
                    className="relative bg-primary text-white px-[43px] py-[19px] transition-colors duration-200 hover:text-link hover:opacity-90">
                    Log in
                </Link>
            )}
        </>
    );
};

export default NavLogin;
