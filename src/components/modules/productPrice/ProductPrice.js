
export default function ProductPrice({ price, priceBeforeDiscount }) {
    return (
        <div className=" flex items-center flex-wrap gap-3 ">
            <span className=" text-2xl text-rose-600 brightness-75  ">
                {price?.toLocaleString()}
                <span className=' text-xs mr-1 text-rose-400 '>تومان</span>
            </span>
            {
                priceBeforeDiscount ? (
                    <span className="  text-zinc-500 relative after:absolute after:bg-red-500 after:left-0 after:top-3.5 after:w-full after:h-px ">
                      {priceBeforeDiscount?.toLocaleString()}
                        <span className=' text-xs mr-1'>تومان</span>
                    </span>
                ) : null
            }
        </div>
    )
}
