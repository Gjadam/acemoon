'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

// Components
import Alert from "@/components/modules/alert/Alert";
import PanelCard from "@/components/modules/panelCard/PanelCard";
import PanelCardButton from "@/components/modules/panelCard/panelCardButton/PanelCardButton";
import Pagination from "@/components/modules/pagination/Pagination";

// Axios
import apiRequest from "@/Services/Axios/Configs/configs";

// SweetAlert
import Swal from "sweetalert2";
import toastAlert from "@/utils/toastAlert";

export default function ContactUs({ contacts }) {
    const [paginateContacts, setPaginateContacts] = useState(contacts)

    const router = useRouter()

    const showContactBody = (contactDetail) => {
        Swal.fire({
            title: contactDetail.body,
            confirmButtonText: "بستن",
            html: `<div>
                <div className=" flex items-center gap-1">
                    <span>نام و نام خانوادگی:</span>
                    <span>${contactDetail.name}</span>
                </div>
                ${contactDetail.email &&
                `    <div className=" flex items-center gap-1">
                    <span>ایمیل:</span>
                    <span>${contactDetail.email}</span>
                </div>`
                }
                <div className=" flex items-center gap-1">
                    <span>شماره موبایل:</span>
                    <span>${contactDetail.phone}</span>
                </div>
            </div>`
        })
    }

    const deleteContact = (contactID) => {
        Swal.fire({
            title: "آیا از حذف این پیام اطمینان دارید؟",
            text: "بعد از حذف شدن قابل بازیابی نخواهد بود.",
            icon: "question",
            confirmButtonText: "بله",
            showCancelButton: true,
            cancelButtonText: "خیر"
        }).then(result => {
            if (result.isConfirmed) {
                apiRequest.delete('/contact', { data: { contactID } })
                    .then(res => {
                        if (res.status === 200) {
                            toastAlert.fire({
                                text: "پیام موردنظر با موفقیت حذف شد.",
                                icon: 'success'
                            })
                            router.refresh()
                        }
                    })
            }
        })
    }


    return (
        <div className=" flex justify-center items-center flex-col gap-5 bg-white p-5 rounded-2xl ">
            {
                contacts.length > 0 ? (
                    <>
                        {
                            paginateContacts.map((contact) => (
                                <PanelCard title={contact.title} date={contacts.createdAt}>
                                    <PanelCardButton bgColor={"bg-sky-500"} text={"مشاهده"} onClick={() => showContactBody(contact)} />
                                    <PanelCardButton bgColor={"bg-red-500"} text={"حذف"} onClick={() => deleteContact(contact._id)} />
                                </PanelCard>
                            ))
                        }
                        <Pagination items={contacts} setShowItems={setPaginateContacts} />
                    </>
                ) : (
                    <Alert text={"پیامی یافت نشد"} />
                )
            }
        </div>
    );
}
