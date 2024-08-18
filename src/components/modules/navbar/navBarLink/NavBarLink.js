import Link from "next/link"

// Icons
import { GiLotusFlower } from "react-icons/gi";

export default function NavBarLink({ route, text }) {
    return (
        <Link href={route} className=" w-full xl:w-auto">
            <div className=" flex items-center gap-2 hover:bg-rose-500 xl:hover:bg-inherit hover:text-white xl:hover:text-rose-500 rounded-md p-2 w-full transition-colors">
                <GiLotusFlower className="text-lg"/>
                <span className='font-bold'>{text}</span>
            </div >
        </Link>
    )
}
