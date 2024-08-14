'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// Components
import Button from '@/components/modules/button/Button'
import FormInput from '@/components/modules/formInput/FormInput'

// Formik
import { useFormik } from 'formik'

// Validations
import { validateEmail, validatePassword } from '@/utils/auth'
import toastAlert from '@/utils/toastAlert'

// Axios
import apiRequest from '@/Services/Axios/Configs/configs'

export default function LoginForm() {

    const router = useRouter()

    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'این فیلد ضروری است.';
        } else if (!validateEmail(values.email)) {
            errors.email = 'لطفا ایمیل را به درستی وارد کنید.';
        }
        if (!values.password) {
            errors.password = 'این فیلد ضروری است.';
        } else if (!validatePassword(values.password)) {
            errors.password = 'رمزعبور باید شامل حروف بزرگ ، عدد و کاراکترهایی همچون @ ، # و.. باشد.';
        }
        return errors;
    };

    const form = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate,
        onSubmit: async (values, { setSubmitting }) => {
            setTimeout(() => {
                setSubmitting(false)
            }, 3000)

            const res = await apiRequest.post('/auth/signin', {
                email: values.email,
                password: values.password
            })

            if (res.status === 200) {
                toastAlert.fire({
                    text: "با موفقیت وارد شدید",
                    icon: "success",
                }).then(() => {
                    router.replace("/")
                })
            } else if (res.status === 422) {
                toastAlert.fire({
                    text: "کاربری با این اطلاعات یافت نشد!",
                    icon: "error",
                })
            } else if (res.status === 401) {
                log
                toastAlert.fire({
                    text: "ایمیل یا پسوورد صحیح نیست!",
                    icon: "error",
                })
            }
        },
    })


    return (
        <form onSubmit={form.handleSubmit}>
            <div className=" flex flex-col gap-5 my-5" >
                <FormInput name={"email"} placeholder={'ایمیل'} type={'email'} error={form.errors.email} value={form.values.email} onChange={form.handleChange} />
                <FormInput name={"password"} placeholder={'رمز عبور'} type={'password'} error={form.errors.password} value={form.values.password} onChange={form.handleChange} />
    
            </div>
            <div className=" flex items-center justify-center flex-col md:flex-row  gap-5">
                <Button text={'ورود به حساب کاربری'} isSubmitType={true} isDisabled={form.isSubmitting} type={'outline'} isWidthFull={true} />
                <div className="w-full">
                    <Link href={'/register'}>
                        <Button text={'ثبت نام'} isWidthFull={true} />
                    </Link>
                </div>
            </div>
        </form>
    )
}
