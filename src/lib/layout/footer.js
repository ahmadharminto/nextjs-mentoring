import Container from "@/lib/components/container";

const Footer = () => {
    return (
        <Container>
            <footer className="flex justify-between items-center py-[48px]">
                <div className="logo">Omah by @dzakimuzh</div>
                <ul className="menu flex items-center gap-[3.5em]">
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                </ul>
            </footer>
        </Container>
    );
};

export default Footer;
