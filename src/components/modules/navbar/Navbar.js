import Image from 'next/image'

// Icons
import { FaShoppingBasket } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
    return (
        <div className=' flex justify-between items-center px-10 py-5'>
            <div className="flex justify-center items-center gap-10">
                <Image
                    src={"/images/png/logo.png"}
                    alt='logo'
                    height={0}
                    width={250}
                />
                <div className=" flex gap-5">
                    <span className=' font-bold hover:text-pink-500 cursor-pointer transition-colors'>صفحه اصلی</span>
                    <span className=' font-bold hover:text-pink-500 cursor-pointer transition-colors'>فروشگاه</span>
                    <span className=' font-bold hover:text-pink-500 cursor-pointer transition-colors'>درباره ما</span>
                    <span className=' font-bold hover:text-pink-500 cursor-pointer transition-colors'>درباره من</span>
                </div>
            </div>
            <div className=" flex justify-center items-center gap-5">
                <div className=" flex justify-center items-center gap-3">
                    <input type="text" placeholder='جستوجو...' className=' focus:border-b-1 border-opacity-0 focus:border-opacity-100 border-pink-500 pb-1 transition-all placeholder:text-xs outline-none'/>
                    <IoSearch />
                </div>
                <div className="flex justify-center items-center gap-3 bg-pink-500 text-white w-32 p-3 rounded-3xl">
                    <span className="">آیتم ها</span>
                    <FaShoppingBasket />
                </div>
            </div>
        </div>
    )
}
