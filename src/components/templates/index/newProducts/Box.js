import Image from "next/image";
import Link from "next/link";

// Components
import StarScore from "@/components/modules/starScore/StarScore";
import ProductPrice from "@/components/modules/productPrice/ProductPrice";
import Button from "@/components/modules/button/Button";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Box({ _id, images, name, price, score, priceBeforeDiscount, shortDescription }) {
    return (
        <div className=" relative flex justify-between items-center flex-col md:flex-row gap-5 my-10">
            <div className="w-full h-full">

                <Link href={`/product/${_id}`}>
                    <div className="overflow-hidden rounded-3xl w-full h-[40rem]">
                        <Swiper
                            speed={1000}
                            autoplay={true}
                            pagination={{
                                dynamicBullets: true
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            {
                                images.map(image => (
                                    <SwiperSlide>
                                        <Image
                                        key={image?.url}
                                            alt="product"
                                            src={image?.url}
                                            width={0}
                                            height={0}
                                            sizes="100%"
                                            className=" w-full h-full object-cover"
                                        />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>

                </Link>
            </div>

            <div className={` ${images.length > 1 ? ' sm:absolute sm:left-0 sm:bottom-0 sm:max-w-96  sm:px-10 sm:backdrop-blur-md sm:z-10' : ' relative'} flex justify-center items-center flex-col gap-5 h-full w-full text-center`}>
                <div className="">
                    <span className=" text-white bg-red-500 px-2 py-0 text-xs rounded-xl animate-pulse">جدید</span>
                    <h1 className=" text-4xl font-bold">{name}</h1>
                </div>
                <p className=" text-zinc-500 max-w-96">{shortDescription}</p>
                <StarScore score={score} />
                <ProductPrice priceBeforeDiscount={priceBeforeDiscount} price={price} />
                <Button text={'افزودن به سبد خرید'} />
            </div>
        </div>
    )
}
