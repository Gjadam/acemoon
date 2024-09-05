import Link from "next/link"
import { usePathname } from "next/navigation"


export default function NavBarLink({ route, text, children }) {

    const pathName = usePathname()
    const isActive = pathName === route

    return (
        <Link href={route} className=" w-full xl:w-auto">
            <div className={` flex items-center gap-2 hover:bg-rose-500 ${isActive && ' text-rose-500'}  xl:hover:bg-inherit hover:text-white xl:hover:text-rose-500 rounded-md p-2 w-full transition-colors`}>
                {children}
                <span className='font-bold'>{text}</span>
            </div >
        </Link>
    )
}
