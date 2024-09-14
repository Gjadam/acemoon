'use client'
import { useEffect, useState } from "react";
// Components
import Stepper from "./stepper/Stepper";
import Box from "./box/Box";
import Alert from "@/components/modules/alert/Alert";
import Button from "@/components/modules/button/Button";
import Link from "next/link";


export default function Cart() {

    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"))
        setCartItems(cart)
    }, [])

    useEffect(() => {
        calcTotalPrice()
    }, [cartItems])

    function calcTotalPrice() {  
        const price = cartItems.reduce((prev, current) => prev + current.price * current.count, 0);  
        setTotalPrice(price + 50000);
      }  

    return (
        <div className=" container mx-auto flex justify-center items-center flex-col gap-10 md:mt-28 p-5">
            <Stepper step={'cart'} />
            <div className=" flex flex-col md:flex-row  gap-10 w-full">
                {
                    cartItems?.length > 0 ? (
                        <>
                            <div className=" w-full">
                                {

                                    cartItems.map(item => (
                                        <Box key={item.id} {...item} />
                                    ))
                                }

                            </div>
                            <div className=" flex justify-center items-start flex-col gap-3 w-full md:w-120 p-5 rounded-xl mx-auto  text-secondary bg-zinc-50 ">
                                <p className=" border-b-1 pb-3 font-bold w-full text-center">جمع کل سبد خرید</p>
                                <div className=" flex flex-col gap-3 p-2 text-secondary w-full">
                                    <div className=" flex justify-between items-center ">
                                        <span>جمع جزء:</span>
                                        <span className=" text-xl ">
                                            {(totalPrice - 50_000)?.toLocaleString()}
                                            <span className=' text-xs mr-1 '>تومان</span>
                                        </span>
                                    </div>
                                    <div className=" flex justify-between items-center border-b-1 pb-4">
                                        <span>هزینه حمل و نقل: </span>
                                        <span className=" text-xl   ">
                                            50,000
                                            <span className=' text-xs mr-1 '>تومان</span>
                                        </span>
                                    </div>
                                    <div className=" flex justify-between items-center ">
                                        <span>مجموع:</span>
                                        <span className=" text-xl   ">
                                            {totalPrice?.toLocaleString()}
                                            <span className=' text-xs mr-1 '>تومان</span>
                                        </span>
                                    </div>
                                </div>
                                <div className=" w-full">
                                    <Link href={'/cart/checkout'} >
                                        <Button text={'ادامه جهت پرداخت'} isWidthFull={true} />
                                    </Link>
                                </div>
                            </div>
                        </>
                    ) : (
                        <Alert text={'محصولی در سبد خرید وجود ندارد'} />
                    )
                }

            </div>
        </div>
    )
}
