import Link from "next/link";

// Icons
import { IoHome } from "react-icons/io5";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
export default function BreadCrumb({ routeText }) {
  return (
    <div  className=" flex items-center gap-2 text-secondary ">
      <Link href={'/'}>
        <span className=" flex items-center gap-1 hover:text-rose-500 transition-colors"><IoHome />صفحه اصلی</span>
      </Link>
      <RiArrowLeftDoubleFill className="text-rose-500" />
      <span className=" flex items-center gap-3 ">{routeText}</span>
    </div>
  )
}
