'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

// Components
import Button from "@/components/modules/button/Button";
import FormInput from "@/components/modules/formInput/FormInput";

// Axios
import apiRequest from "@/Services/Axios/Configs/configs";
import toastAlert from "@/utils/toastAlert";

export default function AddCollection() {
    const router = useRouter()
    const [name, setName] = useState()

    const addNewCollection = () => {
        apiRequest.post('/collections', {
            name
        })
            .then(res => {
                if (res.status === 201) {
                    toastAlert.fire({
                        text: "دسته بندی جدید با موفقیت افزوده شد.",
                        icon: "success",
                    }).then(() => {
                        router.refresh()
                    })
                }
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 400) {
                        toastAlert.fire({
                            text: "نام دسته بندی الزامی است!",
                            icon: "error",
                        })
                    }
                }
            })
    }

    return (
        <div className=" flex flex-col gap-5 w-full">
            <FormInput type={'text'} placeholder={'نام دسته بندی را وارد کنید'} error={!name && 'نام دسته بندی را وارد کنید'} value={name} onChange={(e) => setName(e.target.value)} />
            <Button text={'افزودن'} onClick={addNewCollection} isDisabled={name ? false : true} />
        </div>
    )
}
