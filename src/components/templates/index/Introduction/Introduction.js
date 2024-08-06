
// Components
import Box from "./Box";

// Icons
import { FaTruckFast  } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { RiDiscountPercentLine } from "react-icons/ri";
import { AiOutlineDollar } from "react-icons/ai";
export default function Introduction() {
  return (
    <div  className=" container mx-auto xl:container-fluid my-28">
      <div  className="flex justify-around items-center gap-10 flex-wrap p-10 bg-[url('/images/jpg/Introduction.jpg')] bg-fixed bg-cover bg-center bg-no-repeat">
        <Box title={"ارسال رایگان"} text={"با هر خرید بالای 300 هزارتومان"}>
          <FaTruckFast className=" text-rose-500 text-6xl " />
        </Box>
        <Box title={"پشتیبانی 24 ساعته"} text={"با پاسخگویی سریع"}>
          <BiSupport className=" text-rose-500 text-6xl " />
        </Box>
        <Box title={"تضمین بازگشت پول"} text={"خرید با خیال راحت"}>
          <AiOutlineDollar className=" text-rose-500 text-6xl " />
        </Box>
        <Box title={"تخفیفات شگفت انگیز"} text={"برای مشتریان وفادار"}>
          <RiDiscountPercentLine className=" text-rose-500 text-6xl " />
        </Box>
      </div>
    </div>
  )
}
