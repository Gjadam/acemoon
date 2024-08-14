import Image from "next/image";

export default function ProductBox({images}) {
  return (
    <div className="group mx-auto relative flex justify-center items-center flex-col mt-8 h-120 w-96  transition-all">
      <Image
        alt='product'
        src={images && images[0].url}
        width={0}
        height={0}
        sizes="100%"
        className="md:group-hover:brightness-50 w-full h-full object-cover object-top rounded-3xl transition-all"
      />
      <div className=" absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible hidden md:flex justify-center items-center flex-col gap-3 text-white transition-all">
        <span className=" text-3xl">نام محصول</span>
        <span className=" text-xl">150,000 تومان</span>
      </div>
      <div className=" flex justify-center items-center flex-col md:hidden ">
        <span className=" text-rose-500">نام محصول</span>
        <span className=" text-xl">150,000 تومان</span>
      </div>
    </div>
  )
}
