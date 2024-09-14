import Link from "next/link";

// Components
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import Box from "@/components/modules/p-user/Box";
import Table from "@/components/modules/p-user/Table";
import PanelCard from "@/components/modules/panelCard/PanelCard";
import PanelCardButton from "@/components/modules/panelCard/panelCardButton/PanelCardButton";
import Alert from "@/components/modules/alert/Alert";

// Icons
import { IoCheckmarkCircle, IoTicket } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";

// Backend
import connectToDB from "@/configs/db";
import TicketModel from "@/models/Ticket";
import { authUser } from "@/utils/serverHelpers";

export default async function page() {
  connectToDB()
  const user = await authUser()
  const tickets = await TicketModel.find({ user: user._id })
  .sort({_id: -1})

  return (
    <UserPanelLayout>
      <div className=" flex flex-col gap-5">
        <div className=" flex justify-between items-center flex-wrap gap-5 w-full">
          <Box title={'مجموع تیکت ها'} count={tickets.length} >
            <IoTicket />
          </Box>
          <Box title={'پاسخ داده شده'} count={tickets.filter(ticket => ticket.hasAnswer === true).length} >
            <IoCheckmarkCircle />
          </Box>
          <Box title={'در انتظار پاسخ'} count={tickets.filter(ticket => ticket.hasAnswer === false).length} >
            <IoIosTime />
          </Box>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-5">
          <Table title={'تیکت های پشتیبانی'} linkText={'افزودن تیکت جدید'} route={'/p-user/tickets/add-ticket'}>
            {
              tickets.length > 0 ? (
                tickets.map(ticket => (
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
        </div>
      </div>
    </UserPanelLayout>
  )
}
