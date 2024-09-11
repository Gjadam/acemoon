"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
// Components
import Button from "@/components/modules/button/Button";
import ProductPrice from "@/components/modules/productPrice/ProductPrice";
import QuantityCounter from "@/components/modules/quantityCounter/QuantityCounter";
import StarScore from "@/components/modules/starScore/StarScore";
import SelectItem from "./selectItem/SelectItem";

// Icons
import { IoHeartOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
// Hooks
import useProduct from "@/Hooks/useProduct";
import toastAlert from "@/utils/toastAlert";


export default function Details({ _id: productID, name, price, priceBeforeDiscount, shortDescription, collection, score, size: sizes, color: colors, comments, images }) {

    const router = useRouter()

    const [count, setCount] = useState(1)
    const [selectedSize, setSelectedSize] = useState(-1);
    const [selectedColor, setSelectedColor] = useState(-1);
    const [isInCart, setIsInCart] = useState(false)
    // AddToWishlist
    const { addToWishlist } = useProduct(productID)

    const addToCart = () => {

        if (sizes && selectedSize === -1) {
            toastAlert.fire({
                text: "لطفا سایز محصول را انتخاب کنید",
                icon: "warning",
            })
        } else if (colors && selectedColor === -1) {
            toastAlert.fire({
                text: "لطفا رنگ محصول را انتخاب کنید",
                icon: "warning",
            })
        } else {
            const cart = JSON.parse(localStorage.getItem('cart')) || []

            if (cart.length) {
                const isInCart = cart.some(item => item.id === productID)
                if (isInCart) {
                    cart.forEach(item => {
                        if (item.id === productID) {
                            item.count = item.count + count
                            if (sizes) {
                                item.sizes = selectedSize
                            }
                            if (colors) {
                                item.colors = selectedColor
                            }
                        }
                    })
                    localStorage.setItem('cart', JSON.stringify(cart))
                    toastAlert.fire({
                        text: "اطلاعات محصول با موفقیت آپدیت شد.",
                        icon: "success",
                    })
                } else {
                    const cartItem = {
                        id: productID,
                        name,
                        price,
                        count,
                        images,
                        sizes: selectedSize !== -1 && selectedSize,
                        colors: selectedColor !== -1 && selectedColor,
                    }
                    cart.push(cartItem)

                    localStorage.setItem("cart", JSON.stringify(cart))
                    toastAlert.fire({
                        text: "محصول با موفقیت به سبد خرید اضافه شد.",
                        icon: "success",
                    })
                    setIsInCart(true)
                }
            } else {
                const cartItem = {
                    id: productID,
                    name,
                    price,
                    count,
                    images,
                    sizes: selectedSize !== -1 && selectedSize,
                    colors: selectedColor !== -1 && selectedColor,
                }
                cart.push(cartItem)

                localStorage.setItem("cart", JSON.stringify(cart))
                toastAlert.fire({
                    text: "محصول با موفقیت به سبد خرید اضافه شد.",
                    icon: "success",
                })
                setIsInCart(true)
            }
        }

    }


    return (
        <div data-aos='fade-right' className=" w-full xl:w-1/2">
            <div className=" flex flex-col gap-5 text-secondary">
                {
                    isInCart &&
                    <div className=" flex justify-between items-center flex-wrap gap-3 p-5 rounded-2xl bg-rose-500">
                        <p className=" text-white">"{name}" به سبد خرید شما اضافه شد</p>
                        <Link href={'/cart'} >
                            <div className=" flex items-center  rounded px-2 py-1 text-rose-500 bg-white ">
                                <span className="  text-sm  ">سبد خرید</span>
                                <MdKeyboardArrowLeft className=" text-lg" />
                            </div>
                        </Link>
                    </div>
                }
                <div className="flex flex-col gap-5 pb-5 border-b-1">
                    <div className=" flex justify-between items-start gap-5">
                        <div className=" flex flex-col gap-3">
                            <h1 className=" text-xl md:text-3xl font-bold">{name}</h1>
                            <ProductPrice price={price} priceBeforeDiscount={priceBeforeDiscount} />
                        </div>
                        <div className=" flex items-center flex-wrap mt-2 gap-3">
                            <StarScore score={score} />
                            <span className=" text-sm text-secondary">(دیدگاه {comments.length} کاربر)</span>
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
                        <Button text={"افزودن به سبد خرید"} onClick={addToCart} />
                    </div>
                    <span className=" flex items-center gap-2 hover:text-rose-500 transition-colors cursor-pointer select-none" onClick={addToWishlist}><IoHeartOutline className=" text-xl" />افزودن به علاقه مندی ها</span>
                </div>
                {
                    collection ? (
                        <div className=" border-b-1  pb-5">
                            <div className="flex items-center gap-1">
                                <span className=" text-secondary ">دسته بندی:</span>
                                <Link href={`/collection/${collection._id}`}>
                                    <span className=" hover:text-rose-500 transition-colors">{collection.name}</span>
                                </Link>
                            </div>
                        </div>
                    ) : null
                }
                <div className=" ">
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
