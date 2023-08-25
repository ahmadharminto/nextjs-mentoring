"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import Container from "@/lib/components/container";

export default function Register() {
    const { register, handleSubmit } = useForm();
    const { push } = useRouter();
    const supabase = createClientComponentClient();
    const onSubmit = async (e) => {
        const res = await supabase.auth.signUp({
            email: e.email,
            password: e.password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        });
        if (res.error?.status === 422) {
            alert(res.error.message);
        } else {
            push("/login");
        }
    };

    return (
        <>
            <section>
                <Container>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("email")} placeholder="Email" />
                            <input
                                {...register("password")}
                                type="password"
                                placeholder="Password"
                            />
                            <button type="submit">Sign up</button>
                        </form>
                    </div>
                    <div>
                        Already have account?{" "}
                        <Link href="/login">Login here</Link>
                    </div>
                </Container>
            </section>
        </>
    );
}
