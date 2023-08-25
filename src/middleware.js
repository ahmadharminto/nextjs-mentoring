import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });
    const pathname = req.nextUrl.pathname;

    await supabase.auth.getSession();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (pathname.startsWith("/dashboard") && !user) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    if (user && (pathname == "/login" || pathname == "/register")) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return res;
}

export const config = {
    matcher: ["/login", "/register", "/dashboard/:path*"],
};
