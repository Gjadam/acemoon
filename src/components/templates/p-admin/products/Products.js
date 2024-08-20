'use client'
import { useState } from "react";

// Components
import PanelCard from "@/components/modules/panelCard/PanelCard";
import PanelCardButton from "@/components/modules/panelCard/panelCardButton/PanelCardButton";
import ProductDetail from "./productDetail/ProductDetail";
import EditProduct from "./editProduct/EditProduct";

// SweetAlert
import Swal from "sweetalert2";
import toastAlert from "@/utils/toastAlert";

// Axios
import apiRequest from "@/Services/Axios/Configs/configs";
import { useRouter } from "next/navigation";

export default function Products({ product, collections }) {

    const router = useRouter()

    const [isShowProductDetail, setIsShowProductDetail] = useState(false)
    const [isShowEditProduct, setIsShowEditProduct] = useState(false)

    const deleteProduct = () => {
        Swal.fire({
            title: "آیا میخواهید این محصول را حذف کنید؟",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "بله",
            cancelButtonText: "خیر"
        }).then((result) => {
            if (result.isConfirmed) {
                // fetch('/api/products', {
                //     method: 'DELETE',
                //     headers: {
                //       'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({ productID: product._id })
                //   })
                apiRequest.delete('/products', { data: { productID: product._id }})
                    .then(res => {
                        if (res.status === 200) {
                            toastAlert.fire({
                                text: "محصول موردنظر با موفقیت حذف شد.",
                                icon: 'success'
                            })
                            router.refresh()
                        }
                    })
            }
        });
    }

    return (
        <>
            <PanelCard title={product.name} date={product.createdAt}>
                <PanelCardButton text='مشاهده جزئیات' bgColor='bg-sky-500' onClick={() => setIsShowProductDetail(true)} />
                <PanelCardButton text='ویرایش' bgColor='bg-blue-500' onClick={() => setIsShowEditProduct(true)} />
                <PanelCardButton text='حذف' bgColor='bg-red-500' onClick={deleteProduct} />
            </PanelCard>
            <ProductDetail isShowProductDetail={isShowProductDetail} setIsShowProductDetail={setIsShowProductDetail} {...product} />
            <EditProduct isShowEditProduct={isShowEditProduct} setIsShowEditProduct={setIsShowEditProduct} collections={collections} {...product} />
        </>
    )
}
