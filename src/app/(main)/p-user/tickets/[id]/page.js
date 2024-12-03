import Image from "next/image";
import Link from "next/link";

// Components
import Button from "@/components/modules/button/Button";

// Icons
import { TbArrowBack } from "react-icons/tb";
import { IoCheckmarkDoneSharp, IoCheckmarkSharp } from "react-icons/io5";

// Backend
import connectToDB from "@/configs/db";
import TicketModel from "@/models/Ticket";
import Alert from "@/components/modules/alert/Alert";

export default async function page({ params }) {
    connectToDB()
    const ticketID = params.id

    const ticket = await TicketModel.findOne({ _id: ticketID })

    return (
            <div className=" flex flex-col justify-start gap-10 h-120 overflow-y-auto xl:h-full bg-white p-5 rounded-xl ">
                <div className=" flex justify-between items-center w-full p-3 border-b-1">
                    <div className=" flex items-center gap-3">
                        <Image
                            alt="user-icon"
                            src='/images/png/user-icon.png'
                            width={50}
                            height={0}
                            className=" rounded-full border-1 p-0.5"
                        />
                        <span className=" text-zinc-600 font-bold">ادمین</span>
                    </div>
                    <Link href={'/p-user/tickets'}>
                        <Button type={'circle'} >
                            <TbArrowBack className=" rotate-180" />
                        </Button>
                    </Link>
                </div>
                <div className=" flex flex-col gap-5 p-5 ">
                    <div className=" flex flex-col gap-3 bg-sky-500 text-white max-w-96 p-3 rounded-l-xl rounded-tr-xl">
                        <span>{ticket.body}</span>
                        <div className=" flex items-center gap-1 self-end">
                            {
                                ticket.hasAnswer ? (
                                    <IoCheckmarkDoneSharp className=" mb-1" />
                                ) : (
                                    <IoCheckmarkSharp className=" mb-1" />
                                )
                            }
                            <span className=" text-xs">{new Date(ticket.createdAt).toLocaleDateString("fa-IR")}</span>
                        </div>
                    </div>
                    {
                        ticket.hasAnswer ? (
                            <div className=" flex flex-col gap-3 self-end bg-rose-500 text-white max-w-96 p-5 rounded-r-xl rounded-tl-xl">
                                <span>{ticket.answer}</span>
                                <div className=" flex items-center gap-1 self-start">
                                    <span className=" text-xs">{new Date(ticket.updatedAt).toLocaleDateString("fa-IR")}</span>
                                </div>
                            </div>

                        ) : (
                            <Alert text={'پاسخی از سمت پشتیبانی دریافت نشده است.'} />
                        )
                    }
                </div>
            </div>
    )
}
