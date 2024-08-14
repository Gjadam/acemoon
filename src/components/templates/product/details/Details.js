"use client"
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
// Components
import Button from "@/components/modules/button/Button";
import ProductPrice from "@/components/modules/productPrice/ProductPrice";
import QuantityCounter from "@/components/modules/quantityCounter/QuantityCounter";
import StarScore from "@/components/modules/starScore/StarScore";
import SelectItem from "./selectItem/SelectItem";

// Icons
import { IoHeartOutline } from "react-icons/io5";

export default function Details({ name, price, shortDescription, collection, score, size: sizes, color: colors, comments }) {

    const [count, setCount] = useState(1)
    const [selectedSize, setSelectedSize] = useState(-1);
    const [selectedColor, setSelectedColor] = useState(-1);

    return (
        <div data-aos='fade-right' className=" w-full xl:w-1/2">
            <div className=" flex flex-col gap-5 text-secondary">
                <div className=" flex justify-between items-start">
                    <div className=" flex flex-col gap-3">
                        <h1 className=" text-3xl font-bold">{name}</h1>
                        <ProductPrice price={price} />
                    </div>
                    <div className=" flex items-center gap-3">
                        <StarScore score={score} />
                        <span className=" text-secondary">(دیدگاه {comments.length} کاربر)</span>
                    </div>
                </div>
                <p>{shortDescription}</p>
                <div className="flex justify-start items-center flex-wrap gap-5">
                    {
                        sizes ? (
                            <div className="flex items-center gap-2">
                                <span className=" text-secondary ">سایز:</span>
                                {
                                    sizes.split(' ، ').map(size => (
                                        <SelectItem key={size} item={size} state={selectedSize} setState={setSelectedSize} />
                                    ))
                                }
                            </div>
                        ) : null
                    }
                    {
                        colors ? (
                            <div className="flex items-center gap-2">
                                <span className=" text-secondary ">رنگ:</span>
                                {
                                    colors.split(' ، ').map(color => (
                                        <SelectItem key={color} item={color} state={selectedColor} setState={setSelectedColor} />
                                    ))
                                }
                            </div>
                        ) : null
                    }
                </div>
                <div className="flex items-center flex-wrap gap-3">
                    <QuantityCounter count={count} setCount={setCount} />
                    <Button text={"افزودن به سبد خرید"} />
                </div>
                <span className=" flex items-center gap-2 hover:text-rose-500 transition-colors"><IoHeartOutline className=" text-xl" />افزودن به علاقه مندی ها</span>
                <div className=" border-t-1  pt-5">
                    <div className="flex items-center gap-1">
                        <span className=" text-secondary ">دسته بندی:</span>
                        <Link href={`/collection/${collection._id}`}>
                            <span className=" hover:text-rose-500 transition-colors">{collection.name}</span>
                        </Link>
                    </div>
                </div>
                <div className=" border-t-1  pt-5">
                    <div className="flex items-center gap-2">
                        <span className=" text-secondary ">صفحات ما در فضای مجازی:</span>
                        <div className=" flex items-center gap-3">
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
                            <a href="https://rubika.ir/Ladyshop2222">
                                <Image
                                    alt="social"
                                    src={'/images/png/rubika.png'}
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
