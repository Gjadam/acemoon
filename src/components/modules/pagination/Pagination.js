'use client'

import { useState } from "react"


export default function Pagination({ items, setShowItems }) {

    const [page, setPage] = useState(1)
    
    const endItem = Math.min(page * 9, items.length);  
    const startItem = Math.max(1, endItem - 9 + 1); 

    const paginateHandler = (e, page) => {

        e.preventDefault()
        setPage(page)
        const endIndex = 9 * page
        const startIndex = endIndex - 9

        const paginatedProducts = items.slice(startIndex, endIndex)
        setShowItems(paginatedProducts)
    }

    return (
        <div className=" container  mx-auto flex justify-center sm:justify-between items-center flex-wrap gap-3 w-full mt-5">
              <p className="text-sm text-rose-500 font-bold">نمایش {startItem}-{endItem} از {items.length} نتیجه</p>  
            <ul className=" flex gap-2">
                {
                    Array.from({ length: Math.ceil(items.length / 9) })?.map((item, index) => (
                        <li key={index + 1} className={`flex justify-center items-center  ${page === index + 1 ? " bg-rose-500 text-white" : "bg-zinc-200 text-secondary"} text-lg rounded-xl w-10 h-10 cursor-pointer`} onClick={(e) => paginateHandler(e, index + 1)}>
                            {index + 1}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
