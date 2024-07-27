
// Components
import Box from "./Box";

// Icons
import { FaTruck } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";

export default function Introduction() {
  return (
    <div className=" container mx-auto xl:container-fluid my-28">
      <div className="flex justify-around items-center h-72  bg-[url('/images/jpg/Introduction.jpg')] bg-cover bg-center bg-no-repeat">
        <Box title={"ارسال رایگان"} text={"با هر خرید بالای 300 هزارتومان"}>
          <FaTruck className=" text-rose-500 text-8xl mb-3" />
        </Box>
        <Box title={"پشتیبانی 24 ساعته"} text={"با پاسخگویی سریع"}>
          <BiSupport className=" text-rose-500 text-8xl mb-3" />
        </Box>
        <Box title={"تضمین بازگشت پول"} text={"خرید با خیال راحت"}>
          <MdOutlineAttachMoney className=" text-rose-500 text-8xl mb-3" />
        </Box>
        <Box title={"تخفیفات شگفت انگیز"} text={"برای مشتریان وفادار"}>
          <RiDiscountPercentFill className=" text-rose-500 text-8xl mb-3" />
        </Box>
      </div>
    </div>
  )
}
