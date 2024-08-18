import Image from 'next/image'

// Icons
import { FaArrowsRotate } from 'react-icons/fa6'
import { IoBan, IoTrash } from 'react-icons/io5'
import { MdEdit, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { RiAdminFill, RiUser2Fill } from "react-icons/ri";

export default function UserBox({ _id, name, email, role, phone }) {
    return (
        <div className=' group relative w-80 p-5 bg-white hover: border-1 shadow hover:shadow-lg rounded-2xl transition-shadow'>
            <div className="  flex  w-full items-center flex-col border-b-1 ">
                <div className=" flex justify-between items-center w-full">
                    <div className="">
                        <h1 className=' text-base'>{name}</h1>
                        <h2 className=' text-xs'>{email ? email : 'ایمیل یافت نشد'}</h2>
                    </div>
                    <Image
                        src={'/images/png/user-icon.png'}
                        alt='user-icon'
                        width={55}
                        height={0}
                        className=' rounded-full border-1'
                    />
                </div>
                <div>
                    <MdOutlineKeyboardArrowDown className=' group-hover:opacity-0 animate-bounce text-lg text-zinc-400 transition-opacity' />
                </div>
            </div>
            <div className=" flex flex-col gap-3 h-0 opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:h-20 group-hover:my-5 overflow-hidden transition-all duration-300">
                <div className=" flex justify-between items-center">
                    <span className='text-xs text-zinc-500'>شناسه</span>
                    <span className=' text-sm'>{_id}</span>
                </div>
                <div className=" flex justify-between items-center">
                    <span className='text-xs text-zinc-500'>شماره موبایل</span>
                    <span className=' text-sm'>{phone}</span>
                </div>
                <div className=" flex justify-between items-center ">
                    <span className='text-xs text-zinc-500'>نقش</span>
                    {
                        role === 'ADMIN' ? (
                            <span className=' flex items-center gap-1 text-blue-500 text-sm'>
                                <RiAdminFill className=' text-lg' />
                                مدیر
                            </span>
                        ) : (
                            <span className=' flex items-center gap-1 text-rose-500 text-sm'>
                                <RiUser2Fill className=' text-lg' />
                                کاربر
                            </span>
                        )
                    }
                </div>
            </div>
            <div className="flex justify-between items-center text-lg border-t-1 pt-3">
                <span className='text-xs text-zinc-500'>گزینه ها</span>
                <div className=" flex justify-center items-center gap-5">
                    <abbr title="حذف">
                        <div className="  text-red-600 " >
                            <IoTrash />
                        </div>
                    </abbr>
                    <abbr title="تغییر سطح">
                        <div className=" text-base  text-sky-600 " >
                            <FaArrowsRotate />
                        </div>
                    </abbr>
                    <abbr title="ویرایش">
                        <div className="  text-green-600 ">
                            <MdEdit />
                        </div>
                    </abbr>
                    <abbr title="بن">
                        <div className="  text-zinc-600 " >
                            <IoBan />
                        </div>
                    </abbr>
                </div>
            </div>
            <Image
                alt='flower'
                src={'/images/png/flower2.png'}
                width={70}
                height={0}
                className=' absolute -left-4 -top-5 rotate-45'
            />
        </div>
    )
}
