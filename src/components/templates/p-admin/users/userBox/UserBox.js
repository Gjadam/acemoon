'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

// Components
import KeyValue from './KeyValue';
import Option from './Option';

// Icons
import { FaArrowsRotate } from 'react-icons/fa6'
import { IoBan, IoTrash } from 'react-icons/io5'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

// SweetAlert
import toastAlert from '@/utils/toastAlert';
import Swal from 'sweetalert2';

// Axios
import apiRequest from '@/Services/Axios/Configs/configs';

export default function UserBox({ _id: userID, name, email, role, phone }) {

    const router = useRouter()

    const deleteUser = () => {
        Swal.fire({
            title: "آیا میخواهید این کاربر را حذف کنید؟",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "بله",
            cancelButtonText: "خیر"
        }).then((result) => {
            if (result.isConfirmed) {
                apiRequest.delete('/user', { data: { userID } })
                    .then(res => {
                        if (res.status === 200) {
                            toastAlert.fire({
                                text: "کاربر موردنظر با موفقیت حذف شد.",
                                icon: 'success'
                            })
                            router.refresh()
                        }
                    })
            }
        });
    }

    const changeRole = async () => {
        Swal.fire({
            title: `آیا میخواهید نقش را به ${role === 'USER' ? 'مدیر' : "کاربر"} تغییر دهید؟`,
            text: `با این کار نقش ${role === "USER" ? "کاربر" : "مدیر"} به ${role === "USER" ? "مدیر" : "کاربر"} تغییر خواهد یافت.`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "بله",
            cancelButtonText: "خیر"
        }).then(async (result) => {
            if (result.isConfirmed) {
                apiRequest.put('/user/role', { userID })
                    .then(res => {
                        if (res.status === 200) {
                            toastAlert.fire({
                                text: "تغییر سطح با موفقیت انجام شد.",
                                icon: "success",
                            })
                            router.refresh()
                        }
                    })
            }
        })
    }

    const banUser = () => {
        Swal.fire({
            title: "آیا میخواهید این کاربر را مسدود کنید؟",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "بله",
            cancelButtonText: "خیر"
        }).then(async (result) => {
            if (result.isConfirmed) {
                apiRequest.post('/user/ban', { phone, email })
                    .then(res => {
                        if (res.status === 200) {
                            toastAlert.fire({
                                text: "کاربر مورد نظر با موفقیت مسدود شد",
                                icon: "success",
                            })
                            router.refresh()
                        }
                    })
                    .catch(err => {
                        if (err.response.status === 422) {
                            toastAlert.fire({
                                text: "این کاربر قبلا مسدود شده است.",
                                icon: "error",
                            })
                        }
                    })
            }
        })
    }

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
                <KeyValue title={'شناسه'} text={userID} />
                <KeyValue title={'شماره موبایل'} text={phone} />
                <KeyValue title={'نقش'} role={role} />
            </div>
            <div className="flex justify-between items-center text-lg border-t-1 pt-3">
                <span className='text-xs text-zinc-500'>گزینه ها</span>
                <div className=" flex justify-center items-center gap-5">
                    <Option title={'حذف'} iconColor={'text-red-600'} onClick={deleteUser}>
                        <IoTrash />
                    </Option>
                    <Option title={'تغییر سطح'} iconColor={'text-sky-600'} onClick={changeRole}>
                        <FaArrowsRotate />
                    </Option>
                    <Option title={'مسدود کردن'} iconColor={'text-zinc-600'} onClick={banUser}>
                        <IoBan />
                    </Option>
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
