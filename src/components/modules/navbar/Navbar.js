'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Components
import Button from '../button/Button';
import LinkWithIcon from '../linkButtons/LinkWithIcon';
import NavBarLink from './navBarLink/NavBarLink';
import Alert from './search/alert/Alert';
import ProductBox from './search/productBox/ProductBox';
import CollectionBox from './search/collectionBox/CollectionBox';
import Title from './search/title/Title';
import SearchBox from '../searchBox/SearchBox';

// Icons
import { RxExternalLink } from "react-icons/rx";
import { IoBookmark, IoHeart, IoLogOut, IoStorefront, IoTicket } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu"
import { MdAdminPanelSettings } from "react-icons/md";
import { FaBars, FaHouseUser, FaPhone } from 'react-icons/fa6';
import { HiCollection, HiShoppingCart } from "react-icons/hi";
import { RiShoppingCart2Line } from "react-icons/ri";

// Hooks
import useAuth from '@/Hooks/useAuth';

export default function Navbar({ isLogin }) {

    const router = useRouter()

    const [fixTop, setFixTop] = useState(true)
    const [isOpenNavbar, setIsOpenNavbar] = useState(false)

    const [searchValue, setSearchValue] = useState('')
    const [dataFromSearch, setDataFromSearch] = useState([])

    const [isOpenSearchBox, setIsOpenSearchBox] = useState(false)

    const [cartCount, setCartCount] = useState(0)

    // LogOut
    const { logOut } = useAuth()

    useEffect(() => {

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartCount(cart.length)

        const fixNavbarToTop = () => {
            const currentScroll = window.pageYOffset
            if (currentScroll > 150) {
                setFixTop(false)
            } else {
                setFixTop(true)
            }
        }

        window.addEventListener('scroll', fixNavbarToTop)
        return () => window.removeEventListener('scroll', fixNavbarToTop)
    }, [])

    const getDataWithSearch = async () => {
        const res = await fetch(`/api/search?q=${searchValue}`)
        if (res.status === 200) {
            const data = await res.json()
            setDataFromSearch(data)
        }
    }

    useEffect(() => {
        if (searchValue.trim()) {
            getDataWithSearch()
        }
    }, [searchValue])

    const goToSearchPage = (e) => {
        e.preventDefault()
        router.replace(`/search?q=${searchValue}`)
    }

    return (
        <div className={`sm:container-fluid flex justify-between items-center  p-5 bg-white z-[999]  ${fixTop ? " text-secondary" : " sticky top-0  border-b-1 shadow-xl w-full rounded-b-3xl"}`} >
            <div className=" xl:hidden">
                <Button type={'circle'} onClick={() => setIsOpenNavbar(true)} >
                    <FaBars />
                </Button>
            </div>
            <Link href={'/'} className='xl:hidden'>
                <Image
                    alt='logo'
                    src='/images/png/logo.png'
                    width={60}
                    height={0}
                />
            </Link>
            <div className={` fixed z-50 ${isOpenNavbar ? ' xl:relative left-0 right-0 bottom-0 top-0 bg-[rgba(0,0,0,0.5)] xl:bg-inherit ' : '-right-[40rem] '}  xl:right-0 xl:relative transition-all duration-500 ease-in-out`} onClick={isOpenNavbar ? () => setIsOpenNavbar(false) : null}>
                <div className={`fixed xl:relative ${isOpenNavbar ? 'right-0 ' : '-right-[40rem]'} xl:right-0 top-0 bottom-0 w-60 xl:w-auto p-5 xl:p-0 z-50 border-l-1 xl:border-none rounded-l-3xl xl:rounded-none shadow-xl xl:shadow-none bg-white xl:bg-inherit xl:flex justify-center items-center flex-col xl:flex-row gap-10 transition-all duration-500 ease-in-out`} onClick={(e) => e.stopPropagation()}>
                    <Link href={'/'} className='hidden xl:block'>
                        <Image
                            alt='logo'
                            src='/images/png/logo.png'
                            width={70}
                            height={0}
                        />
                    </Link>
                    <form onSubmit={goToSearchPage} className="w-full xl:w-0 my-5 ">
                        <input type="text" placeholder='جستوجو...' className='xl:hidden border-1 focus:border-rose-500 rounded-md p-2 bg-white outline-none placeholder:text-sm w-full transition-colors' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    </form>
                    <div className=" flex justify-center items-start flex-col xl:flex-row gap-5 w-full ">
                        <div className=" relative xl:hidden w-full">
                            <NavBarLink text={'سبد خرید'} route={'/cart'} >
                                <HiShoppingCart />
                            </NavBarLink>
                            {
                                cartCount > 0 &&
                                <div className=" absolute left-3 bottom-2.5 flex justify-center items-center overflow-hidden w-5 h-5 rounded-full  border-1 border-primary bg-rose-500 text-white text-xs">
                                    <span>{cartCount}</span>
                                </div>
                            }
                        </div>
                        <NavBarLink text={'فروشگاه'} route={'/shop'} >
                            <IoStorefront />
                        </NavBarLink>
                        <NavBarLink text={'دسته بندی ها'} route={'/collections'} >
                            <HiCollection />
                        </NavBarLink>
                        <NavBarLink text={'درباره ما'} route={'/about-us'} >
                            <IoBookmark />
                        </NavBarLink>
                        <NavBarLink text={'ارتباط با ما'} route={'/contact-us'} >
                            <FaPhone />
                        </NavBarLink>
                        <div className=" flex xl:hidden items-center gap-3 border-t-1 pt-3 mt-3 w-full">
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
            <div className=" flex justify-center items-center gap-5">
                <div className=" relative hidden xl:block">
                    <Link href={'/cart'}>
                        <Button type={'circle'} >
                            <RiShoppingCart2Line />
                        </Button>
                    </Link>
                    {
                        cartCount > 0 &&
                        <div className=" absolute -right-0.5 -top-0.5 flex justify-center items-center overflow-hidden w-4 h-4 rounded-full  border-1 border-primary bg-rose-500 text-white text-xs">
                            <span>{cartCount}</span>
                        </div>
                    }
                </div>
                <div className="hidden xl:block">
                    <div className=" relative">
                        <SearchBox value={searchValue} onChange={(e) => setSearchValue(e.target.value)} isOpenSearchBox={isOpenSearchBox} setIsOpenSearchBox={setIsOpenSearchBox} />
                        <div className={`absolute left-0 top-full z-50 pt-5 ${searchValue.length && isOpenSearchBox ? 'translate-y-0 visible opacity-100' : '-translate-y-5 invisible opacity-0'} transition-all duration-500`}>
                            <div className=" flex flex-col   bg-white w-64  shadow-xl border-b-1 border-rose-500 rounded-b-3xl overflow-hidden">
                                <Title title={'محصولات'} />
                                <div className=" flex flex-col gap-3 p-5">
                                    {
                                        dataFromSearch.products?.length > 0 ? (
                                            dataFromSearch.products.map(product => (
                                                <Link key={product._id} href={`/product/${product._id}`}>
                                                    <ProductBox  {...product} />
                                                </Link>
                                            ))
                                        ) : (
                                            <Alert text={'محصول موردنظر یافت نشد'} />
                                        )
                                    }
                                </div>
                                <Title title={'دسته بندی ها'} />
                                <div className=" flex flex-col gap-3 p-5">
                                    {
                                        dataFromSearch.collections?.length > 0 ? (
                                            dataFromSearch.collections.map(collection => (
                                                <Link key={collection._id} href={`/collection/${collection._id}`}>
                                                    <CollectionBox  {...collection} />
                                                </Link>
                                            ))
                                        ) : (
                                            <Alert text={'دسته بندی موردنظر یافت نشد'} />
                                        )
                                    }
                                </div>
                                {
                                    dataFromSearch.collections?.length > 0 || dataFromSearch.products?.length > 0 ? (
                                        <Link href={`/search?q=${searchValue}`}>
                                            <div className=" flex justify-center items-center w-full py-2 bg-rose-500 ">
                                                <div className=' flex justify-center items-center gap-1 '>
                                                    <span className=' text-white text-xs'>دیدن همه</span>
                                                    <RxExternalLink className=' text-white text-sm' />
                                                </div>
                                            </div>
                                        </Link>
                                    ) : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" relative group">
                    {
                        isLogin ? (
                            <Button type='circle'>
                                <LuUser2 className=" text-xl" />
                            </Button>
                        ) : (
                            <Link href={'/login-otp'}>
                                <Button type='circle' >
                                    <FiLogIn className=" text-xl" />
                                </Button>
                            </Link>
                        )
                    }
                    {
                        isLogin &&
                        <div className=" -translate-y-5 group-hover:-translate-y-0 invisible opacity-0 group-hover:visible group-hover:opacity-100  absolute -left-0 top-full pt-5 z-50 transition-all duration-500 ">
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
                                    <LinkWithIcon text='حساب کاربری من' route={'/p-user'}>
                                        <FaHouseUser />
                                    </LinkWithIcon>
                                    <LinkWithIcon text='علاقه مندی ها' route={'/wishlist'}>
                                        <IoHeart />
                                    </LinkWithIcon>
                                    <LinkWithIcon text='تیکت های پشتیبانی' route={'/p-user/tickets'}>
                                        <IoTicket />
                                    </LinkWithIcon>
                                    <LinkWithIcon text='خروج' onClick={logOut}>
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
