'use client'
import { useState } from "react"

// Icons
import { FaRegEye } from "react-icons/fa6"
import { IoCloudUploadOutline } from "react-icons/io5"
import { RiEyeCloseLine } from "react-icons/ri"

export default function FormInput({ error, placeholder, name, type, value, isDisabled, onChange, onBlur, options }) {

  const [showPassword, setShowPassword] = useState(false)
  const [inputError, setInputError] = useState(false)


  const showPasswordHandler = () => {
    setShowPassword(!showPassword)
  }

  const handleBlur = () => {
    setInputError(error)
  }

  switch (type) {
    case 'password':
      return (
        <div className=" group relative flex flex-col gap-2 w-full">
          <label className={` absolute right-2  px-2 ${value ? "-top-3 " : "top-5 group-focus-within:-top-3"} ${inputError ? "text-red-500" : "text-zinc-400 group-focus-within:text-sky-500"} bg-white rounded-xl text-sm select-none transition-all duration-300 pointer-events-none`}>{placeholder}</label>
          <input disabled={isDisabled} value={value} name={name} type={showPassword ? 'text' : 'password'} className={` w-full px-3 py-4 border-1  ${inputError ? "border-red-600" : "focus:border-sky-500"} focus:placeholder:text-secondary rounded-lg outline-0 placeholder:transition-all placeholder:duration-300 transition-all duration-300 `} onChange={onChange} onBlur={handleBlur} />
          {inputError ? <span className=' text-sm text-red-500'>{inputError}</span> : null}
          <div className=" absolute left-4 top-5 text-xl bg-white cursor-pointer" onClick={showPasswordHandler}>
            {
              showPassword ? (
                <FaRegEye className={inputError ? "text-red-500" : "text-zinc-400 group-focus-within:text-sky-500"} />
              ) : (
                <RiEyeCloseLine className={inputError ? "text-red-500" : "text-zinc-400 group-focus-within:text-sky-500"} />
              )
            }
          </div>
        </div>
      )
    case 'textarea':
      return (
        <div className=" group relative flex flex-col gap-2 w-full">
          <label className={` absolute right-2 px-2 ${value ? "-top-3 " : "top-5 group-focus-within:-top-3"}  ${inputError ? "text-red-500" : "text-zinc-400 group-focus-within:text-sky-500"}  bg-white rounded-xl text-sm select-none transition-all duration-300 pointer-events-none`}>{placeholder}</label>
          <textarea disabled={isDisabled} name={name} value={value} className={` h-60 w-full px-3 py-4 border-1  ${inputError ? "border-red-600" : "focus:border-sky-500"} focus:placeholder:text-secondary rounded-lg outline-0 placeholder:transition-all placeholder:duration-300 transition-all duration-300 `} onChange={onChange} onBlur={handleBlur} />
          {inputError ? <span className=' text-sm text-red-500'>{inputError}</span> : null}
        </div>
      )
    case 'select-option':
      return (
        <div className="flex group  flex-col gap-2 w-full">
          <label className={` absolute right-2  px-2 ${value ? "-top-3 " : "top-5 group-focus-within:-top-3"}  ${inputError ? "text-red-500" : "text-zinc-400 group-focus-within:text-sky-500"}  bg-white rounded-xl text-sm select-none transition-all duration-300 pointer-events-none`}>{placeholder}</label>
          <select name={name} className={` w-full px-3 py-4 border-1 text-gray-400 text-sm ${inputError ? "border-red-600" : "focus:border-sky-500"} focus:placeholder:text-secondary rounded-lg outline-0 placeholder:transition-all placeholder:duration-300 transition-all duration-300 `} onChange={onChange} onBlur={handleBlur} >
            <option value={-1} selected >دسته بندی</option>
            {
              options?.map(option => (
                <option value={option._id} key={option._id} className=' text-black'>{option.title ? option.title : option.name}</option>
              ))
            }
          </select>
          {inputError ? <span className=' text-sm text-red-500'>{inputError}</span> : null}
        </div>
      )
    case 'file':
      return (
        <label htmlFor='upload' className="flex justify-center items-center flex-col gap-3 w-full p-10 bg-white border-1 hover:border-rose-500 rounded-2xl  active:rounded-none transition-all duration-200 ">
          <form action="" encType="multipart/form-data">
            <input type='file' id='upload' className='hidden' onChange={onChange} accept=".jpg, .jpeg, .png" multiple />
          </form>
          <div className=" border-2 border-rose-500 border-dotted rounded-full p-10 ">
            <IoCloudUploadOutline className=' text-rose-500 text-4xl' />
          </div>
          <div className=" flex flex-col gap-3 text-zinc-500 text-center text-sm">
            <span>فرمت های مجاز: jpg, png, jpeg</span>
          </div>
        </label>
      )
    default:
      return (
        <div className=" group relative flex flex-col gap-2 w-full">
          <label className={` absolute right-2 px-2 ${value ? "-top-3 " : "top-5 group-focus-within:-top-3"} ${inputError ? "text-red-500" : " text-zinc-400 group-focus-within:text-sky-500"}   bg-white  rounded-xl text-sm select-none transition-all duration-300 pointer-events-none`}>{placeholder}</label>
          <input disabled={isDisabled} name={name} value={value} type={type} min={0} className={` w-full px-3 py-4 border-1  ${inputError ? "border-red-600" : "focus:border-sky-500"} focus:placeholder:text-secondary rounded-lg outline-0 placeholder:transition-all placeholder:duration-300 transition-all duration-300 `} onChange={onChange} onBlur={handleBlur} />
          {inputError ? <span className=' text-sm text-red-500'>{inputError}</span> : null}
        </div>
      )
  }

}