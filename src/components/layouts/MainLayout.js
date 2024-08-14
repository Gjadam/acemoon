
// Components
import Navbar from '../modules/navbar/Navbar'
import Footer from '../modules/footer/Footer'

// Backend
import { authUser } from '@/utils/serverHelpers'

export default async function MainLayout({ children }) {
    
    const user = await authUser()
    return (
        <>
            <Navbar isLogin={user} />
            {children}
            <Footer />
        </>
    )
}
