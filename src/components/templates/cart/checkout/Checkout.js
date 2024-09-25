'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Components
import Button from "@/components/modules/button/Button";
import Stepper from "../stepper/Stepper";
import FormInput from "@/components/modules/formInput/FormInput";
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader";
import AddressBox from "./addressBox/AddressBox";
import ProductBox from "./productBox/ProductBox";

// Icons
import { RiAlertFill } from "react-icons/ri";

// Hooks
import useForm from "@/Hooks/useForm";

export default function Checkout({ user, addresses, shippingCost }) {

  const router = useRouter()
 
  const { disableSubmitHandler, isDisabledSubmit } = useForm()

  const [name, setName] = useState(user ? user.name : "")
  const [phone, setPhone] = useState(user ? user.phone : "")
  const [address, setAddress] = useState('')

  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [additionalInfo, setAdditionalInfo] = useState('')

  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);

 

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  useEffect(() => {

    if (!cartItems) {
      router.replace('/cart')
    }

    calcTotalPrice();
  }, [cartItems]);

  function calcTotalPrice() {
    const price = cartItems.reduce((prev, current) => prev + current.price * current.count, 0);
    setTotalPrice(price + shippingCost.price);
  }

  function validateOrder() {
    if (user) {
      return !(name && phone && address);
    } else {
      return !(name && phone && address && province && city && zipCode);
    }
  }

  const checkOut = () => {
    disableSubmitHandler()
    const newAddress = user ? address : `${province} / ${city} / ${address} / کدپستی: ${zipCode}`;

    const orderInfo = {
      name,
      phone,
      address: newAddress,
      additionalInfo,
    };

    console.log(orderInfo);

  };

  return (
    <div className=" container mx-auto flex justify-center items-center flex-col gap-10 md:mt-28  p-5">
      <Stepper step={'checkout'} />
      <div className=" flex justify-center items-start flex-col md:flex-row gap-10 w-full ">
        {
          user ? (
            <div className="flex flex-col gap-5 w-full">
              <div className="flex justify-center items-start gap-5 flex-wrap md:flex-nowrap">
                <FormInput type={'text'} placeholder={'نام و نام خانوادگی'} isDisabled={true} error={!name && 'نام و نام خانوادگی را وارد کنید'} value={name} onChange={(e) => setName(e.target.value)} />
                <FormInput type={'number'} placeholder={"شماره موبایل"} isDisabled={true} error={!phone && 'نام و نام خانوادگی را وارد کنید'} value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <SectionHeader title={'آدرس'} />
              {
                addresses.length > 0 ? (
                  <div className=" flex justify-start items-center flex-wrap gap-5">
                    {
                      addresses.map(userAddress => (
                        <AddressBox key={userAddress._id} address={userAddress.text} state={address} setState={setAddress} />
                      ))
                    }
                  </div>

                ) : (
                  <div className=" flex justify-center md:justify-between items-center flex-wrap gap-5 p-5 text-center w-full  text-red-600 border-1 border-red-600 rounded-lg">
                    <div className=" flex items-center gap-3">
                      <RiAlertFill className=" text-xl " />
                      <span >آدرسی وجود ندارد</span>
                    </div>
                    <Link href={'/p-user/addresses'}>
                      <Button type={'simple'} text={'افزودن آدرس جدید'} />
                    </Link>
                  </div>
                )
              }
              <FormInput type={'textarea'} placeholder={"توضیحات تکمیلی"} value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} />
            </div>
          ) : (
            <div className="flex flex-col gap-5 w-full">
              <div className="flex justify-center items-start gap-5 flex-wrap md:flex-nowrap">
                <FormInput type={'text'} placeholder={'نام و نام خانوادگی'} error={!name && 'نام و نام خانوادگی را وارد کنید'} value={name} onChange={(e) => setName(e.target.value)} />
                <FormInput type={'number'} placeholder={"شماره موبایل"} error={!phone && 'نام و نام خانوادگی را وارد کنید'} value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="flex justify-center items-start gap-5 flex-wrap md:flex-nowrap">
                <FormInput type={'text'} placeholder={'استان'} error={!province && 'نام استان را وارد کنید'} value={province} onChange={(e) => setProvince(e.target.value)} />
                <FormInput type={'text'} placeholder={'شهر'} error={!city && 'نام شهر را وارد کنید'} value={city} onChange={(e) => setCity(e.target.value)} />
              </div>
              <FormInput type={'text'} placeholder={'آدرس (شامل نام خیابان ، کوچه ، پلاک)'} error={!address && "آدرس را وارد کنید"} value={address} onChange={(e) => setAddress(e.target.value)} />
              <FormInput type={'number'} placeholder={'کد پستی'} error={!zipCode && "کدپستی را وارد کنید"} value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
              <FormInput type={'textarea'} placeholder={"توضیحات تکمیلی"} value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} />
            </div>
          )
        }
        <div className=" flex flex-col gap-5 w-full md:max-w-96  p-5 bg-zinc-50 border-y-8 border-dotted border-white">
          <div className=" bg-white text-secondary rounded-xl p-5">
            <div className=" flex justify-between items-center border-b-1 pb-3 font-bold ">
              <span>محصول</span>
              <span>جمع جزء</span>
            </div>
            {
              cartItems.map(item => (
                <ProductBox key={item.id} {...item} />
              ))
            }
            <div className=" flex justify-between items-center border-b-1 py-3 ">
              <span>جمع جزء</span>
              <span className=" text-lg text-rose-500 ">
                {(totalPrice ? totalPrice - shippingCost.price : 0)?.toLocaleString()}
                <span className=' text-xs mr-1 '>تومان</span>
              </span>
            </div>
            <div className=" flex justify-between items-center border-b-1 py-3 ">
              <span>حمل و نقل</span>
              <span className=" text-lg text-rose-500">
                {shippingCost.price?.toLocaleString()}
                <span className=' text-xs mr-1 '>تومان</span>
              </span>
            </div>
            <div className=" flex justify-between items-center border-b-1 py-3 text-xl font-bold text-rose-500">
              <span>مجموع</span>
              <span className=" text-lg ">
                {totalPrice?.toLocaleString()}
                <span className=' text-xs mr-1 '>تومان</span>
              </span>
            </div>
          </div>
          <div className="w-full">
            <Button
              text={'پرداخت'}
              isWidthFull={true}
              onClick={checkOut}
              isDisabled={validateOrder() || isDisabledSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
