import Link from "next/link"

export default function NavBarLink({ route, text }) {
    return (
        <Link href={route} className=" w-full xl:w-auto">
            <div className=" hover:bg-rose-500 xl:hover:bg-inherit hover:text-white xl:hover:text-rose-500 rounded-md p-2 w-full transition-colors">
                <span className='font-bold w-60'>{text}</span>
            </div >
        </Link>
    )
}
