"use client"
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from "@/components/modules/button/Button";

export default function Banner() {
    return (
        <div className=" container mx-auto xl:container-fluid mb-28 mt-52">
            <div   data-aos='fade-right' className="relative flex justify-center items-center h-[50rem] w-3/5 bg-zinc-100 ">
                <div     data-aos='fade-left' data-aos-delay='300' className="absolute right-20 -top-16 overflow-hidden w-[40rem] h-full">
                    <Swiper
                        autoplay={true}
                        speed={2000}
                        loop={true}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image
                                src={"/images/jpg/banner.jpg"}
                                alt="banner"
                                width={0}
                                height={0}
                                sizes="100%"
                                className="w-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={"/images/jpg/banner.jpg"}
                                alt="banner"
                                width={0}
                                height={0}
                                sizes="100%"
                                className="w-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={"/images/jpg/banner.jpg"}
                                alt="banner"
                                width={0}
                                height={0}
                                sizes="100%"
                                className="w-full"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <Image
                        alt='logo'
                        src={'/images/png/flower1.png'}
                        width={150}
                        height={0}
                        className=' absolute -left-16 -top-16 drag-none rotate-45'

                    />
                <Image
                        alt='logo'
                        src={'/images/png/flower2.png'}
                        width={150}
                        height={0}
                        className=' absolute -right-16 -bottom-3 drag-none -rotate-12'

                    />
                <div className=" absolute -left-44">
                <div className=" relative flex justify-center items-start flex-col gap-4 ">
                    <p className=" text-rose-500">کالکشن تابستونی</p>
                    <h1 className=" text-5xl text-secondary font-bold">وقت درخشش توست</h1>
                    <p className=" max-w-96 text-zinc-600">"تازه‌ترین مدل‌های تابستانی با طراحی‌های شناخته شده و رنگ‌های روشن، همین حالا در کالکشن گرمسیری ما!"</p>
                    <Button type={'simple'} text={"دیدن دسته بندی ها"}/>
                    <div className=" absolute -left-16 -top-16 ">
                    <Image
                                src={"/images/png/diamond.png"}
                                alt="diamond"
                                width={150}
                                height={0}
                                className=" -rotate-[30deg]"
                            />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
