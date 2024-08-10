'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Components
import Button from '../button/Button';
import LinkWithIcon from '../linkButtons/LinkWithIcon';

// Icons
import { IoHeart, IoHome, IoLogOut, IoSearch, IoTicket } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu"
import { BiSolidCategory } from 'react-icons/bi';
import { LiaTimesSolid } from "react-icons/lia";
import { MdAdminPanelSettings } from "react-icons/md";

export default function Navbar({ isLogin }) {

    const [fixTop, setFixTop] = useState(false)
    const [isOpenSearchBox, setIsOpenSearchBox] = useState(false)

    useEffect(() => {
        const fixNavbarToTop = () => {
            const currentScroll = window.pageYOffset
            if (currentScroll > 200) {
                setFixTop(false)
            } else {
                setFixTop(true)
            }
        }

        window.addEventListener('scroll', fixNavbarToTop)
        return () => window.removeEventListener('scroll', fixNavbarToTop)
    }, [])

    return (
        <div className={`container-fluid flex justify-between items-center py-5 z-50 ${fixTop ? "bg-white text-secondary" : " sticky top-0  backdrop-blur-3xl border-b-1 border-rose-500 shadow-lg rounded-b-3xl"} transition-all `}>
            <div className="flex justify-center items-center gap-10">
                <Image
                    src={"/images/png/logo.png"}
                    alt='logo'
                    height={0}
                    width={170}
                />
                <div className=" flex gap-5">
                    <span className=' font-bold hover:text-rose-500 cursor-pointer transition-colors'>صفحه اصلی</span>
                    <span className=' font-bold hover:text-rose-500 cursor-pointer transition-colors'>فروشگاه</span>
                    <span className=' font-bold hover:text-rose-500 cursor-pointer transition-colors'>درباره ما</span>
                </div>
            </div>
            <div className=" flex justify-center items-center gap-5">
                <div className=" flex justify-center items-center flex-row-reverse border-1  rounded-full p-1 bg-zinc-100  hover:bg-rose-500 text-rose-500 hover:text-white transition-colors overflow-hidden" >
                    <div className=" p-2 cursor-pointer text-xl " onClick={() => setIsOpenSearchBox(!isOpenSearchBox)}>
                        {
                            isOpenSearchBox ? (
                                <LiaTimesSolid />
                            ) : (
                                <IoSearch />
                            )
                        }
                    </div>
                    <form >
                        <input type="text" placeholder="جستوجو..." className={`  text-secondary placeholder:text-secondary placeholder:text-xs text-sm bg-transparent outline-none ${isOpenSearchBox ? 'w-40' : 'w-0'} transition-all`} />
                    </form>
                </div>
                <div className=" relative group">

                    {
                        isLogin ? (
                            <Button type='circle'>
                                <LuUser2 className=" text-xl" />
                            </Button>
                        ) : (
                            <Link href={'/login'}>
                                <Button type='circle' >
                                    <FiLogIn className=" text-xl" />
                                </Button>
                            </Link>
                        )
                    }
                    {
                        isLogin &&
                        <div className=" invisible opacity-0 group-hover:visible group-hover:opacity-100  absolute -left-0 top-full pt-[20.5px] z-50 transition-all ">
                            <div className="w-60 p-5 border-b-1 border-rose-500 bg-white shadow-lg rounded-b-3xl transition-all">
                                <div className=" flex justify-center items-center gap-5 border-b-1 pb-3 border-rose-500 ">
                                    <Image
                                        alt='user-icon'
                                        src={'/images/png/user-icon.png'}
                                        width={50}
                                        height={0}
                                        className=' rounded-full'
                                    />
                                    <div className=" flex flex-col text-secondary">
                                        <span className=' text-lg  font-bold'>{isLogin.name}</span>
                                        <span className=' text-xs'>{isLogin.email ? isLogin.email : isLogin.phone}</span>
                                    </div>
                                </div>
                                <div className=" pt-5">
                                    {
                                        isLogin.role === 'ADMIN' &&
                                        <LinkWithIcon text='پنل ادمین' route={'/p-admin'}>
                                            <MdAdminPanelSettings />
                                        </LinkWithIcon>
                                    }
                                    <LinkWithIcon text='پیشخوان' route={'/p-user'}>
                                        <IoHome />
                                    </LinkWithIcon>
                                    <LinkWithIcon text='علاقه مندی ها' route={'/wishlist'}>
                                        <IoHeart />
                                    </LinkWithIcon>
                                    <LinkWithIcon text='تیکت های پشتیبانی' route={'/p-user'}>
                                        <IoTicket />
                                    </LinkWithIcon>
                                    <LinkWithIcon text='جزئیات حساب' route={'/p-user/account-details'}>
                                        <BiSolidCategory />
                                    </LinkWithIcon>
                                    <LinkWithIcon text='خروج' route={null} >
                                        <IoLogOut />
                                    </LinkWithIcon>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
