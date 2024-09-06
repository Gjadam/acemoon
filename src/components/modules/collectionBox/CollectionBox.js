import Link from "next/link";

export default function CollectionBox({ _id, name }) {
    return (
        <div className="  grow p-3 bg-rose-500  text-white rounded-2xl">
            <Link href={`/collection/${_id}`} >
                <div className=" flex justify-center items-center border-1 bg-rose-500 hover:bg-rose-700 border-rose-300 p-5 transition-colors">
                    <span className=" text-xl font-bold">{name}</span>
                </div>
            </Link>
        </div>
    )
}
