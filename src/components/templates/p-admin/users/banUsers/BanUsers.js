'use client'
import { useRouter } from "next/navigation";
// Components
import Alert from "@/components/modules/alert/Alert";
import PanelCard from "@/components/modules/panelCard/PanelCard";
import PanelCardButton from "@/components/modules/panelCard/panelCardButton/PanelCardButton";

// Axios
import apiRequest from "@/Services/Axios/Configs/configs";

// SweetAlert
import Swal from "sweetalert2";
import toastAlert from "@/utils/toastAlert";

export default function BanUsers({ banUsers }) {

    const router = useRouter()

    const showBanUserDetail = (banUserDetail) => {
        Swal.fire({
            title: banUserDetail.phone,
            text: banUserDetail.email,
            confirmButtonText: "بستن",
        })
    }

    const unBanUser = (banUserID) => {
        Swal.fire({
            title: "آیا میخواهید این کاربر را رفع مسدودیت کنید؟",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "بله",
            cancelButtonText: "خیر"
        }).then(async (result) => {
            if (result.isConfirmed) {
                apiRequest.delete('/user/ban', { data: { banUserID } })
                    .then(res => {
                        if (res.status === 200) {
                            toastAlert.fire({
                                text: "کاربر مورد نظر با موفقیت رفع مسدودیت شد",
                                icon: "success",
                            })
                            router.refresh()
                        }
                    })
            }
        })
    }

    return (
        <div className=' bg-white p-5 rounded-2xl mt-5'>
            {
                banUsers.length > 0 ? (
                    banUsers.map(banUser => (
                        <PanelCard title={banUser.phone} date={banUser.createdAt}>
                            <PanelCardButton bgColor={'bg-sky-500'} text={'مشاهده جزئیات'} onClick={() => showBanUserDetail(banUser)} />
                            <PanelCardButton bgColor={'bg-green-500'} text={'رفع مسدودیت'} onClick={() => unBanUser(banUser._id)} />
                        </PanelCard>
                    ))
                ) : (
                    <Alert text={'کاربر مسدود شده ای یافت نشد'} />
                )
            }
        </div>
    )
}
