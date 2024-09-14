// Components
import Box from "./Box";

// Icons
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

export default function Facility() {
    return (
        <div className=" hidden md:block relative container mx-auto w-full h-96 mt-28 rounded-t-3xl  bg-rose-500 ">
            <div className=" flex flex-col">
                <div className="  flex justify-center md:justify-between items-center flex-wrap gap-5 w-full py-10 px-16  text-white text-center md:text-start">
                    <div className=" flex items-center gap-1 text-xl md:text-4xl font-bold">
                        <IoIosCheckmarkCircle className=" text-rose-200" />
                        <span>چرا ماه آس ؟</span>
                    </div>
                    <p className=" text-base md:text-lg max-w-[40rem] ">ما در ماه آس به دنبال ارائه محصولات با کیفیت و قیمت مناسب هستیم. هدف ما رضایت مشتریان و ایجاد تجربه خریدی لذت‌بخش است. ما به شما این اطمینان را می‌دهیم که تمامی محصولات ما با دقت انتخاب شده‌اند و از استانداردهای بالای کیفی برخوردارند. تیم ما به طور مداوم در حال بررسی و به‌روزرسانی محصولات است تا بهترین گزینه‌ها را برای شما فراهم کند. </p>
                </div>
                <div data-aos='fade-up' className=" flex justify-center items-center flex-wrap gap-10 translate-y-10 z-10">
                    <Box title={"حمل و نقل سریع"} text={"به تمام نقاط ایران"}>
                        <LiaShippingFastSolid />
                    </Box>
                    <Box title={"ضمانت بازگشت وجه"} text={"خرید بدون نگرانی"}>
                        <FaMoneyBillTransfer />
                    </Box>
                    <Box title={"پشتیبانی 24 ساعته"} text={"همراه با پاسخگویی سریع "}>
                        <BiSupport />
                    </Box>
                </div>
            </div>
            <div className=" hidden md:block absolute left-0 right-0 bottom-0 ">
                <svg viewBox="0 0 500 150" preserveAspectRatio='none' width="100%" height="150" fill="#fff">
                    <path
                        d="M0,150 L0,40 Q250,150 500,40 L580,150 Z" />
                </svg>
            </div>
        </div>

    )
}
