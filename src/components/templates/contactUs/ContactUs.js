'use client'
import { useState } from "react";

// Components
import Button from "@/components/modules/button/Button";
import FormInput from "@/components/modules/formInput/FormInput";
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader";
import SocialMedias from "@/components/modules/socialMedias/SocialMedias";

// Axios
import apiRequest from "@/Services/Axios/Configs/configs";

// SweetAlert
import toastAlert from "@/utils/toastAlert";

export default function ContactUs() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const submitMessage = () => {
        const contact = {
            name,
            phone,
            email,
            title,
            body,
        }

        apiRequest.post('/contact', contact)
        .then(res => {
            if(res.status === 201) {
                toastAlert.fire({
                    text: "پیغام شما با موفقیت ارسال شد.",
                    icon: "success",
                })
                setName("")
                setPhone("")
                setEmail("")
                setTitle("")
                setBody("")
            }
        })
        .catch(err => {
            if(err.response.status === 400) {
                toastAlert.fire({
                    text: "لطفا فیلد های موردنظر را کامل کنید.",
                    icon: "error",
                })
            }
        })




    }

    return (
            <div className=" container mx-auto mt-28">
                <SectionHeader title={'با ما در ارتباط باشید'} />
                <div className="flex flex-col gap-5 mt-5 p-5 ">
                    <div className="flex justify-center items-center gap-5 flex-wrap md:flex-nowrap">
                        <FormInput type={'text'} placeholder={'نام و نام خانوادگی'} value={name} onChange={(e) => setName(e.target.value)}/>
                        <FormInput type={'number'} placeholder={"شماره موبایل"} value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <div className="flex justify-center items-center gap-5 flex-wrap md:flex-nowrap">
                        <FormInput type={'email'} placeholder={"ایمیل"} value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <FormInput type={'text'} placeholder={"عنوان"} value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <FormInput type={'textarea'} placeholder={"توضیحات"} value={body} onChange={(e) => setBody(e.target.value)}/>
                    <Button text={'ارسال پیغام'} onClick={submitMessage}/>
                </div>
                <SocialMedias />
            </div>
    )
}