'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// Components
import Button from '@/components/modules/button/Button'

// Icons
import { IoTrash } from 'react-icons/io5'

// Axios
import apiRequest from '@/Services/Axios/Configs/configs'

// SweetAlert
import toastAlert from '@/utils/toastAlert'
import Swal from 'sweetalert2'

export default function WishBox({ _id: productID, images, name }) {

    const router = useRouter()

    const removeProductFromWishlist = () => {

        Swal.fire({
            title: "آیا از حذف محصول اطمینان دارید؟",
            text: "بعد از حذف شدن قابل بازیابی نخواهد بود.",
            icon: "question",
            confirmButtonText: "بله",
            showCancelButton: true,
            cancelButtonText: "خیر"
        }).then(result => {
            if (result.isConfirmed) {
                apiRequest.delete('/wishlist', { data: { productID } })
                    .then(res => {
                        if (res.status === 200) {
                            toastAlert.fire({
                                text: "محصول موردنظر با موفقیت از لیست علاقه مندی ها حذف شد.",
                                icon: 'success'
                            })
                            router.refresh()
                        }
                    })
            }
        })


    }

    return (
        <div className=" flex flex-col  rounded-xl overflow-hidden bg-white">

            <div className=' w-80 h-40'>
                <Image
                    alt={images[0].url}
                    src={images[0].url}
                    width={0}
                    height={0}
                    sizes='100%'
                    className=' object-cover w-full h-full'
                />
            </div>
            <div className=" flex justify-between items-center border-t-1 p-3">
                <span className=' text-xl font-bold'>{name}</span>
                <Button type={'circle'} onClick={removeProductFromWishlist}>
                    <IoTrash />
                </Button>
            </div>
        </div>
    )
}
