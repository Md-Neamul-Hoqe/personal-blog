import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

export const metadata = {
    title: 'Home',
    description: "This is a blog on travel and food place near the area.",
};

/* TODO: make a favicon for this blog */
export default function MainPages({ children }) {
    return (
        <>
            <Navbar />
            <main className="min-h-[calc(100vh-302px)]">
                {children}
            </main>
            <Footer />
        </>
    );
}
