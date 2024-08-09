import Image from "next/image";

// Components
import BreadCrumb from "../modules/breadCrumb/BreadCrumb";

export default function LoginRegisterLayout({ children }) {
    return (
        <div className=' flex gap-5 w-full h-screen  overflow-hidden '>
            <div className=" h-full hidden lg:flex flex-col gap-5 lg:w-3/5 p-10 ">
                <BreadCrumb routeText={'ورود'} />
                <div className="relative w-full  h-full rounded-3xl bg-[url('/images/jpg/login.jpg')] bg-cover bg-center bg-no-repeat z-10 ">
                <Image
                        alt='cloud'
                        src={'/images/png/cloud.png'}
                        width={0}
                        height={0}
                        sizes='100%'
                        className=' w-full absolute left-0 -bottom-0 drag-none z-10'
                    />
                </div>
            </div>
            <div className="flex justify-start items-center w-full lg:w-2/5 transition-all duration-200">
                <div className=" flex justify-start items-center w-full p-10">
                    {children}
                </div>
            </div>
        </div>
    )
}
