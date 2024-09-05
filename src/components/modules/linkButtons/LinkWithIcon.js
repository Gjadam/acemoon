import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkWithIcon({ children, text, route, onClick }) {

    const pathName = usePathname()
    const isActive = pathName === route

    return (
        <div className={`hover:last:bg-red-500 last:rounded-b-xl first:rounded-t-xl hover:bg-rose-500 ${isActive && 'bg-rose-500'} transition-colors`}>
            <Link href={route ? route : ""}>
                <div className={` flex justify-start items-center gap-2 p-2  text-secondary hover:text-white  ${isActive && 'text-white'} `} onClick={onClick}>
                    <div className=" flex items-center gap-3">
                        <div className=" text-lg">
                            {children}
                        </div>
                        <span>{text}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
