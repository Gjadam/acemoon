'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Components
import Button from '../button/Button';
import LinkWithIcon from '../linkButtons/LinkWithIcon';
import NavBarLink from './navBarLink/NavBarLink';

// Icons
import { IoHeart, IoHome, IoLogOut, IoSearch, IoTicket } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu"
import { BiSolidCategory } from 'react-icons/bi';
import { LiaTimesSolid } from "react-icons/lia";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaBars } from 'react-icons/fa6';

// Hooks
import useAuth from '@/Hooks/useAuth';

export default function Navbar({ isLogin }) {

    const [fixTop, setFixTop] = useState(true)
    const [isOpenSearchBox, setIsOpenSearchBox] = useState(false)
    const [isOpenNavbar, setIsOpenNavbar] = useState(false)

    // LogOut
    const { logOut } = useAuth()

    useEffect(() => {
        const fixNavbarToTop = () => {
            const currentScroll = window.pageYOffset
            if (currentScroll > 250) {
                setFixTop(false)
            } else {
                setFixTop(true)
            }
        }

        window.addEventListener('scroll', fixNavbarToTop)
        return () => window.removeEventListener('scroll', fixNavbarToTop)
    }, [])

    return (
        <div className={` container mx-auto sm:container-fluid flex justify-between items-center p-5 z-40 bg-white ${fixTop ? " text-secondary" : " sticky top-0 border-b-1 shadow-xl rounded-b-3xl"} transition-all `}>
            <div className={`fixed xl:relative ${isOpenNavbar ? 'right-0' : '-right-[40rem]'} xl:right-0 top-0 bottom-0 w-72 xl:w-auto p-5 xl:p-0 z-50 border-l-1 xl:border-none rounded-l-3xl xl:rounded-none shadow-xl xl:shadow-none bg-white xl:bg-inherit xl:flex justify-center items-center flex-col xl:flex-row gap-10 transition-all duration-500 ease-in-out`}>
                <div className=" flex justify-between items-center">

                    <span>LOGO</span>
                    <div className=" xl:hidden">
                        <Button type={'circle'} onClick={() => setIsOpenNavbar(false)} >
                            <LiaTimesSolid />
                        </Button>
                    </div>
                </div>
                <form className="w-full xl:w-0 my-5 ">
                    <input type="text" placeholder='جستوجو...' className='xl:hidden border-1 focus:border-rose-500 rounded-3xl p-2.5 bg-white outline-none placeholder:text-sm w-full transition-colors' />
                </form>
                <div className=" flex justify-center items-start flex-col xl:flex-row gap-5 w-full ">
                    <NavBarLink text={'صفحه اصلی'} route={'/'} />
                    <NavBarLink text={'فروشگاه'} route={'/'} />
                    <NavBarLink text={'درباره ما'} route={'/'} />
                    <NavBarLink text={'ارتباط با ما'} route={'/'} />
                </div>
                <div className=" flex xl:hidden items-center gap-3 border-t-1 pt-3 mt-3">
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
            <div className=" xl:hidden">
                <Button type={'circle'} onClick={() => setIsOpenNavbar(true)} >
                    <FaBars />
                </Button>
            </div>
            <div className="  xl:hidden">
                logo
            </div>
            <div className=" flex justify-center items-center gap-5">
                <div className=" hidden xl:flex justify-center items-center flex-row-reverse border-1  rounded-full p-1 bg-zinc-100  hover:bg-rose-500 text-rose-500 hover:text-white transition-colors overflow-hidden" >
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
                        <div className=" invisible opacity-0 group-hover:visible group-hover:opacity-100  absolute -left-0 top-full pt-5 z-50 transition-all ">
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
                                    <LinkWithIcon text='خروج'  onClick={logOut}>
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
