import React from 'react'

export default function Button({ type, text, children }) {
    return (
        type === 'simple' ? (
            <div className="flex justify-center items-center gap-2  hover:text-rose-500 text-center rounded-3xl relative after:absolute after:left-0 after:bottom-0 after:bg-rose-500 after:h-px after:w-0 hover:after:w-full after:transition-all after:duration-200 transition-colors duration-200 ">
                <span className="">{text}</span>
                {
                    children && children
                }
            </div>

        ) : (
            <div className="flex justify-center items-center gap-3 bg-rose-500 hover:bg-zinc-700 text-white min-w-32 max-w-40 text-center py-3 rounded-3xl transition-colors duration-200">
                <span className="">{text}</span>
                {
                    children && children
                }
            </div>
        )
    )
}
