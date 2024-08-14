import Link from "next/link";

export default function Box({ _id, name }) {
    return (
        <Link href={`/collection/${_id}`}>
            <div className=' group flex justify-center items-center flex-col p-3'>
                <div className="flex justify-center items-center w-40 h-40 bg-[url('/images/png/categoryItem.png')] bg-no-repeat bg-cover bg-center rounded-full">
                    <span className=" group-hover:text-rose-500 text-center font-bold text-2xl text-secondary transition-colors">{name}</span>
                </div>
            </div>
        </Link>
    )
}
