
// Icons
import { IoIosArrowDown } from "react-icons/io";

// Swiper
import { useSwiper } from "swiper/react";

export default function CustomNavigation() {

  const swiper = useSwiper()

  return (
    <div className=' absolute right-5 top-80 z-10'>
      <div className=" flex items-center flex-col gap-5 ">
        <div className=" flex justify-center items-center p-3 border-1 rotate-180 text-zinc-600 hover:border-rose-300 hover:text-rose-500 rounded-full backdrop-blur-2xl cursor-pointer transition-colors duration-300" onClick={() => swiper.slidePrev()}>
          <IoIosArrowDown className=" text-2xl" />
        </div>
        <div className=" flex justify-center items-center p-3 border-1 text-zinc-600 hover:border-rose-300 hover:text-rose-500 rounded-full backdrop-blur-2xl cursor-pointer transition-colors duration-300" onClick={() => swiper.slideNext()}>
          <IoIosArrowDown className=" text-2xl" />
        </div>
      </div>
    </div>
  )
}
