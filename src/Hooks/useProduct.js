
// Axios
import apiRequest from "@/Services/Axios/Configs/configs"

// SweetAlert
import toastAlert from "@/utils/toastAlert"

export default function useProduct(productID) {

    const addToWishlist = () => {
        apiRequest.post('/wishlist', {
            productID
        })
            .then(res => {
                if (res.status === 201) {
                    toastAlert.fire({
                        text: "محصول به لیست علاقه مندی ها اضافه شد.",
                        icon: "success"
                    })
                }
            })
            .catch(err => {
                if (err.response.status === 401) {
                    toastAlert.fire({
                        text: "لطفا ابتدا وارد حساب کاربری خود شوید.",
                        icon: "error"
                    })
                } else if (err.response.status === 422) {
                    toastAlert.fire({
                        text: "این محصول قبلا به لیست علاقه مندی ها اضافه شده.",
                        icon: "error"
                    })
                }
            })
    }


    return { addToWishlist }

}
