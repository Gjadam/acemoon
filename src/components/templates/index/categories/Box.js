import Image from "next/image";

export default function Box() {
    return (
        <div className=' flex justify-center items-center flex-col p-3'>
            <div className=" w-40 h-40 bg-[url('/images/jpg/accessorize.jpg')] bg-no-repeat bg-cover bg-center rounded-full"></div>
            <span>اکسسوری</span>
        </div>
    )
}
