'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"

// Components
import FormInput from "@/components/modules/formInput/FormInput"
import Button from "@/components/modules/button/Button"
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader"

// Axios
import apiRequest from "@/Services/Axios/Configs/configs"

// SweetAlert
import toastAlert from "@/utils/toastAlert"
import Pagination from "@/components/modules/pagination/Pagination"
import Alert from "@/components/modules/alert/Alert"
import PanelCard from "@/components/modules/panelCard/PanelCard"
import PanelCardButton from "@/components/modules/panelCard/panelCardButton/PanelCardButton"
import Swal from "sweetalert2"

export default function Addresses({ addresses }) {

    const router = useRouter()

    const [paginateAddresses, setPaginateAddresses] = useState(addresses)

    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [zipCode, setZipCode] = useState('')

    const addNewAddress = () => {
        const newAddress = ` ${province} / ${city} / ${address} / کدپستی: ${zipCode} `

        apiRequest.post('/user/address', { text: newAddress })
            .then(res => {
                if (res.status === 201) {
                    toastAlert.fire({
                        text: "آدرس جدید با موفقیت ایجاد شد",
                        icon: 'success'
                    }).then(() => {
                        router.refresh()
                    })
                }
            })
    }

    const deleteAddress = (addressID) => {
        Swal.fire({
            title: "آیا میخواهید این آدرس را حذف کنید؟",
            text: "بعد از حذف شدن قابل بازیابی نخواهد بود.",
            icon: "question",
            confirmButtonText: "بله",
            showCancelButton: true,
            cancelButtonText: "خیر"
        }).then(result => {
            if (result.isConfirmed) {
                apiRequest.delete('/user/address', { data: { addressID } })
                    .then(res => {
                        if (res.status === 200) {
                            toastAlert.fire({
                                text: "آدرس موزدنظر با موفقیت حذف شد",
                                icon: 'success'
                            }).then(() => {
                                router.refresh()
                            })
                        }
                    })
            }
        })
    }

    return (
        <div>
            <SectionHeader title={'افزودن آدرس جدید'} />
            <div className="flex flex-col gap-5 w-full">

                <div className="flex justify-center items-start gap-5 flex-wrap md:flex-nowrap">
                    <FormInput type={'text'} placeholder={'استان'} error={!province && "نام استان را وارد کنید"} value={province} onChange={(e) => setProvince(e.target.value)} />
                    <FormInput type={'text'} placeholder={'شهر'} error={!city && "نام شهر را وارد کنید"} value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="flex justify-center items-start gap-5 flex-wrap md:flex-nowrap">
                    <FormInput type={'text'} placeholder={'آدرس (شامل نام خیابان ، کوچه ، پلاک)'} error={!address && "لطفا ادرس را وارد کنید"} value={address} onChange={(e) => setAddress(e.target.value)} />
                    <FormInput type={'number'} placeholder={'کد پستی'} error={!zipCode && "کدپستی را وارد کنید"} value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                </div>
                <Button text={'افزودن'} onClick={addNewAddress} isDisabled={province && city && address && zipCode ? false : true} />
            </div>
            <SectionHeader title={'آدرس ها'} />
            <div className=" flex justify-center items-center flex-col gap-5 bg-white p-5 rounded-2xl w-full">
                {
                    addresses?.length > 0 ? (
                        <>
                            {
                                paginateAddresses.slice(0, 9).map(address => (
                                    <PanelCard key={address._id} title={address.text} date={address.createdAt}>
                                        <PanelCardButton bgColor={'bg-red-500'} text={'حذف'} onClick={() => deleteAddress(address._id)} />
                                    </PanelCard>
                                ))
                            }
                            <Pagination items={addresses} setShowItems={setPaginateAddresses} />
                        </>
                    ) : (
                        <Alert text={'آدرسی یافت نشد'} />
                    )
                }
            </div>
        </div>
    )
}
