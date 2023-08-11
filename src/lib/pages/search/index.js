import { notFound } from "next/navigation";

import Container from "@/lib/components/container";

const SearchResultPage = ({ params }) => {
    const validSlug = ["to-rent", "for-sale"];
    if (!validSlug.includes(params.slug[0])) {
        notFound();
    }
    return (
        <Container>
            <div>
                <ol className="list-[roman]">
                    {params.slug.map((slug, i) => {
                        return <li key={i}>{slug}</li>;
                    })}
                </ol>
            </div>
        </Container>
    );
};

export default SearchResultPage;
