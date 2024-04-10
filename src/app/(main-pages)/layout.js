import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

export const metadata = {
    title: 'Home',
    description: "This is a blog on travel and food place near the area.",
};

export default function MainPages({ children }) {

    return (
        <body>
            <Navbar />
            <main className="min-h-[calc(100vh-302px)]">
                {children}
            </main>
            <Footer />
        </body>
    );
}
