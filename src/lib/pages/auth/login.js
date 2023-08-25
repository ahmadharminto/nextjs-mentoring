"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import Container from "@/lib/components/container";

export default function Login() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();
    const supabase = createClientComponentClient();
    const onSubmit = async (e) => {
        const { error } = await supabase.auth.signInWithPassword({
            email: e.email,
            password: e.password,
        });
        router.push("/dashboard");
        if (error) {
            alert(error.message);
        } else {
            router.push("/dashboard");
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
                            <button type="submit">Sign in</button>
                        </form>
                    </div>
                    <div>
                        New to Omah? <Link href="/register">Register here</Link>
                    </div>
                </Container>
            </section>
        </>
    );
}
