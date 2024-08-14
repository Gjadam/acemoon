import Link from "next/link";

export default function Box({ _id, name }) {
    return (
        <Link href={`/collection/${_id}`}>
            <div className=' flex justify-center items-center flex-col p-3'>
                <div className="flex justify-center items-center w-40 h-40 bg-[url('/images/png/categoryItem.png')] bg-no-repeat bg-cover bg-left rounded-full">
                    <span className=" text-center font-bold text-2xl text-secondary">{name}</span>
                </div>
            </div>
        </Link>
    )
}
