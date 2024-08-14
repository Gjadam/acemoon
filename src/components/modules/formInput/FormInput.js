'use client'
import { useState } from "react"

// Icons
import { FaRegEye } from "react-icons/fa6"
import { IoCloudUploadOutline } from "react-icons/io5"
import { RiEyeCloseLine } from "react-icons/ri"

export default function FormInput({  error, placeholder, name, type, value, isDisabled, onChange, onBlur, options }) {

  const [showPassword, setShowPassword] = useState(false)

  const showPasswordHandler = () => {
      setShowPassword(!showPassword)
  }

  return (
    type === 'password' ? (
      <div className=" relative flex flex-col gap-2 w-full">
        <label>{placeholder}</label>
        <input disabled={isDisabled} value={value} name={name} type={showPassword ? 'text' : 'password'} placeholder={placeholder} className={` w-full px-3 py-4 border-1 ${!isDisabled && 'hover:border-secondary'} ${error ? "border-red-600" : "focus:border-rose-200"} focus:placeholder:text-secondary focus:bg-rose-50 rounded-xl outline-none placeholder:transition-all placeholder:duration-300 transition-all duration-300 `} onChange={onChange} onBlur={onBlur} />
        {error ? <span className=' text-xs text-red-500'>{error}</span> : null}
        <div className=" absolute left-4 top-[51px] text-xl bg-white " onClick={showPasswordHandler}>
          {
            showPassword ? (
              <FaRegEye />
            ) : (
              <RiEyeCloseLine />
            )
          }
        </div>
      </div>
    ) : type === 'textarea' ? (
      <div className="flex  flex-col gap-2 w-full">
        <label>{placeholder}</label>
        <textarea disabled={isDisabled} name={name} value={value} placeholder={placeholder} className={` w-full h-48 px-3 py-4 border-1 ${!isDisabled && 'hover:border-secondary'}  ${error ? "border-red-600" : "focus:border-rose-200"} focus:placeholder:text-secondary focus:bg-rose-50 rounded-xl outline-none placeholder:transition-all placeholder:duration-300 transition-all duration-300 `} onChange={onChange} onBlur={onBlur} />
        {error ? <span className=' text-xs text-red-500'>{error}</span> : null}
      </div>
    ) : type === 'select-option' ? (
      <div className="flex  flex-col gap-2 w-full">
        <label>{placeholder}</label>
        <select name={name} className={` text-gray-400 w-full px-3 py-3.5 border-1 ${!isDisabled && 'hover:border-secondary'}  ${error ? "border-red-600" : "focus:border-rose-200"} focus:placeholder:text-secondary focus:bg-rose-50 rounded-xl outline-0 placeholder:transition-all placeholder:duration-300 transition-all duration-300 `} onChange={onChange} onBlur={onBlur} >
          <option value={-1} className=' text-gray-400' >لطفا یک مورد را انتخاب نمایید</option>
          {
            options?.map(option => (
              <option value={option._id} key={option._id} className=' text-black'>{option.title ? option.title : option.name}</option>
            ))
          }
        </select>
        {error ? <span className=' text-xs text-red-500'>{error}</span> : null}
      </div>
    ) : type === 'file' ? (
      <label htmlFor='upload' className="flex justify-center items-center flex-col gap-3 w-full p-10 bg-white border-1 hover:border-rose-500 rounded-2xl  active:rounded-none transition-all duration-200 ">
        <form action="" encType="multipart/form-data">
          <input type='file' id='upload' className='hidden' onChange={onChange} accept=".jpg, .jpeg, .png" multiple />
        </form>
        <div className=" border-2 border-rose-500 border-dotted rounded-full p-10 ">
          <IoCloudUploadOutline className=' text-rose-500 text-4xl' />
        </div>
        <div className=" flex flex-col gap-3 text-zinc-500 text-center text-sm">
          <span>حداکثر اندازه: 6 مگابایت</span>
          <span>فرمت های مجاز: jpg, png, jpeg</span>
        </div>
      </label>
    ) : (
      <div className="flex  flex-col gap-2 w-full">
        <label >{placeholder}</label>
        <input disabled={isDisabled} name={name} value={value} type={type} placeholder={placeholder} min={0} className={` w-full px-3 py-4 border-1 ${!isDisabled && 'hover:border-secondary'} ${error ? "border-red-600" : "focus:border-rose-200"} focus:placeholder:text-secondary focus:bg-rose-50 rounded-xl outline-0 placeholder:transition-all placeholder:duration-300 transition-all duration-300 `} onChange={onChange} onBlur={onBlur} />
        {error ? <span className=' text-xs text-red-500'>{error}</span> : null}
      </div>
    )
  )
}
