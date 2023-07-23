import Container from "@/lib/components/container";

const Home = () => {
    return (
        <section className="hero">
            <Container className="mb-[56px]">
                <div className="hero grid grid-cols-12 items-center">
                    <div className="col-span-7">
                        <h1 className="font-medium text-[64px] tracking-[3px] leading-normal text-black max-w-[651px]">
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
                    style={{ backgroundImage: "url(/hero.png)" }}></div>
            </Container>
        </section>
    );
};

export default Home;
