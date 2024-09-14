'use client'
import Image from "next/image";
import Link from "next/link";

// Components
import ProductPrice from "../productPrice/ProductPrice";
import Button from "../button/Button";

// Icons
import { IoBasket, IoEye, IoHeart } from "react-icons/io5";

// Hooks
import useProduct from "@/Hooks/useProduct";

export default function ProductBox({ _id, name, price, priceBeforeDiscount, images }) {

  // AddToWishlist
  const { addToWishlist } = useProduct(_id)

  return (
    <div className=" relative  flex justify-center items-center flex-col w-full sm:w-120 mx-auto">
      <div className=" relative group flex justify-center items-center flex-col mt-8 h-72 w-full overflow-hidden border-1 rounded-3xl transition-all">
        <Image
          alt='product'
          src={images && images[0]?.url}
          width={0}
          height={0}
          sizes="100%"
          className={` absolute top-0 w-full h-full ${images.length > 1 && 'group-hover:-top-[30rem]'} group-hover:brightness-50 object-cover transition-all duration-700`}
        />
        {
          images.length > 1 &&
          <Image
            alt='product'
            src={images && images[1]?.url}
            width={0}
            height={0}
            sizes="100%"
            className=" absolute -bottom-[30rem] h-full group-hover:bottom-0 w-full group-hover:brightness-50 object-cover transition-all duration-700"
          />
        }
        <div className=" flex flex-col gap-3 absolute right-5 -bottom-32 group-hover:bottom-5 transition-all duration-500 delay-300">

          <div className="  flex items-center gap-2">
            <Button type={'circle'} onClick={addToWishlist}>
              <IoHeart />
            </Button>
            <div className=" z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0  overflow-hidden transition-all duration-300 delay-700">
              <span className=" text-sm text-white">افزودن به علاقه مندی</span>
            </div>
          </div>
          <div className="  flex items-center gap-2">
            <Link href={`/product/${_id}`} >
              <Button type={'circle'}>
                <IoEye />
              </Button>
            </Link>
            <div className=" z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0  overflow-hidden transition-all duration-300 delay-700">
              <span className=" text-sm text-white">مشاهده</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-between items-center w-full p-3">
        <h1 className=" text-secondary font-bold text-2xl">{name}</h1>
        <ProductPrice price={price} priceBeforeDiscount={priceBeforeDiscount} />
      </div>
      <Image
        alt="flower"
        src='/images/png/flower1.png'
        width={100}
        height={0}
        className=" absolute -right-10 -top-0 -rotate-45"
      />
      <Image
        alt="flower"
        src='/images/png/flower1-flip.png'
        width={100}
        height={0}
        className=" absolute -left-10 -top-0 rotate-45"
      />
    </div>
  )
}
