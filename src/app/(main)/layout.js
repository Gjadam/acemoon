
// Components
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import { authUser } from "@/utils/serverHelpers";

export default async function layout({ children }) {

    const user = await authUser()
    return (
        <>
            <Navbar isLogin={user}/>
            {children}
            <Footer />
        </>
    )
}
