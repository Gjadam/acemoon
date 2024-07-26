import React from 'react'

export default function Button({ type, text, children }) {
    return (
        type === 'light' ? (
            <div className="flex justify-center items-center gap-3 bg-white hover:bg-zinc-700 text-black hover:text-white min-w-32 max-w-40 text-center py-3 rounded-3xl transition-colors">
            <span className="">{text}</span>
            {
                children && children
            }
        </div>

        ) : (
        <div className="flex justify-center items-center gap-3 bg-rose-500 hover:bg-zinc-700 text-white min-w-32 max-w-40 text-center py-3 rounded-3xl transition-colors">
            <span className="">{text}</span>
            {
                children && children
            }
        </div>
        )
    )
}
