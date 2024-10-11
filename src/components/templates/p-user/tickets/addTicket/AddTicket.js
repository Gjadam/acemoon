'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Components
import Button from "@/components/modules/button/Button";

// Icons
import { IoMdSend } from "react-icons/io";
import { TbArrowBack } from "react-icons/tb";
import { IoCheckmarkSharp } from "react-icons/io5";

// Axios
import apiRequest from "@/Services/Axios/Configs/configs";

// SweetAlert
import toastAlert from "@/utils/toastAlert";

export default function AddTicket() {
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const [isShowTicketBody, setIsShowTicketBody] = useState(false)

    const addTicket = () => {

        apiRequest.post('/tickets', {
            title,
            body
        })
            .then(res => {
                if (res.status === 201) {
                    setIsShowTicketBody(true)
                    toastAlert.fire({
                        text: "تیکت شما با موفقیت ارسال شد",
                        icon: "success"
                    }).then(() => {
                        router.replace('/p-user/tickets')
                    })
                }
            })
            .catch(err => {
                if (err.response.status === 400) {
                    toastAlert.fire({
                        text: "عنوان و پیغام تیکت الزامی است",
                        icon: "error"
                    })
                }
            })
    }

    return (
        <div className=" flex flex-col justify-between gap-10 h-120 overflow-y-auto xl:h-full bg-white p-5 rounded-xl ">
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
                {
                    isShowTicketBody ? (
                        <div className=" flex flex-col gap-3 bg-sky-500 text-white max-w-96 p-3 rounded-l-xl rounded-tr-xl">
                            <span>{body}</span>
                            <div className=" flex items-center gap-1 self-end">
                                <IoCheckmarkSharp className=" mb-1" />
                                <span className=" text-xs">{new Date().toLocaleDateString("fa-IR")}</span>
                            </div>
                        </div>

                    ) : (
                        <div className=" flex justify-center items-center flex-col gap-3 text-center">
                            <h1 className=" text-3xl font-bold text-secondary">پیغامی وجود ندارد</h1>
                            <span className=" text-zinc-500">میتوانید از قسمت زیر پیغام خود را برای پشتیبانی سایت بفرستید</span>
                        </div>
                    )
                }
            </div>

            <div className=" flex items-start gap-5 flex-col md:flex-row">
                <div className=" w-full sm:w-96">
                    <input type="text" disabled={isShowTicketBody} placeholder="عنوان تیکت" className={` ${isShowTicketBody && 'opacity-50 cursor-not-allowed'} bg-zinc-100 w-full p-3 rounded-3xl outline-none`} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className=" flex justify-center items-center gap-3 w-full">
                    <input type="text" disabled={isShowTicketBody} placeholder="پیام..." className={` ${isShowTicketBody && 'opacity-50 cursor-not-allowed'} bg-zinc-100 w-full p-3 rounded-3xl outline-none`} value={body} onChange={(e) => setBody(e.target.value)} />
                    <div className={` rotate-180 p-3.5 text-white bg-blue-500  rounded-full ${isShowTicketBody ? 'opacity-50  cursor-not-allowed' : 'cursor-pointer  hover:bg-secondary  transition-colors'}  `} onClick={addTicket}>
                        <IoMdSend className=" text-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}
