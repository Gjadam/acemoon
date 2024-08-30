import Image from "next/image";

export default function ProductBox({ _id, images, name }) {
    return (
        <div key={_id} className=" flex justify-start items-center gap-3  bg-zinc-50 hover:bg-zinc-100 transition-colors rounded-xl overflow-hidden">
            <div className=" w-12 h-12">
                <Image
                    alt={name}
                    src={images[0].url}
                    width={0}
                    height={0}
                    sizes='100%'
                    className=' w-full h-full object-cover '
                />
            </div>
            <p>{name}</p>
        </div>
    )
}
