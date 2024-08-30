import Image from "next/image";
import Link from "next/link";

// Components
import Button from "@/components/modules/button/Button";

export default function NotFound() {
  return (
    <div className=" relative h-screen overflow-hidden bg-white">
      <div className=" w-full flex justify-center items-center border-b-1 p-10">
        <span>LOGO</span>
      </div>
      <div className="flex justify-center items-center flex-col gap-5 h-full text-center">
        <h1 className=" text-9xl sm:text-[12rem] text-rose-500 ">404</h1>
        <div className=" flex flex-col gap-3">
          <span className=" text-4xl font-bold">صفحه پیدا نشد</span>
          <p className=" text-zinc-500 text-2xl">متاسفانه صفحه موردنظر یافت نشد</p>
        </div>
        <Link href={'/'}>
          <Button type={'simple'} text={'برگشت به خانه'} />
        </Link>
      </div>
      <div className="absolute bottom-5 w-full">
        <Image
          alt="error"
          src='/images/png/error.png'
          width={0}
          height={0}
          sizes="100&"
          className=" w-full"
        />
      </div>
    </div>
  )
}
