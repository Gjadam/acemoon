
// Components
import Box from "./Box";

// Icons
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

export default function Facility() {
    return (
        <div className=" container mx-auto  flex justify-center items-center flex-wrap gap-10  mt-28 py-10 border-y-1">
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
    )
}
