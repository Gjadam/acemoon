'use client'
import { useState } from 'react'
import Link from 'next/link'

// Components
import Button from '@/components/modules/button/Button'
import FormInput from '@/components/modules/formInput/FormInput'
import Sms from '../sms/Sms'
import FormHeader from '@/components/modules/FormHeader/FormHeader'


// Validations
import { validatePassword, validatePhone } from '@/utils/auth'
import toastAlert from '@/utils/toastAlert'

// Axios
import apiRequest from '@/Services/Axios/Configs/configs'

// SweetAlert
import Swal from 'sweetalert2'

export default function LoginForm() {


    const [isLoginWithOtp, setIsLoginWithOtp] = useState(false)

    const [phone, setPhone] = useState(null)
    const [password, setPassword] = useState(null)

    const loginWithOtp = (e) => {
        e.preventDefault()
        apiRequest.post('/user/ban/verify', { phone })
            .then(res => {
                if (res.status === 200) {
                    apiRequest.post('/auth/sms/signin/send', { phone, password })
                        .then(res => {
                            if (res.status === 201) {
                                Swal.fire({
                                    title: `کد ورود : ${res.data.code}`,
                                    text: "لطفا قبل از وارد شدن به صفحه وارد کردن کد ، کد را بخاطر بسپارید.",
                                    icon: "success",
                                    confirmButtonText: "وارد کردن کد"
                                }).then(result => {
                                    if (result.isConfirmed) {
                                        setIsLoginWithOtp(true)
                                    }
                                })
                            }
                        })
                        .catch(err => {
                            if (err.response) {
                                if (err.response.status === 400) {
                                    toastAlert.fire({
                                        text: "کاربری با این اطلاعات یافت نشد!",
                                        icon: "error",
                                    })
                                } else if (err.response.status === 401) {
                                    toastAlert.fire({
                                        text: "شماره موبایل یا رمزعبور صحیح نیست!",
                                        icon: "error",
                                    })
                                }
                            }
                        })
                }
            })
            .catch(err => {
                if (err.response.status === 400) {
                    toastAlert.fire({
                        text: "متاسفانه شماره تلفن شما مسدود شده است.",
                        icon: "error",
                        confirmButtonText: "باشه"
                    })
                } else if (err.response.status === 404) {
                    toastAlert.fire({
                        text: "متاسفانه شماره تلفن شما یافت نشد!",
                        icon: "error",
                    })
                }
            })
    }

    return (
        !isLoginWithOtp ? (
            <>
                <FormHeader title={'ورود با شماره موبایل'} />
                <form className=' flex flex-col gap-5' onSubmit={(e) => loginWithOtp(e)}>
                    <div className=" flex flex-col gap-5 my-5" >
                        <FormInput name={"phone"} placeholder={'شماره موبایل'} type={'number'} error={!phone ? 'این فیلد الزامی است.' : !validatePhone ? 'لطفا شماره موبایل را به درستی وارد کنید.' : null} value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <FormInput name={"password"} placeholder={'رمز عبور'} type={'password'} error={!password ? 'این فیلد الزامی است.' : !validatePassword(password) ? 'رمزعبور باید شامل حروف بزرگ ، عدد و کاراکترهایی همچون @ ، # و.. باشد.' : null} value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className=" flex items-center justify-center flex-col md:flex-row  gap-5">
                        <Button text={'ورود'} isSubmitType={true} isDisabled={validatePhone(phone) && validatePassword(password) ? false : true} isWidthFull={true} />
                        <div className="w-full">
                            <Link href={'/login-email'}>
                                <Button text={'ورود با ایمیل '} isWidthFull={true} />
                            </Link>
                        </div>
                    </div>
                    <p className=' text-center text-zinc-500'>آیا هنوز ثبت نام نکرده اید؟</p>
                    <div className="w-full">
                        <Link href={'/register'}>
                            <Button text={'ثبت نام'} isWidthFull={true} />
                        </Link>
                    </div>
                </form>
            </>
        ) : (
            <>
                <FormHeader title={'کد تایید'} />
                <Sms phone={phone} password={password} isRegisterWithOtp={setIsLoginWithOtp} />
            </>
        )
    )
}
