'use client'
import { useRouter } from "next/navigation";

// Components
import PanelCard from "@/components/modules/panelCard/PanelCard";
import PanelCardButton from "@/components/modules/panelCard/panelCardButton/PanelCardButton";
import ProductPrice from "@/components/modules/productPrice/ProductPrice";

// SweetAlert
import toastAlert from "@/utils/toastAlert";
import Swal from "sweetalert2";


export default function Box({ id, name, price, color, size, count }) {

    const router = useRouter()

    const removeProductFormCart = () => {
        Swal.fire({
            title: "آیا میخواهید این محصول را از سبد خرید حذف کنید؟",
            text: "بعد از حذف شدن قابل بازیابی نخواهد بود.",
            icon: "question",
            confirmButtonText: "بله",
            showCancelButton: true,
            cancelButtonText: "خیر"
          }).then(result => {
            if(result.isConfirmed) {
                const cart = JSON.parse(localStorage.getItem('cart'))
        
                const updateCart = cart.filter(product => product.id !== id);
        
                localStorage.setItem('cart', JSON.stringify(updateCart))
                
                toastAlert.fire({
                    text: "محصول با موفقیت از سبد خرید حذف شد.",
                    icon: "success",
                }).then(() => {
                    router.refresh()
                })
            }
          })
    }


    return (
        <div className=" border-b-1 last:border-none  border-zinc-100 pb-3 ">

        <PanelCard text={<ProductPrice price={price} />} title={name} >
            {
                color &&
                <PanelCardButton condition={`رنگ: ${color}`} bgColor={'bg-sky-500'}/>
            }
            {
                size &&
                <PanelCardButton condition={`سایز: ${size}`} bgColor={'bg-teal-500'}/>
            }
            <PanelCardButton condition={`تعداد: ${count}`} bgColor={'bg-cyan-500'}/>
            <PanelCardButton text={'حذف'} bgColor={'bg-red-500'} onClick={removeProductFormCart}/>

        </PanelCard>
            </div>
    )
}
