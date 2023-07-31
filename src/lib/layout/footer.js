import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

import Container from "@/lib/components/container";

const Footer = () => {
    return (
        <Container>
            <footer className="flex justify-between items-center py-[48px]">
                <div className="logo text-[24px] font-medium">
                    Omah by @dzakimuzh
                </div>
                <ul className="menu flex items-center gap-[16px] text-[24px]">
                    <li>
                        <FaInstagram className="text-primary" />
                    </li>
                    <li>
                        <FaFacebookF className="text-primary" />
                    </li>
                    <li>
                        <FaTwitter className="text-primary" />
                    </li>
                </ul>
            </footer>
        </Container>
    );
};

export default Footer;
