"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

import Container from "@/lib/components/container";

const Home = () => {
    const timeStamp = new Date().getTime();
    const testimoniRef = useRef({});
    const [testimoniScroll, setTestimoniScroll] = useState({
        isScrolling: false,
        clientX: 0,
        scrollX: 0,
    });
    function scroll(x) {
        testimoniRef.current?.scrollBy({
            top: 0,
            left: x,
            behavior: "smooth",
        });
    }
    function onTestimoniMouseDown(e) {
        setTestimoniScroll({
            ...testimoniScroll,
            isScrolling: true,
            clientX: e.clientX,
        });
    }
    function onTestimoniMouseUp() {
        setTestimoniScroll({ ...testimoniScroll, isScrolling: false });
    }
    function onTestimoniMouseMove(e) {
        const { clientX, scrollX } = testimoniScroll;
        if (testimoniScroll.isScrolling) {
            testimoniRef.current.scrollLeft = scrollX + e.clientX - clientX;
            setTestimoniScroll({
                ...testimoniScroll,
                scrollX: scrollX + e.clientX - clientX,
                clientX: e.clientX,
            });
        }
    }
    return (
        <>
            <section className="hero mb-[184px]">
                <Container className="mb-[56px]">
                    <div className="hero grid grid-cols-12 items-center">
                        <div className="col-span-7">
                            <h1 className="font-medium text-[64px] tracking-[0px] leading-normal text-black">
                                Ready to <br />
                                find your new home
                            </h1>
                        </div>
                        <div className="col-span-5 justify-self-end">
                            <p className="relative font-regular text-[20px] tracking-[0.2px] leading-[34px] max-w-[368px] before:absolute before:top-3 before:left-[-64px] before:w-[38px] before:h-[3px] before:bg-primary">
                                looking for a house with a low price and quality
                                here, and sell your house quickly here
                            </p>
                        </div>
                    </div>
                </Container>
                <Container className="pl-0">
                    <div
                        className="relative w-full h-[483px]"
                        style={{ backgroundImage: "url(/hero.png)" }}>
                        <div className="absolute w-[894px] h-auto bg-white shadow-md flex gap-1 right-0 bottom-[-45px] justify-end pt-[16px] pb-[16px] pl-[40px] pr-[16px] place-items-center">
                            <div className="field flex-1 flex flex-col">
                                <label
                                    htmlFor=""
                                    className="text-black font-medium">
                                    Select City
                                </label>
                                <span>Jakarta</span>
                            </div>
                            <div className="field flex-1 flex flex-col">
                                <label
                                    htmlFor=""
                                    className="text-black font-medium">
                                    Price
                                </label>
                                <span>$1000-$2000</span>
                            </div>
                            <div className="field flex-1 flex flex-col">
                                <label
                                    htmlFor=""
                                    className="text-black font-medium">
                                    Rooms
                                </label>
                                <span>3 rooms</span>
                            </div>
                            <div className="field flex-1 flex flex-col">
                                <label
                                    htmlFor=""
                                    className="text-black font-medium">
                                    Footage
                                </label>
                                <span>2 footage</span>
                            </div>
                            <div className="separator"></div>
                            <div>
                                <button className="relative bg-primary text-white px-[43px] py-[19px] transition-colors duration-200 hover:text-link hover:opacity-90">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="latest-listing mb-[128px]">
                <Container>
                    <div className="section-title flex gap-10 place-items-center mb-[50px]">
                        <h2 className="text-black text-[40px] font-medium tracking-[0.4px]">
                            The latest
                        </h2>
                        <div className="text-primary text-[24px]">For sale</div>
                        <div className="text-[24px]">To rent</div>
                        <div className="flex-1"></div>
                        <div>
                            <Link
                                href="/"
                                className="text-[24px] text-black underline">
                                View all
                            </Link>
                        </div>
                    </div>
                    <div className="section-content grid grid-cols-3 gap-[30px]">
                        <div className="card flex flex-col">
                            <div className="image">
                                <Image
                                    src={`/orange-house.png?${timeStamp}`}
                                    alt="logo"
                                    width={370}
                                    height={350}
                                    priority
                                />
                            </div>
                            <p className="title text-black text-[32px] font-medium">
                                Orange House
                            </p>
                            <p className="address">Gg Abiyasa</p>
                            <p className="price text-primary font-medium text-[24px] mt-[16px]">
                                $1,435,000
                            </p>
                        </div>
                        <div className="card flex flex-col">
                            <div className="image">
                                <Image
                                    src={`/white-house.png?${timeStamp}`}
                                    alt="logo"
                                    width={370}
                                    height={350}
                                    priority
                                />
                            </div>
                            <p className="title text-black text-[32px] font-medium">
                                White House
                            </p>
                            <p className="address">Gg Abiyasa</p>
                            <p className="price text-primary font-medium text-[24px] mt-[16px]">
                                $1,435,000
                            </p>
                        </div>
                        <div className="card flex flex-col">
                            <div className="image">
                                <Image
                                    src={`/green-house.png?${timeStamp}`}
                                    alt="logo"
                                    width={370}
                                    height={350}
                                    priority
                                />
                            </div>
                            <p className="title text-black text-[32px] font-medium">
                                Green House
                            </p>
                            <p className="address">Gg Abiyasa</p>
                            <p className="price text-primary font-medium text-[24px] mt-[16px]">
                                $1,435,000
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="testimonial">
                <Container>
                    <div className="section-title flex gap-10 place-items-center mb-[50px]">
                        <h2 className="text-black text-[40px] font-medium tracking-[0.4px]">
                            Some people are very
                            <br />
                            satisfied buying a house here
                        </h2>
                        <div className="flex-1"></div>
                        <div>
                            <Link
                                href="/"
                                className="text-[24px] text-black underline">
                                View all
                            </Link>
                        </div>
                    </div>
                </Container>
                <Container className="pr-0">
                    <div className="section-content relative">
                        <div
                            ref={testimoniRef}
                            onMouseDown={onTestimoniMouseDown}
                            onMouseUp={onTestimoniMouseUp}
                            onMouseMove={onTestimoniMouseMove}
                            className="flex overflow-x-hidden pb-1 cursor-grab">
                            <div className="flex flex-nowrap gap-[30px]">
                                <div className="inline-block">
                                    <div className="w-[570px] h-[400px] shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                                </div>
                                <div className="inline-block">
                                    <div className="w-[570px] h-[400px] shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                                </div>
                                <div className="inline-block">
                                    <div className="w-[570px] h-[400px] shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                                </div>
                                <div className="inline-block">
                                    <div className="w-[570px] h-[400px] shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute left-0 top-[50%] translate-y-[50%] cursor-pointer"
                            onClick={() => scroll(-570)}>
                            {"<"}
                        </div>
                        <div
                            className="absolute right-0 top-[50%] translate-y-[50%] cursor-pointer"
                            onClick={() => scroll(570)}>
                            {">"}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Home;
