
// Components
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";

export default function layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
