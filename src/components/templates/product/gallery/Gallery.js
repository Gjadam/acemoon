'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';


export default function Gallery({ images }) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 200);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div data-aos='fade-left' className=" ">
            <div className={` flex justify-center items-center flex-col gap-5 w-80 md:w-120 ${images.length > 1 && loading ? " h-96" : null} overflow-hidden`}>
                {
                    images.length === 1 ? (
                        <Image
                            alt='product'
                            src={images[0]?.url}
                            width={500}
                            height={0}
                            className="rounded-3xl"
                        />
                    ) : (
                        loading ? (
                            <div className=" w-full h-full bg-zinc-50 rounded-3xl animate-pulse"></div>
                        ) : (
                            <>
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#f43f5e',
                                        '--swiper-pagination-color': '#f43f5e',
                                    }}
                                    slidesPerView={1}
                                    speed={1000}
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    {
                                        images.map(image => (
                                            <SwiperSlide>
                                                <Image
                                                    alt={image?.url}
                                                    src={image?.url}
                                                    width={500}
                                                    height={0}
                                                    className=" rounded-3xl"
                                                />
                                            </SwiperSlide>
                                        ))
                                    }

                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    speed={1000}
                                    autoplay={true}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                                    className="mySwiper"
                                >
                                    {
                                        images.map(image => (
                                            <SwiperSlide>
                                                <Image
                                                    alt='product'
                                                    src={image?.url}
                                                    width={400}
                                                    height={0}
                                                    className=" rounded-xl md:rounded-3xl cursor-pointer transition-all"
                                                />
                                            </SwiperSlide>
                                        ))
                                    }
                                    <SwiperSlide>
                                    </SwiperSlide>
                                </Swiper>
                            </>
                        )
                    )
                }
            </div>
        </div>
    )
}
