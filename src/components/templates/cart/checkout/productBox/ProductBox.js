
export default function ProductBox({ name, size, color, count,  price }) {
    return (
        <div className=" flex justify-between items-start gap-10 border-b-1 py-3 text-zinc-500 text-sm">
            <span>{`${name} ${size ? `، سایز: ${size}` : ''}  ${color ? `، رنگ: ${color}` : ''}، ${count}عدد `}</span>
            <span className=" text-lg ">
                {price?.toLocaleString()}
                <span className=' text-xs mr-1 '>تومان</span>
            </span>
        </div>
    )
}
