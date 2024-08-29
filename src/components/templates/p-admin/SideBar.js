'use client'
import Image from "next/image";
import { useState } from "react";

// Components
import SideBarLink from "@/components/modules/sideBarLink/SideBarLink";
import Button from "@/components/modules/button/Button";

// Icons
import { IoBasket, IoHome, IoPower, IoTicket } from "react-icons/io5";
import { FaBars, FaUsers } from "react-icons/fa6";
import { BiSolidCategoryAlt, BiSolidContact } from "react-icons/bi";
import { IoIosChatboxes } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { HiShoppingCart } from "react-icons/hi2";

// Hooks
import useAuth from "@/Hooks/useAuth";

export default function SideBar({ user }) {

    const [isOpenSideBar, setIsOpenSidebar] = useState(false)

    // LogOut
    const { logOut } = useAuth()

    return (
        <>
            <div className=" xl:hidden w-full  flex justify-between items-center mb-5">
                <Button type={'circle'} onClick={() => setIsOpenSidebar(true)}>
                    <FaBars />
                </Button>
                <div className=" flex justify-center items-center">
                    LOGO
                </div>
            </div>
            <div className={`${isOpenSideBar ? 'fixed left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]' : 'bg-inherit relative'} xl:relative xl:bg-inherit h-full  z-30  transition-all duration-500`} onClick={() => setIsOpenSidebar(false)}>
                <div className={` bg-white  fixed ${isOpenSideBar ? 'right-0' : '-right-[40rem]'} xl:right-0 top-0 bottom-0 py-5  xl:py-0  rounded-l-3xl xl:rounded-none shadow-xl xl:shadow-none border-rose-500 xl:relative xl:flex justify-center items-start flex-col h-full w-56  overflow-hidden transition-all duration-500 ease-in-out`} onClick={(e) => e.stopPropagation()}>
                    <div className=" flex justify-between items-start flex-col h-full">
                        <div className="  w-full flex justify-between items-center px-5">
                            <span>Logo</span>
                            <div className="xl:hidden">
                                <Button type={'circle'} onClick={() => setIsOpenSidebar(false)}>
                                    <LiaTimesSolid />
                                </Button>
                            </div>
                        </div>
                        <div className=" flex justify-start flex-col gap-5">
                            <SideBarLink text='داشبورد' route={'/p-admin'}>
                                <IoHome />
                            </SideBarLink>
                            <SideBarLink text='افزودن محصول' route={'/p-admin/add-product'}>
                                <IoBasket />
                            </SideBarLink>
                            <SideBarLink text='دسته بندی ها' route={'/p-admin/collections'}>
                                <BiSolidCategoryAlt />
                            </SideBarLink>
                            <SideBarLink text='کاربران' route={'/p-admin/users'}>
                                <FaUsers />
                            </SideBarLink>
                            <SideBarLink text='سفارشات' route={'/p-admin/orders'}>
                                <HiShoppingCart />
                            </SideBarLink>
                            <SideBarLink text='ارتباط با ما' route={'/p-admin/c'}>
                                <BiSolidContact />
                            </SideBarLink>
                            <SideBarLink text='کامنت ها' route={'/p-admin/comments'}>
                                <IoIosChatboxes />
                            </SideBarLink>
                            <SideBarLink text='تیکت های پشتیبانی' route={'/p-admin/tickets'}>
                                <IoTicket />
                            </SideBarLink>
                            <SideBarLink text={'خروج '} onClick={logOut}>
                                <IoPower />
                            </SideBarLink>
                        </div>
                        <div className=" flex justify-center items-center gap-3  mr-5 ">
                            <Image
                                alt='user-icon'
                                src={'/images/png/user-icon.png'}
                                width={35}
                                height={0}
                                className=' rounded-full border-1'
                            />
                            <div className=" flex flex-col text-secondary">
                                <span className='  text-rose-500 text-sm font-bold'>{user.name}</span>
                                <span className=' text-xs'>{user.email ? user.email : user.phone}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}
