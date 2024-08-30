
// Components
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import Box from "@/components/templates/p-admin/index/Box";
import Table from "@/components/modules/p-user/Table";
import PanelCard from "@/components/modules/panelCard/PanelCard";
import PanelCardButton from "@/components/modules/panelCard/panelCardButton/PanelCardButton";
import Link from "next/link";
import Alert from "@/components/modules/alert/Alert";

// Icons
import { FaUsers } from 'react-icons/fa'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { IoTicketOutline } from 'react-icons/io5'
import { AiOutlineShoppingCart } from "react-icons/ai";

// Backend
import connectToDB from "@/configs/db";
import TicketMode from "@/models/Ticket";
import ProductModel from "@/models/Product";
import UserModel from "@/models/User";


export default async function page() {
    connectToDB()
    const tickets = await TicketMode.find({})
    const products = await ProductModel.find({})
    const users = await UserModel.find({})

    return (
        <AdminPanelLayout>
            <div className="flex flex-col gap-5">
                <div className="flex justify-center items-center flex-wrap gap-5">
                    <Box title={'مجموع تیکت های دریافتی'} count={tickets.length}>
                        <IoTicketOutline />
                    </Box>
                    <Box title={'مجموع محصولات سایت'} count={products.length}>
                        <HiOutlineShoppingBag />
                    </Box>
                    <Box title={'مجموع سفارشات'} count={5}>
                        <AiOutlineShoppingCart />
                    </Box>
                    <Box title={'مجموع کاربرهای سایت'} count={users.length}>
                        <FaUsers />
                    </Box>
                </div>
                <div className=" flex justify-between items-start flex-wrap gap-5">
                    <Table title={'تیکت های اخیر'} linkText={'همه تیکت ها'} route={'/p-user/tickets'}>
                        {
                            tickets.length > 0 ? (
                                tickets.slice(0, 10).map(ticket => (
                                    <PanelCard title={ticket.title} date={ticket.createdAt} >
                                       
                                        <PanelCardButton bgColor={ticket.hasAnswer ? 'bg-green-500' : "bg-zinc-500"} condition={ticket.hasAnswer ? 'پاسخ داده شده' : 'در انتظار پاسخ'} />
                                    </PanelCard>
                                ))
                            ) : (
                                <Alert text={'تیکتی ثبت نکرده اید'} />
                            )
                        }
                    </Table>
                    <Table title={'سفارش های اخیر'} linkText={'همه سفارش ها'} route={'/p-user/orders'}>
                        <PanelCard></PanelCard>
                    </Table>
                </div>
            </div>
        </AdminPanelLayout>
    )
}
