import Image from "next/image";
import Link from "next/link";

// Components
import ProductPrice from "../productPrice/ProductPrice";
import Button from "../button/Button";

// Icons
import { IoBasket, IoHeart } from "react-icons/io5";

export default function ProductBox({ _id, name, price, images }) {
  return (
    <div className=" flex justify-center items-center flex-col">
      <div className=" relative group flex justify-center items-center flex-col mt-8 h-120 w-96 overflow-hidden border-1 rounded-3xl transition-all">
        <Image
          alt='product'
          src={images && images[0].url}
          width={0}
          height={0}
          sizes="100%"
          className={` absolute top-0 w-full h-full ${images.length > 1 && 'group-hover:-top-[30rem]'} object-cover object-top transition-all duration-700`}
        />
        {
          images.length > 1 &&
          <Image
            alt='product'
            src={images && images[1].url}
            width={0}
            height={0}
            sizes="100%"
            className=" absolute -bottom-[30rem] h-full group-hover:bottom-0 w-full group-hover:brightness-50 object-cover object-top transition-all duration-700"
          />
        }
        <div className=" absolute bottom-48 group-hover:bottom-5  opacity-0 group-hover:opacity-100 invisible group-hover:visible w-full transition-all duration-500">
          <div className=" flex justify-between items-center px-10">
            <Button type={'circle'}>
              <IoBasket />
            </Button>
            <Link href={`/product/${_id}`}>
            <div className=" w-40">
              <Button text={'مشاهده'} isWidthFull={true} />
            </div>
            </Link>
            <Button type={'circle'}>
              <IoHeart />
            </Button>
          </div>
        </div>
      </div>
      <div className=" flex justify-center flex-col items-center p-3">
        <h1 className=" text-secondary font-bold text-2xl">{name}</h1>
        <ProductPrice price={price} />
      </div>
    </div>

  )
}
