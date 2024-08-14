import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SideBarLink({ text, route, children, onClick }) {
    const pathName = usePathname()
    const isActive = pathName === route

    return (
        <Link href={route ? route : ''}>
            <div className={` flex items-center gap-1 ${isActive ? 'text-rose-500' : 'text-zinc-500'}  cursor-pointer`}>
                <div className={` text-xl ${isActive ? "border-1 border-primary rounded-l-full  bg-rose-500 text-white" : " text-zinc-500 "} transition-colors`} onClick={onClick}>
                    <div className=" flex items-center gap-1 p-3">
                        {children}

                    </div>
                </div>
                <span >{text}</span>
            </div>
        </Link>
    )
}