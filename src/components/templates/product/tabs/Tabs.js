"use client"
import Image from "next/image"
import { useState } from "react"

// Components
import Description from "./description/Description"
import Comments from "./comments/Comments"

export default function Tabs({ productID, longDescription, comments, user }) {
    const [active, setActive] = useState('desc')

    return (
        <div className=" my-10">
            <div className=" flex justify-center items-center flex-wrap gap-5  border-b-1 py-10">
                <Image
                    alt='logo'
                    src={'/images/png/flower1.png'}
                    width={100}
                    height={0}
                    className=' drag-none -rotate-90 hidden md:block'
                />
                <button className={` w-full md:w-40 h-12  hover:bg-rose-500 hover:text-white ${active === 'desc' ? ' bg-rose-500 text-white' : 'bg-zinc-100 text-secondary'} rounded-3xl transition-colors`} onClick={() => setActive("desc")}>توضیحات</button>
                <button className={` w-full md:w-40 h-12  hover:bg-rose-500 hover:text-white ${active === 'comments' ? ' bg-rose-500 text-white' : 'bg-zinc-100 text-secondary'} rounded-3xl transition-colors`} onClick={() => setActive("comments")}>نظرات({comments.filter(comment => comment.isAccept).length})</button>
                <Image
                    alt='logo'
                    src={'/images/png/flower1.png'}
                    width={100}
                    height={0}
                    className='drag-none rotate-90 hidden md:block'
                />
            </div>
            <div className=" py-10 border-b-1">
                {
                    active === 'desc' ? (
                        <Description longDescription={longDescription} />
                    ) : (
                        <Comments productID={productID} comments={comments} user={user} />
                    )
                }
            </div>
        </div>
    )
}
