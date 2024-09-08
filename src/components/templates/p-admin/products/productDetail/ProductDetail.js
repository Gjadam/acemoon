'use client'
import Image from "next/image";

// Components
import KeyValue from "./keyValue";
import ProductPrice from "@/components/modules/productPrice/ProductPrice";
import StarScore from "@/components/modules/starScore/StarScore";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

export default function ProductDetail({ isShowProductDetail, setIsShowProductDetail, name, images, score, price, priceBeforeDiscount, createdAt, updatedAt, collection, size, color, shortDescription, longDescription }) {
    return (
        <div className={` container-fluid fixed left-0 top-0 right-0 bottom-0 z-40 flex justify-center items-center bg-[rgba(0,0,0,0.6)] ${isShowProductDetail ? ' visible opacity-100' : ' invisible opacity-0'} transition-all duration-300`} onClick={() => setIsShowProductDetail(false)}>
            <div className=" flex justify-center items-start flex-col-reverse md:flex-row gap-10 md:w-[50rem] min-w-72  p-5 bg-white rounded-xl z-50" onClick={(e) => e.stopPropagation()}>
                <div className=" flex flex-col gap-5 h-48 md:h-full overflow-y-auto md:overflow-hidden w-full md:w-1/2">
                    <div className=" flex justify-between items-center">
                        <h1 className=" font-bold text-xl">{name}</h1>
                        <StarScore score={score} />
                    </div>
                    <div className=" flex flex-col gap-2 border-t-1 pt-3">
                        {
                            priceBeforeDiscount ? (
                                <div className=" flex justify-between items-center">
                                    <p>قیمت قبل از تخفیف: </p>
                                    <ProductPrice price={priceBeforeDiscount} />
                                </div>
                            ) : null
                        }
                        <div className=" flex justify-between items-center">
                            <p>قیمت اصلی: </p>
                            <ProductPrice price={price} />
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2 border-t-1 pt-3">
                        <KeyValue title={'توضیحات کوتاه'} text={shortDescription} />
                        <KeyValue title={'توضیحات بلند'} text={longDescription} />
                    </div>
                    <div className=" flex flex-col gap-2 border-t-1 pt-3">
                        <KeyValue title={'کالکشن'} text={collection && collection.name} />
                        <KeyValue title={'رنگ'} text={color} />
                        <KeyValue title={'سایز'} text={size} />
                    </div>
                    <div className=" flex flex-col gap-2 border-t-1 pt-3">
                        <KeyValue title={'تاریخ ایجاد'} date={createdAt} />
                        <KeyValue title={'تاریخ آپدیت'} date={updatedAt} />
                    </div>
                </div>
                <div className=" justify-center items-center  w-full md:w-1/2 overflow-hidden h-full">
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#f43f5e',
                        }}
                        spaceBetween={20}
                        loop={true}
                        speed={1000}
                        pagination={{
                            dynamicBullets: true
                        }}
                        autoplay={true}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {
                            images.map(image => (
                                <SwiperSlide>
                                    <Image
                                        alt="product"
                                        src={image?.url}
                                        width={0}
                                        height={0}
                                        sizes="100%"
                                        className=" w-96 md:w-full object-cover border-1 rounded-xl"
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
            </div>
        </div>
    )
}
