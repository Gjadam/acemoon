'use client'
import Alert from "@/components/modules/alert/Alert";
import Pagination from "@/components/modules/pagination/Pagination";
// Components
import PanelCard from "@/components/modules/panelCard/PanelCard";
import PanelCardButton from "@/components/modules/panelCard/panelCardButton/PanelCardButton";
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader";

// Axios
import apiRequest from "@/Services/Axios/Configs/configs";

// SweetAlert
import toastAlert from "@/utils/toastAlert";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Comments({ comments }) {

    const [paginateComments, setPaginateComments] = useState(comments)

    const router = useRouter()
    const showCommentBody = (commentDetail) => {
        Swal.fire({
            title: commentDetail.body,
            confirmButtonText: "بستن",
            html: `<div>
                <div className=" flex items-center gap-1">
                    <span>نام کاربری:</span>
                    <span>${commentDetail.username}</span>
                </div>
                <div className=" flex items-center gap-1">
                    <span>ایمیل:</span>
                    <span>${commentDetail.email}</span>
                </div>
            </div>`
        })
    }

    const acceptComment = (commentID) => {
        apiRequest.post('/comments/accept', {
            commentID
        })
            .then(res => {
                if (res.status === 200) {
                    toastAlert.fire({
                        text: "کامنت موردنظر با موفقیت تایید شد"
                    })
                }
                router.refresh()
            })
    }

    const rejectComment = (commentID) => {
        apiRequest.post('/comments/reject', {
            commentID
        })
            .then(res => {
                if (res.status === 200) {
                    toastAlert.fire({
                        text: "کامنت موردنظر با موفقیت رد شد"
                    })
                }
                router.refresh()
            })
    }

    const answerComment = (commentID) => {
        Swal.fire({
            title: "پاسخ موردنظر را وارد کنید",
            input: 'textarea',
            confirmButtonText: "ارسال"
        }).then((answer) => {
            if (answer.value) {
                apiRequest.post('/comments/answer', {
                    commentID,
                    answer: answer.value
                })
                    .then(res => {
                        if (res.status === 200) {
                            toastAlert.fire({
                                text: ".پاسخ شما با موفقیت ارسال شد"
                            })
                        }
                        router.refresh()
                    })
            }
        })
    }

    const deleteComment = (commentID) => {
        Swal.fire({
            title: "آیا از حذف این کامنت اطمینان دارید؟",
            text: "بعد از حذف شدن قابل بازیابی نخواهد بود.",
            icon: "question",
            confirmButtonText: "بله",
            showCancelButton: true,
            cancelButtonText: "خیر"
        }).then(result => {
            if (result.isConfirmed) {
                apiRequest.delete('/comments', { data: { commentID } })
                    .then(res => {
                        if (res.status === 200) {
                            toastAlert.fire({
                                text: "کامنت موردنظر با موفقیت حذف شد.",
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
            <SectionHeader title={'کامنت ها'} />
            <div className=" flex justify-center items-center flex-col gap-5 bg-white p-5 rounded-2xl w-full">
                {
                    comments.length > 0 ? (
                        <>
                            {
                                paginateComments.slice(0, 9).map(comment => (
                                    <PanelCard title={comment.productID.name} date={comment.date}>
                                        <PanelCardButton bgColor={'bg-sky-500'} text={'مشاهده'} onClick={() => showCommentBody(comment)} />
                                        <PanelCardButton bgColor={comment.isAccept ? 'bg-rose-500' : 'bg-green-500'} text={comment.isAccept ? 'رد کردن' : 'تایید کردن'} onClick={comment.isAccept ? () => rejectComment(comment._id) : () => acceptComment(comment._id)} />
                                        {
                                            comment.answer ? (
                                                <PanelCardButton bgColor={'bg-emerald-500'} condition={'پاسخ داده شده'} />
                                            ) : (
                                                <PanelCardButton bgColor={'bg-emerald-500'} text={'پاسخ'} onClick={() => answerComment(comment._id)} />
                                            )
                                        }
                                        <PanelCardButton bgColor={'bg-red-500'} text={'حذف'} onClick={() => deleteComment(comment._id)} />
                                    </PanelCard>
                                ))
                            }
                            <Pagination items={comments} setShowItems={setPaginateComments} />
                        </>
                    ) : (
                        <Alert text={'کامنتی یافت نشد'} />
                    )
                }
            </div>
        </div>
    )
}
