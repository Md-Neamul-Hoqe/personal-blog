import ContactForm from "@/components/contact/contactForm";
import formBgImg from '@/assets/contact/authentication.jpg'
import { facebook, linedIn } from "@/utils/constants";
import Link from 'next/link';

const ContactPage = () => {

    return (
        <div className="hero min-h-screen bg-transparent"
            style={{ backgroundImage: `url(${formBgImg?.src})` }}>
            <div className="hero-content max-sm:px-0 flex-col lg:flex-row gap-6 max-xl:py-20">
                <div className="card max-sm:card-compact max-sm:rounded-none w-full max-w-xl shadow-2xl bg-base-100">
                    <ContactForm />
                </div>
                <div className="text-left w-full max-w-xl max-md:px-5">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-600">Get in Touch</h1>
                    <p className="pb-6 pt-2 text-gray-500 text-base md:text-lg">Have a question, feedback, or just want to say hello? We&apos;d love to hear from you! Feel free to reach out to us using the contact form below, and we&apos;ll get back to you as soon as possible.</p>

                    <h1 className="text-xl md:text-4xl font-bold text-gray-600">Contact Information</h1>
                    <p className="pb-3 pt-2 text-gray-500 text-base md:text-lg">If you prefer to get in touch through other means, you can reach us via email or phone:</p>

                    <address className="pb-6 text-gray-500 text-base md:text-lg">
                        <p>Email: hoqe1997@gmail.com</p>
                        <p>Phone: +88 01725 XXX XXX</p>
                    </address>

                    <h1 className="text-xl md:text-4xl font-bold text-gray-600">Social Media</h1>
                    <p className="pt-2 pb-3 text-gray-500 text-base md:text-lg">Stay connected with us on social media for the latest updates, behind-the-scenes peeks, and more:</p>

                    <address className="text-gray-500">
                        <p>Facebook: <Link className="hover:underline underline-offset-2" href={facebook}>mdneamulhoqe.neamul</Link></p>
                        <p>LinkedIn: <Link className="hover:underline underline-offset-2" href={linedIn}>mneamulh</Link></p>
                    </address>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;