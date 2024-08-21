import { redirect } from "next/navigation";

// Components
import SideBar from "../templates/p-admin/SideBar";

// Backend
import { authUser } from "@/utils/serverHelpers";


export default async function AdminPanelLayout({ children }) {
    const user = await authUser()

    if (user) {
        if (user.role !== 'ADMIN') {
            redirect("/login")
        }
    } else {
        redirect("/login")
    }
    
    return (
        <div className="  flex flex-col xl:flex-row justify-center items-start xl:h-screen overflow-hidden pl-5 pr-5 xl:pr-0 py-5">
            <SideBar user={user} />
            <div className=" p-5 bg-zinc-100 w-full h-full rounded-3xl overflow-y-auto border-1 ">
                {children}
            </div>
        </div>
    )
}
