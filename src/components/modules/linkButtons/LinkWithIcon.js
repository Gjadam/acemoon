import Link from "next/link";

export default function LinkWithIcon({ children, text, route, onClick }) {
    return (
        <Link href={route ? route : ""}>
            <div className=" flex justify-start items-center gap-2 p-2 hover:last:bg-red-500 hover:bg-rose-500 text-secondary hover:text-white rounded-xl transition-colors" onClick={onClick}>
                <div className=" flex items-center gap-3">
                    <div className=" text-lg">
                        {children}
                    </div>
                    <span>{text}</span>
                </div>
            </div>
        </Link>
    )
}