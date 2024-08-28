// Icons
import { IoIosLink } from "react-icons/io";

export default function Button({ type, text, children, isSubmitType, onClick, isDisabled, isWidthFull }) {
    return (
        type === 'simple' ? (
            <button type={isSubmitType ? 'submit' : 'button'} className={` group flex justify-center items-center gap-2 text-secondary hover:text-white p-2 text-sm text-center rounded-3xl ${isDisabled && "opacity-50 bg-secondary cursor-not-allowed"} overflow-hidden relative after:absolute after:left-0 after:bottom-0 z-10 after:-z-10 after:bg-rose-500 after:h-full after:w-0 hover:after:w-full after:transition-all after:duration-300 transition-colors duration-300 `} disabled={isDisabled} onClick={onClick}>
                <span className="">{text}</span>
                <IoIosLink className=" group-hover:animate-pulse"/>
            </button>

        ) : type === 'circle' ? (
            <button className=" p-3 border-1 text-xl text-rose-500 rounded-full  hover:text-white bg-zinc-100 hover:bg-rose-500 hover:border-rose-500 overflow-hidden relative before:absolute before:left-0 before:-bottom-1 before:hover:bottom-full before:w-full before:h-px before:bg-zinc-100 before:transition-all before:duration-300 transition-colors duration-500" onClick={onClick}>
                {children}
            </button>
        ) : (
            <button type={isSubmitType ? 'submit' : 'button'} className={`  flex justify-center items-center gap-3 bg-rose-500 hover:bg-white text-white hover:text-rose-500 ${isDisabled && "opacity-50 bg-secondary cursor-not-allowed"} ${isWidthFull ? "w-full" : "w-full md:min-w-40 md:max-w-44"}   text-center py-2 rounded-3xl overflow-hidden  z-10  relative after:absolute after:left-0 after:bottom-0 after:w-full after:bg-[rgba(225,225,225,225.0.5)] after:h-0 after:hover:h-full after:-z-10 after:transition-all after:duration-300 before:absolute before:left-0 before:-bottom-1 before:hover:bottom-full before:w-full before:h-px before:bg-zinc-100 before:transition-all before:duration-300 transition-colors duration-500`} disabled={isDisabled} onClick={onClick}>
                <span className="">{text}</span>
                {
                    children && children
                }
            </button>
        )
    )
}
