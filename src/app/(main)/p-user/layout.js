
// Components
import CategoryHeader from '@/components/modules/categoryHeader/CategoryHeader'
import SideBar from '@/components/templates/p-user/SideBar'

// Backend
import { authUser } from '@/utils/serverHelpers'

export default async function layout({ children }) {

    const user = await authUser()

    if (!user) {
        redirect("/login-otp")
    }

    return (
        <>
            <CategoryHeader title={'حساب کاربری من'} />
            <div className=" relative container mx-auto  flex flex-col gap-5 xl:flex-row justify-center items-start xl:h-screen p-5">
                <SideBar user={user} />
                <div className="p-5 bg-zinc-100  w-full  h-full rounded-3xl overflow-y-auto  ">
                    {children}
                </div>
            </div>
        </>
    )
}
