import { useRouter } from "next/navigation";

// Axios
import apiRequest from "@/Services/Axios/Configs/configs"

// SweetAlert
import toastAlert from "@/utils/toastAlert"
import Swal from "sweetalert2";

export default function useAuth() {

    const router = useRouter()

    const logOut = (e) => {
        e.preventDefault()
        Swal.fire({
            title: "آیا میخواهید خارج شوید؟",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "بله",
            cancelButtonText: "خیر"
        }).then(async (result) => {
            if (result.isConfirmed) {
                apiRequest.post('/auth/signout')
                    .then(res => {
                        if (res.status === 200) {
                            toastAlert.fire({
                                text: "با موفقیت خارج شدید",
                                icon: 'success'
                            })
                            router.replace('/')
                            router.refresh()
                        }
                    })
            }
        });

    }
    return { logOut }
}
