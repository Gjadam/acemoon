
// Components
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import Box from "@/components/templates/p-admin/index/Box";

// Icons
import { FaUsers } from 'react-icons/fa'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { IoTicketOutline } from 'react-icons/io5'
import { AiOutlineShoppingCart } from "react-icons/ai";

// Backend
import { authUser } from "@/utils/serverHelpers";


export default async function page() {

    const user = await authUser()

    return (
        <AdminPanelLayout>
            <div className="flex flex-col gap-5">
                <div className="flex justify-center items-center flex-wrap gap-5">
                    <Box title={'مجموع تیکت های دریافتی'} count={10}>
                        <IoTicketOutline />
                    </Box>
                    <Box title={'مجموع محصولات سایت'} count={5}>
                        <HiOutlineShoppingBag />
                    </Box>
                    <Box title={'مجموع سفارشات'} count={5}>
                        <AiOutlineShoppingCart />
                    </Box>
                    <Box title={'مجموع کاربرهای سایت'} count={5}>
                        <FaUsers />
                    </Box>
                </div>
                <div className=" flex justify-between items-center gap-5">
                    <div className=" w-1/2 h-full p-5 rounded-2xl bg-white">
                        <div className="">

                        </div>
                    </div>
                    <div className=" w-1/2 h-full p-5 rounded-2xl bg-white">
                    </div>
                </div>
            </div>
        </AdminPanelLayout>
    )
}
