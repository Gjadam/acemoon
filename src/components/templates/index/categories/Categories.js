'use client'

// Components
import Box from './Box';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Categories() {
    return (
        <div className=" container mx-auto xl:container-fluid flex justify-center items-center h-52 my-28 overflow-hidden">
            <div className=" flex justify-center items-center h-full w-1/2 z-10 bg-[url('/images/jpg/category.jpg')] bg-cover bg-right bg-no-repeat rounded-l-3xl">
                <h1 className=" text-secondary text-5xl font-bold">دسته بندی ها</h1>
            </div>
            <div className="container mx-auto xl:container-fluid overflow-hidden flex justify-center items-center h-full w-1/2">
                <Swiper
                    autoplay={true}
                    speed={1000}
                    loop={true}
                    freeMode={true}
                    modules={[Autoplay]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Box />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
