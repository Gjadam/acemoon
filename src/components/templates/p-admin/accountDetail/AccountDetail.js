'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Components
import Button from "@/components/modules/button/Button";
import FormInput from "@/components/modules/formInput/FormInput";
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader";

// Axios
import apiRequest from "@/Services/Axios/Configs/configs";

// SweetAlert
import toastAlert from "@/utils/toastAlert";
import { validateEmail, validatePassword, validatePhone } from "@/utils/auth";
import useForm from "@/Hooks/useForm";

export default function AccountDetail() {

  const { disableSubmitHandler, isDisabledSubmit } = useForm()

  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')


  useEffect(() => {
    const getUserInfos = async () => {
      apiRequest.get('/auth/me')
        .then(async (res) => {
          if (res.status === 200) {
            setName(res.data.name)
            setEmail(res.data.email)
            setPhone(res.data.phone)
          }
        })
    }
    getUserInfos()
  }, [])


  function validateUserDetail() {
    if (name && validatePhone(phone) && validateEmail(email)) {
      return false
    } else {
      return true
    }
  }

  function validateUserPassword() {
    if (oldPassword && newPassword && validatePassword(newPassword)) {
      return false
    } else {
      return true
    }
  }

  const changeDetail = () => {
    disableSubmitHandler()
    apiRequest.put('/user', { name, email, phone })
      .then(res => {
        if (res.status === 200) {
          toastAlert.fire({
            text: "اطلاعات مورد نظر با موفقیت اپدیت شد",
            icon: "success"
          })
          apiRequest.post('/auth/signout')
          router.replace('/login-otp')
        }
      })
      .catch(err => {
        if (err.response?.status === 400) {
          toastAlert.fire({
            text: "نام کاربری یا ایمیل یا شماره موبایل اشتباه است",
            icon: "error"
          })
        }
      })
  }


  const changePassword = () => {
    disableSubmitHandler()
    apiRequest.put('/user/change-password', { oldPassword, newPassword })
      .then(res => {
        if (res.status === 200) {
          toastAlert.fire({
            text: "رمزعبور شما با موفقیت تغییر یافت",
            icon: "success"
          })
          apiRequest.post('/auth/signout')
          router.replace('/login-otp')
        }
      })
      .catch(err => {
        if (err.response?.status === 400) {
          toastAlert.fire({
            text: "رمزعبور قدیمی اشتباه است",
            icon: "error"
          })
        } else if (err.response?.status === 419) {
          toastAlert.fire({
            text: "رمزعبور جدید را به درستی وارد کنید",
            icon: "error"
          })
        }
      })
  }

  return (
    <div>
      <SectionHeader title={'تغییر جزئیات حساب کاربری'} />
      <div className=" flex flex-col gap-5 mt-5">
        <div className="flex justify-center items-start gap-5 flex-wrap md:flex-nowrap">
          <FormInput type={'text'} placeholder={'نام کاربری'} error={!name && 'نام کاربری را وارد کنید'} value={name} onChange={(e) => setName(e.target.value)} />
          <FormInput type={'number'} placeholder={'شماره موبایل'} error={!phone ? 'شماره موبایل را وارد کنید' : !validatePhone(phone) ? "شماره موبایل را به درستی وارد کنید" : null} value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="flex justify-center items-center gap-5 flex-wrap md:flex-nowrap">
          <FormInput type={'email'} placeholder={'ایمیل'} error={!email ? 'ایمیل را وارد کنید' : !validateEmail(email) ? "ایمیل را به درستی وارد کنید" : null} value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button text={'ثبت تغییرات'} isWidthFull={true} onClick={changeDetail} isDisabled={validateUserDetail() || isDisabledSubmit} />
        </div>
      </div>
      <div className=" mt-5">
        <SectionHeader title={'تغییر رمز عبور'} />
        <div className=" flex flex-col gap-5 mt-5">
          <div className="flex justify-center items-start gap-5 flex-wrap md:flex-nowrap">
            <FormInput type={'password'} placeholder={'رمزعبور قدیمی'} error={!oldPassword && 'رمزعبور قدیمی را وارد کنید'} value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
            <FormInput type={'password'} placeholder={'رمزعبور جدید'} error={!newPassword ? 'رمزعبور جدید را وارد کنید' : !validatePassword(newPassword) ? 'رمزعبور باید شامل حروف بزرگ ، عدد و کاراکترهایی همچون @ ، # و.. باشد.' : null} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          </div>
          <Button text={'تغییر رمز عبور'} onClick={changePassword} isDisabled={validateUserPassword() || isDisabledSubmit} />
        </div>
      </div>
    </div>
  )
}
