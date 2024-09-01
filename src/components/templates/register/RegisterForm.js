"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

// Components
import Button from "@/components/modules/button/Button";
import FormInput from "@/components/modules/formInput/FormInput";

// Formik
import { useFormik } from "formik";

// Validations
import { validateEmail, validatePassword, validatePhone } from "@/utils/auth";

// SweetAlert
import toastAlert from "@/utils/toastAlert";

// Axios
import apiRequest from "@/Services/Axios/Configs/configs";

export default function RegisterForm() {

    const router = useRouter()

    const validate = values => {
        const errors = {};
        if (!values.name.trim()) {
            errors.name = 'این فیلد الزامی است.';
        }
        if (!values.email) {
            errors.email = 'این فیلد الزامی است.';
        } else if (!validateEmail(values.email)) {
            errors.email = 'لطفا ایمیل را به درستی وارد کنید.';
        }
        if (!values.password) {
            errors.password = 'این فیلد الزامی است.';
        } else if (!validatePassword(values.password)) {
            errors.password = 'رمزعبور باید شامل حروف بزرگ ، عدد و کاراکترهایی همچون @ ، # و.. باشد.';
        }
        if (!values.phone) {
            errors.phone = 'این فیلد الزامی است.';
        } else if (!validatePhone(values.phone)) {
            errors.phone = 'لطفا شماره موبایل را به درستی وارد کنید.';
        }

        return errors;
    };

    const form = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            password: "",
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                setSubmitting(false)
            }, 3000)
            apiRequest.post("/auth/signup", {
                name: values.name.trim(),
                phone: `0${values.phone}`,
                email: values.email,
                password: values.password,
            })
                .then(res => {
                    if (res.status === 201) {
                        toastAlert.fire({
                            text: "ثبت نام با موفقیت انجام شد",
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
                            })
                        }
                    }
                })
        },
    })

    return (
        <form onSubmit={form.handleSubmit}>
            <div className=" flex flex-col gap-5 my-5">
                <FormInput name={"name"} placeholder={'نام کاربری'} type={'text'} error={form.errors.name} value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur}/>
                <FormInput name={"phone"} placeholder={'شماره موبایل'} type={'number'} error={form.errors.phone} value={form.values.phone} onChange={form.handleChange} onBlur={form.handleBlur}/>
                <FormInput name={"email"} placeholder={'ایمیل'} type={'email'} error={form.errors.email} value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur}/>
                <FormInput name={"password"} placeholder={'رمز عبور'} type={'password'} error={form.errors.password} value={form.values.password} onChange={form.handleChange} onBlur={form.handleBlur}/>
            </div>
            <div className=" flex items-center justify-center flex-col md:flex-row  gap-5">
                <Button text={'ثبت نام'} isSubmitType={true} isWidthFull={true} isDisabled={form.isSubmitting} />
                <div className="w-full">
                    <Link href={'/login'}>
                        <Button text={'بازگشت به صفحه ورود'} type={'outline'} isWidthFull={true} />
                    </Link>
                </div>
            </div>
        </form>
    )
}
