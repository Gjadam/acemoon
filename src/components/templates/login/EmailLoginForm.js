'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// Components
import Button from '@/components/modules/button/Button'
import FormInput from '@/components/modules/formInput/FormInput'

// Validations
import { validateEmail, validatePassword } from '@/utils/auth'
import toastAlert from '@/utils/toastAlert'

// Axios
import apiRequest from '@/Services/Axios/Configs/configs'

// Hooks
import useForm from '@/Hooks/useForm'

export default function LoginForm() {

    const { disableSubmitHandler, isDisabledSubmit } = useForm()

    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function validateLogin () {
        if (validateEmail(email) && validatePassword(password)) {
            return false
        } else {
            return true
        }
    }

    const registerWithEmail = (e) => {
        disableSubmitHandler()
        e.preventDefault()
        apiRequest.post('/user/ban/verify', { email })
            .then(res => {
                if (res.status === 200) {
                    apiRequest.post('/auth/signin', {
                        email,
                        password
                    })
                        .then(res => {
                            if (res.status === 200) {
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
                                        text: "کاربری با این اطلاعات یافت نشد!",
                                        icon: "error",
                                    })
                                } else if (err.response.status === 401) {
                                    toastAlert.fire({
                                        text: "ایمیل یا رمزعبور صحیح نیست!",
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
                        text: "متاسفانه ایمیل شما مسدود شده است!",
                        icon: "error",
                    })
                } else if (err.response.status === 404) {
                    toastAlert.fire({
                        text: "متاسفانه ایمیل شما یافت نشد!",
                        icon: "error",
                    })
                }
            })
    }


    return (
        <form className=' flex flex-col gap-5' onSubmit={(e) => registerWithEmail(e)} >
            <div className=" flex flex-col gap-5 my-5" >
                <FormInput name={"email"} placeholder={'ایمیل'} type={'email'} error={!email ? 'این فیلد الزامی است.' : !validateEmail(email) ? 'لطفا ایمیل را به درستی وارد کنید.' : null} value={email} onChange={(e) => setEmail(e.target.value)} />
                <FormInput name={"password"} placeholder={'رمز عبور'} type={'password'} error={!password ? 'این فیلد الزامی است.' : !validatePassword(password) ? 'رمزعبور باید شامل حروف بزرگ ، عدد و کاراکترهایی همچون @ ، # و.. باشد.' : null} value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className=" flex items-center justify-center flex-col md:flex-row  gap-5">
                <Button text={'ورود'} isSubmitType={true} isDisabled={validateLogin() || isDisabledSubmit} isWidthFull={true} />
                <div className="w-full">
                    <Link href={'/login-otp'}>
                        <Button text={'ورود با شماره موبایل'} isWidthFull={true} />
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
    )
}
