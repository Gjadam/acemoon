
export default function Stepper({step}) {
  return (
    <div className="  w-full border-b-1 pb-5">

    <div className=" w-full flex justify-between items-center flex-col md:flex-row bg-zinc-100 rounded-xl overflow-hidden text-sm md:text-base">
        <div className={`${step === 'cart' ? 'bg-rose-500 text-white' : " text-zinc-400"}  w-full text-center p-3`}>
            <span>سبد خرید</span>
        </div>
        <div className={`${step === 'complete' ? 'bg-rose-500 text-white' : " text-zinc-400"} w-full text-center p-3 relative md:after:absolute after:w-32 after:h-10 after:bg-white after:-right-14 after:-rotate-45 md:before:absolute before:w-32 before:h-10 before:bg-white before:-left-14 before:rotate-45 `}>
            <span>تکمیل سفارش</span>
        </div>
        <div className={`${step === 'checkout' ? 'bg-rose-500 text-white' : " text-zinc-400"}  w-full text-center p-3`}>
            <span>پرداخت</span>
        </div>
    </div>
    </div>
  )
}
