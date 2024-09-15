'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

// Components
import Button from "@/components/modules/button/Button";
import FormInput from "@/components/modules/formInput/FormInput";

// Axios
import apiRequest from "@/Services/Axios/Configs/configs";

// SweetAlert
import toastAlert from "@/utils/toastAlert";

// Hooks
import useForm from "@/Hooks/useForm";

export default function Sms({ name, email, password, phone, isRegisterWithOtp }) {

    const { disableSubmitHandler, isDisabledSubmit } = useForm()
 
    const router = useRouter()

    const [code, setCode] = useState(null)

    function validateSms () {
        if(code) {
            return false
        } else {
            return true
        }

    }

    const verifyCodeAndRegister = () => {
        disableSubmitHandler()
        apiRequest.post("/auth/sms/verify", {
            name,
            phone,
            email,
            password,
            code
        })
            .then(res => {
                if (res.status === 201) {
                    toastAlert.fire({
                        text: "ثبت نام با موفقیت انجام شد",
                        icon: "success",
                    }).then(() => {
                        router.replace("/")
                    })
                } else if (res.status === 200) {
                    toastAlert.fire({
                        text: "با موفقیت وارد شدید",
                        icon: "success",
                    }).then(() => {
                        router.replace("/")
                    })
                }
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 422) {
                        toastAlert.fire({
                            text: "کاربری با همین اطلاعات قبلا ثبت نام شده است!",
                            icon: "error",
                        }).then(() => {
                            router.refresh()
                        })
                    } else if (err.response.status === 401) {
                        toastAlert.fire({
                            text: "ایمیل یا رمزعبور صحیح نیست!",
                            icon: "error",
                        }).then(() => {
                            router.refresh()
                        })
                    } else if (err.response.status === 409) {
                        toastAlert.fire({
                            text: "کد تایید صحیح نیست!",
                            icon: "error",
                        }).then(() => {
                            router.refresh()
                        })
                    }
                }
            })
    }

    return (
        <div className=" flex justify-center items-center gap-5 mt-5 flex-col">
            <div className=" flex justify-center items-center flex-col gap-2">
                <p className=" text-sm text-zinc-500">لطفا کد تایید را وارد کنید</p>
                <p className=" text-rose-500 font-bold text-xl">{phone}</p>
            </div>
            <FormInput type={'number'} placeholder={"کد تایید"} error={!code && 'این فیلد الزامی است.'} value={code} onChange={(e) => setCode(e.target.value)} />
            <Button text={'ورود'} isWidthFull={true} onClick={verifyCodeAndRegister} isDisabled={validateSms() || isDisabledSubmit} />
            <Button text={'بازگشت به صفحه قبل'} isWidthFull={true} onClick={() => isRegisterWithOtp(false)} />
        </div>
    )
}
