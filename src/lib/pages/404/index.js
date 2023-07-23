import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: `404 - ${process.env.APP_NAME}`,
};

const Page404 = () => {
    return (
        <>
            <div className="grid gap-2 p-12 justify-center">
                <Image src="/404.svg" width={320} height={320} alt="404" />
            </div>
            <div className="grid gap-6 text-center">
                <div className="grid gap-2">
                    <h3>Page not Found</h3>
                    <p>We can&apos;t find the page you are looking for :(</p>
                </div>
                <div>
                    <Link
                        href="/"
                        className="bg-primary text-white px-[43px] py-[19px]">
                        Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Page404;
