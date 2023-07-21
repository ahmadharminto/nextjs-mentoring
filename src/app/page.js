import Image from "next/image";
import Link from "next/link";

import Container from "./components/container";

export default function Home() {
  return (
    <div className="main">
      <Container>
        <nav className="flex justify-between items-center py-[3em]">
          <div className="logo">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={24}
              priority
            />
          </div>
          <ul className="menu flex items-center gap-[3.5em] h-[3.875em]">
            <li>
              <Link href="/" className="text-link transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-link focus:text-link transition-colors"
              >
                To Rent
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-link focus:text-link transition-colors"
              >
                For Sale
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-link focus:text-link transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link href="/">
                <button className="bg-primary text-white px-[2.6875em] py-[1.1875em]">
                  Log in
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
      <section className="hero">
        <Container className="mb-[3.5em]">
          <div className="hero grid grid-cols-12 items-center">
            <div className="col-span-7">
              <h1 className="font-medium text-[64px] tracking-[0.64px] leading-normal text-black max-w-[40rem]">
                Ready to
                <br />
                find your new home
              </h1>
            </div>
            <div className="col-span-5 justify-self-end">
              <p className="relative font-regular text-[1.25rem] tracking-[0.2px] leading-[34px] max-w-[23rem] before:absolute before:top-3 before:left-[-3em] before:w-[38px] before:h-[3px] before:bg-primary">
                looking for a house with a low price and quality here, and sell
                your house quickly here
              </p>
            </div>
          </div>
        </Container>
        <Container className="pl-0">
          <div
            className="relative w-full h-[483px]"
            style={{ backgroundImage: "url(/hero.png)" }}
          ></div>
        </Container>
      </section>
      <Container>
        <footer className="flex justify-between items-center py-[3em]">
          <div className="logo">Omah by @dzakimuzh</div>
          <ul className="menu flex items-center gap-[3.5em]">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </footer>
      </Container>
    </div>
  );
}
