import Image from "next/image";
import Link from "next/link";
import ProductPrice from "../productPrice/ProductPrice";
import StarScore from "../starScore/StarScore";
import Button from "../button/Button";
import { IoBasket, IoHeart } from "react-icons/io5";

export default function ProductList({ _id, name, priceBeforeDiscount, price, images, shortDescription, size, color, score, collection }) {
    return (
        <div data-aos='fade-right' className=" w-full">
            <div className="  relative flex justify-between items-center flex-col md:flex-row gap-5 w-full p-5 bg-zinc-50 hover:bg-zinc-100 rounded-xl transition-colors">
                <Link href={`/product/${_id}`} className=" w-full sm:w-96">
                    <div className=" w-full sm:w-96  h-52 overflow-hidden rounded-3xl ">
                        <Image
                            alt={name}
                            src={images[0]?.url}
                            width={0}
                            height={0}
                            sizes="100%"
                            className=" w-full h-full object-cover hover:brightness-75 transition-all"
                        />
                    </div>
                </Link>
                <div className=" w-full ">
                    <div className=" flex justify-between items-start gap-5">
                        <div className=" flex flex-col gap-3">
                            <h1 className=" text-xl md:text-3xl font-bold">{name}</h1>
                            <ProductPrice price={price} priceBeforeDiscount={priceBeforeDiscount} />
                        </div>
                        <div className=" mt-1">
                            <StarScore score={score} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 pb-5">
                        <p className=" max-w-xl text-zinc-500">{shortDescription.length > 150 ? `${shortDescription.slice(0, 150)}...` : shortDescription}</p>
                        <div className="flex justify-start items-center flex-wrap gap-5">
                            {
                                size ? (
                                    <div className=" flex items-center gap-3">
                                        <span className=" text-xs text-rose-500">سایز: </span>
                                        <span className=" text-sm text-zinc-600">{size}</span>
                                    </div>
                                ) : null
                            }
                            {
                                color ? (
                                    <div className=" flex items-center gap-3">
                                        <span className=" text-xs text-rose-500">رنگ: </span>
                                        <span className=" text-sm  text-zinc-600">{color}</span>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                    {
                        collection?.name ? (
                            <div className="">
                                <div className="flex items-center gap-1">
                                    <span className=" text-xs text-rose-500">دسته بندی:</span>
                                    <Link href={`/collection/${collection._id}`}>
                                        <span className="text-sm  text-zinc-600 hover:text-rose-500 transition-colors">{collection.name}</span>
                                    </Link>
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}
