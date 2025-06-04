import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <section>
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </section>
            <Footer />
        </>
    );
}