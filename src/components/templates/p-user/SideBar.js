'use client'
import Image from "next/image";
import { useState } from "react";

// Components
import SideBarLink from "@/components/modules/sideBarLink/SideBarLink";

// Icons
import { IoHeart, IoHome, IoPower, IoTicket } from "react-icons/io5";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaAddressCard, FaBars, FaBarsStaggered } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";

// Hooks
import useAuth from "@/Hooks/useAuth";
import Button from "@/components/modules/button/Button";

export default function SideBar({ user }) {

    const { logOut } = useAuth()
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)

    return (
        <>
            <div className=" xl:hidden w-full  flex justify-end items-center">
                <Button type={'circle'} onClick={() => setIsOpenSidebar(true)}>
                    <FaBarsStaggered />
                </Button>
            </div>
            <div className={`${isOpenSidebar && 'fixed left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-50 xl:bg-inherit xl:relative transition-all ease-in-out duration-500'} xl:-translate-y-24`} onClick={() => setIsOpenSidebar(false)}>
                <div className={` fixed ${isOpenSidebar ? 'left-0' : '-left-96'} -left-96 top-0 bottom-0  bg-white  w-72 rounded-r-2xl xl:rounded-2xl shadow-xl  xl:sticky xl:top-48 transition-all ease-in-out duration-500`} onClick={(e) => e.stopPropagation()}>
                    <div className=" flex justify-center items-center flex-col gap-3 p-5 border-b-1 ">
                        <Image
                            alt="user-icon"
                            src='/images/png/user-icon.png'
                            width={80}
                            height={0}
                            className=" rounded-full border-1 p-1"
                        />
                        <div className=" text-center">
                            <h1 className="text-lg font-bold">{user.name}</h1>
                            <span className=" text-sm text-rose-500">{user.email}</span>
                        </div>
                    </div>
                    <div className=" flex flex-col w-full">
                        <div className=" flex flex-col gap-2  py-2">
                            <SideBarLink text={'داشبورد'} route={'/p-user'}>
                                <IoHome />
                            </SideBarLink>
                            <SideBarLink text={'سفارشات'}>
                                <HiMiniShoppingCart />
                            </SideBarLink>
                            <SideBarLink text={'آدرس ها'}>
                                <FaAddressCard />
                            </SideBarLink>
                            <SideBarLink text={'تیکت های پشتیبانی'} route={'/p-user/tickets'}>
                                <IoTicket />
                            </SideBarLink>
                            <SideBarLink text={'علاقه مندی ها'} route={'/p-user/wishlist'}>
                                <IoHeart />
                            </SideBarLink>
                            <SideBarLink text={'جزئیات حساب'}>
                                <FaUserEdit />
                            </SideBarLink>
                            <SideBarLink text={'خروج '} onClick={logOut} >
                                <IoPower />
                            </SideBarLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
