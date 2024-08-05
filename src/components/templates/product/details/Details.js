"use client"
import Image from "next/image";

import { useState } from "react";
// Components
import Button from "@/components/modules/button/Button";
import ProductPrice from "@/components/modules/productPrice/ProductPrice";
import QuantityCounter from "@/components/modules/quantityCounter/QuantityCounter";
import StarScore from "@/components/modules/starScore/StarScore";
import FormInput from "@/components/modules/formInput/FormInput";

// Icons
import { IoHeartOutline } from "react-icons/io5";

export default function Details() {

    const [count, setCount] = useState(1)

    return (
        <div className=" w-1/2">
            <div className=" flex flex-col gap-5 text-secondary">
                <div className=" flex justify-between items-start">
                    <div className=" flex flex-col gap-3">
                        <h1 className=" text-3xl font-bold">تایتل محصول</h1>
                        <ProductPrice price={150000} />
                    </div>
                    <div className=" flex items-center gap-3">
                        <StarScore />
                        <span className=" text-secondary">(دیدگاه 1 کاربر)</span>
                    </div>
                </div>
                <p className="">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</p>
                <div className="flex justify-start items-center flex-wrap gap-5">
                <div className="flex items-center gap-1">
                    <span className=" text-secondary ">سایز:</span>
                    <FormInput type={'select-option'} />
                </div>
                <div className="flex items-center gap-1">
                    <span className=" text-secondary ">رنگ:</span>
                    <FormInput type={'select-option'} />
                </div>

                </div>
                <div className="flex items-center gap-3">
                    <QuantityCounter count={count} setCount={setCount} />
                    <Button text={"افزودن به سبد خرید"} />
                </div>
                <span className=" flex items-center gap-2 hover:text-rose-500 transition-colors"><IoHeartOutline className=" text-xl" />افزودن به علاقه مندی ها</span>
                <div className=" border-t-1  pt-5">
                    <div className="flex items-center gap-1">
                        <span className=" text-secondary ">دسته بندی:</span>
                        <span className=" hover:text-rose-500 transition-colors">لباس زنانه</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className=" text-secondary ">برچسب:</span>
                        <span className=" hover:text-rose-500 transition-colors">لباس</span>
                    </div>
                </div>
                <div className=" border-t-1  pt-5">
                    <div className="flex items-center gap-2">
                        <span className=" text-secondary ">صفحات ما در فضای مجازی:</span>
                        <div className=" flex items-center gap-3">
                            <a href="https://rubika.ir/Ladyshop2222">
                                <Image
                                    alt="social"
                                    src={'/images/png/rubika.png'}
                                    width={30}
                                    height={0}
                                />
                            </a>
                            <a href="https://eitaa.com/LadyShop7171">
                                <Image
                                    alt="social"
                                    src={'/images/png/eitaa.png'}
                                    width={24}
                                    height={0}
                                />
                            </a>
                            <a href="https://www.instagram.com/ladyshop7191">
                                <Image
                                    alt="social"
                                    src={'/images/png/instagram.png'}
                                    width={30}
                                    height={0}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
