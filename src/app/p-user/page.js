import Link from "next/link";

// Components
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import Box from "@/components/modules/p-user/Box";
import Table from "@/components/modules/p-user/Table";
import PanelCard from "@/components/modules/panelCard/PanelCard";
import PanelCardButton from "@/components/modules/panelCard/panelCardButton/PanelCardButton";
import Alert from "@/components/modules/alert/Alert";

// Icons
import { IoBasket, IoHeart, IoTicket } from "react-icons/io5";

// Backend
import connectToDB from "@/configs/db";
import TicketModel from "@/models/Ticket";
import WishlistModel from "@/models/Wishlist";
import { authUser } from "@/utils/serverHelpers";

export default async function page() {

  connectToDB()
  const user = await authUser()
  const tickets = await TicketModel.find({ user: user?._id })
    .sort({ _id: -1 })

  const wishes = await WishlistModel.find({ user: user?._id })


  return (

    <UserPanelLayout>
      <div className=" flex flex-col gap-5">
        <div className=" flex justify-between items-center flex-wrap gap-5">
          <Box title={'مجموع سفارشات'} count={252} >
            <IoBasket />
          </Box>
          <Box title={'مجموع تیکت های پشتیبانی'} count={tickets.length} >
            <IoTicket />
          </Box>
          <Box title={'مجموع علاقه مندی ها'} count={wishes.length} >
            <IoHeart />
          </Box>
        </div>
        <div className="flex justify-between items-start flex-wrap gap-5">
        <Table title={'تیکت های پشتیبانی'} linkText={'همه تیکت ها'} route={'/p-user/tickets'}>
            {
              tickets.length > 0 ? (
                tickets.slice(0, 5).map(ticket => (
                  <PanelCard key={ticket._id} title={ticket.title} >
                    <Link href={`/p-user/tickets/${ticket._id}`}>
                      <PanelCardButton bgColor={'bg-sky-500'} text={"مشاهده"} />
                    </Link>
                    <PanelCardButton bgColor={ticket.hasAnswer ? 'bg-green-500' : "bg-zinc-500"} condition={ticket.hasAnswer ? 'تایید شده' : 'در انتظار تایید'} />
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
    </UserPanelLayout>
  )
}
