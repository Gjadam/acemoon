import Image from 'next/image'

// Icons
import { FaShoppingBasket } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Button from '../button/Button';

export default function Navbar() {
    return (
        <div className='container-fluid flex justify-between items-center py-5'>
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
                    <span className=' font-bold hover:text-rose-500 cursor-pointer transition-colors'>درباره من</span>
                </div>
            </div>
            <div className=" flex justify-center items-center gap-5">
                <div className=" relative  ">
                    <input type="text" placeholder='جستوجو...' className='p-2.5 rounded-3xl border-1 focus:border-rose-500  placeholder:text-xs outline-none transition-all' />
                    <IoSearch className=' absolute left-3 top-3.5 text-lg' />
                </div>
                <Button text={"آیتم ها"} >
                    <FaShoppingBasket />
                </Button>
            </div>
        </div>
    )
}
