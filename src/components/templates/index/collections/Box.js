import Link from "next/link";

export default function Box({ _id, name }) {
    return (
        <Link href={`/collection/${_id}`}>
            <div className=' flex justify-center items-center flex-col p-3 '>
                <div className="flex justify-center items-center w-32 h-32 bg-rose-500 hover:bg-rose-700 shadow-xl  rounded-lg  transition-all duration-300 ">
                    <span className=" text-white text-center font-bold text-2xl">{name}</span>
                </div>
            </div>
        </Link>
    )
}
