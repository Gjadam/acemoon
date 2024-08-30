
// Icons 
import { RiAdminFill, RiUser2Fill } from "react-icons/ri";

export default function KeyValue({ title, text, role }) {
    return (
        <div className=" flex justify-between items-center">
            <span className='text-xs text-zinc-500'>{title}</span>
            {
                role ? (
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
                ) : (
                    <span className=' text-sm'>{text}</span>
                )
            }
        </div>
    )
}
