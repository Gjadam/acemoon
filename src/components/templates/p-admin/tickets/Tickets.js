'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

// Components
import PanelCard from "@/components/modules/panelCard/PanelCard";
import PanelCardButton from "@/components/modules/panelCard/panelCardButton/PanelCardButton";
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader";
import Alert from "@/components/modules/alert/Alert";
import Pagination from "@/components/modules/pagination/Pagination";

// SweetAlert
import Swal from "sweetalert2";
import toastAlert from "@/utils/toastAlert";

// Axios
import apiRequest from "@/Services/Axios/Configs/configs";

export default function Tickets({ tickets }) {


    const [paginateTickets, setPaginateTickets] = useState(tickets)

    const router = useRouter()

    const showTicketBody = (ticketDetail) => {
        Swal.fire({
            title: ticketDetail.body,
            confirmButtonText: "بستن",
            html: `<div>
                <div className=" flex items-center gap-1">
                    <span>نام کاربری:</span>
                    <span>${ticketDetail.user.name}</span>
                </div>
                <div className=" flex items-center gap-1">
                    <span>ایمیل:</span>
                    <span>${ticketDetail.user.email}</span>
                </div>
            </div>`
        })
    }

    const answerToTicket = (ticketID) => {
        Swal.fire({
            title: "پاسخ موردنظر را وارد کنید",
            input: 'textarea',
            confirmButtonText: "ارسال"
        }).then((answer) => {
            if (answer.value) {
                apiRequest.post('/tickets/answer', {
                    ticketID,
                    answer: answer.value
                })
                    .then(res => {
                        if (res.status === 200) {
                            toastAlert.fire({
                                text: "پاسخ شما با موفقیت ارسال شد",
                                icon: "success"
                            })
                        }
                        router.refresh()
                    })
            }
        })
    }

    const deleteTicket = (ticketID) => {
        Swal.fire({
            title: "آیا از حذف این تیکت اطمینان دارید؟",
            text: "بعد از حذف شدن قابل بازیابی نخواهد بود.",
            icon: "question",
            confirmButtonText: "بله",
            showCancelButton: true,
            cancelButtonText: "خیر"
        }).then(result => {
            if (result.isConfirmed) {
                apiRequest.delete('/tickets', { data: { ticketID } })
                    .then(res => {
                        if (res.status === 200) {
                            toastAlert.fire({
                                text: "تیکت موردنظر با موفقیت حذف شد.",
                                icon: 'success'
                            })
                            router.refresh()
                        }
                    })
            }
        })
    }

    return (
        <div>
            <SectionHeader title={'تیکت های پشتیبانی'} />
            <div className=" flex justify-center items-center flex-col gap-5 bg-white p-5 rounded-2xl w-full">
                {
                    tickets.length > 0 ? (
                        <>
                            {
                                paginateTickets.slice(0, 9).map(ticket => (

                                    <PanelCard key={ticket._id} title={ticket.title} date={ticket.createdAt}>
                                        <PanelCardButton bgColor={'bg-sky-500'} text={'مشاهده'} onClick={() => showTicketBody(ticket)} />
                                        {
                                            ticket.answer ? (
                                                <PanelCardButton bgColor={'bg-green-500'} condition={'پاسخ داده شده'} />
                                            ) : (
                                                <PanelCardButton bgColor={'bg-emerald-500'} text={'پاسخ'} onClick={() => answerToTicket(ticket._id)} />
                                            )
                                        }
                                        <PanelCardButton bgColor={'bg-red-500'} text={'حذف'} onClick={() => deleteTicket(ticket._id)} />
                                        <PanelCardButton bgColor={'bg-zinc-500'} text={'مسدود'} />
                                    </PanelCard>
                                ))
                            }
                            <Pagination items={tickets} setShowItems={setPaginateTickets} />
                        </>
                    ) : (
                        <Alert text={'تیکتی یافت نشد'} />
                    )
                }
            </div>
        </div>
    )
}
