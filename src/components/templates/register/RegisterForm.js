"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Components
import Button from "@/components/modules/button/Button";
import FormInput from "@/components/modules/formInput/FormInput";
import Sms from "../sms/Sms";
import FormHeader from "@/components/modules/FormHeader/FormHeader";


// Validations
import { validateEmail, validatePassword, validatePhone } from "@/utils/auth";

// SweetAlert
import toastAlert from "@/utils/toastAlert";
import Swal from "sweetalert2";

// Axios
import apiRequest from "@/Services/Axios/Configs/configs";

// Hooks
import useForm from "@/Hooks/useForm";

export default function RegisterForm() {



    const { disableSubmitHandler, isDisabledSubmit } = useForm()

    const [isRegisterWithOtp, setIsRegisterWithOtp] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState(null)
    const [password, setPassword] = useState("")


    function validateRegister() {
        if (name && validatePhone(phone) && validateEmail(email) && validatePassword(password)) {
            return false
        } else {
            return true
        }
    }

    const registerUser = (e) => {
        disableSubmitHandler()
        e.preventDefault()
        apiRequest.post('/auth/sms/signup/send', { phone })
            .then(res => {

                if (res.status === 201) {
                    Swal.fire({
                        title: `کد ورود : ${res.data.code}`,
                        text: "لطفا قبل از وارد شدن به صفحه وارد کردن کد ، کد را بخاطر بسپارید.",
                        icon: "success",
                        confirmButtonText: "وارد کردن کد"
                    }).then(result => {
                        if (result.isConfirmed) {
                            setIsRegisterWithOtp(true)
                        }
                    })
                }
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 422) {
                        toastAlert.fire({
                            text: "کاربری با این شماره موبایل قبلا ثبت نام شده است!",
                            icon: "error",
                        })
                    }
                }
            })
    }

    return (
        !isRegisterWithOtp ? (
            <>
                <FormHeader title={'ثبت نام'} />
                <form onSubmit={(e) => registerUser(e)}>
                    <div className=" flex flex-col gap-5 my-5">
                        <FormInput name={"name"} placeholder={'نام و نام خانوادگی'} type={'text'} error={!name && 'این فیلد الزامی است.'} value={name} onChange={(e) => setName(e.target.value)} />
                        <FormInput name={"phone"} placeholder={'شماره موبایل'} type={'number'} error={!phone ? 'این فیلد الزامی است.' : !validatePhone(phone) ? 'لطفا شماره موبایل را به درستی وارد کنید.' : null} value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <FormInput name={"email"} placeholder={'ایمیل'} type={'email'} error={!email ? 'این فیلد الزامی است.' : !validateEmail(email) ? 'لطفا ایمیل را به درستی وارد کنید.' : null} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <FormInput name={"password"} placeholder={'رمز عبور'} type={'password'} error={!password ? 'این فیلد الزامی است.' : !validatePassword(password) ? 'رمزعبور باید شامل حروف بزرگ ، عدد و کاراکترهایی همچون @ ، # و.. باشد.' : null} value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className=" flex items-center justify-center flex-col md:flex-row  gap-5">
                        <Button text={'ثبت نام'} isSubmitType={true} isWidthFull={true} isDisabled={validateRegister() || isDisabledSubmit} />
                        <div className="w-full">
                            <Link href={'/login-otp'}>
                                <Button text={'بازگشت به صفحه ورود'} type={'outline'} isWidthFull={true} />
                            </Link>
                        </div>
                    </div>
                </form>
            </>


        ) : (
            <>
                <FormHeader title={'کد تایید'} />
                <Sms name={name} email={email} password={password} phone={phone} isRegisterWithOtp={setIsRegisterWithOtp} />
            </>
        )
    )
}
