'use client'
import Image from "next/image";
import Link from "next/link";

// Components
import ProductPrice from "../productPrice/ProductPrice";
import Button from "../button/Button";

// Icons
import { IoBasket, IoHeart } from "react-icons/io5";

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
          className={` absolute top-0 w-full h-full ${images.length > 1 && 'group-hover:-top-[30rem]'} group-hover:brightness-75 object-cover transition-all duration-700`}
        />
        {
          images.length > 1 &&
          <Image
            alt='product'
            src={images && images[1]?.url}
            width={0}
            height={0}
            sizes="100%"
            className=" absolute -bottom-[30rem] h-full group-hover:bottom-0 w-full group-hover:brightness-75 object-cover transition-all duration-700"
          />
        }
        <div className=" absolute bottom-10 group-hover:bottom-0  border-t-1  backdrop-blur-md opacity-0 group-hover:opacity-100 invisible group-hover:visible w-full transition-all duration-500">
          <div className=" flex justify-center sm:justify-between items-center flex-wrap gap-5 w-full p-5 rounded-2xl">
            <Button type={'circle'}>
              <IoBasket />
            </Button>
            <Link href={`/product/${_id}`} className="order-1 sm:order-none">
              <div className=" w-40 ">
                <Button text={'مشاهده'} isWidthFull={true} />
              </div>
            </Link>
            <Button type={'circle'} onClick={addToWishlist}>
              <IoHeart />
            </Button>
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
