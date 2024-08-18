'use client'

// Components
import Box from './Box';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function Categories({ collections }) {
    return (
        <div className="xl:container-fluid flex justify-center items-center h-auto xl:h-52 mt-28 overflow-hidden p-5 xl:p-0 bg-rose-500 xl:bg-inherit">
            <div className=" flex justify-center items-center flex-col h-full w-1/2 text-center z-10 text-white xl:text-secondary  xl:bg-[url('/images/jpg/category.jpg')] bg-cover bg-left bg-no-repeat xl:rounded-l-3xl">
                <Image
                    alt='logo'
                    src={'/images/png/logo2.png'}
                    width={100}
                    height={0}
                />
                <h1 className=" xl:text-5xl text-3xl font-bold">دسته بندی ها</h1>
                <p className=' hidden xl:block p-5 text-center'>پرطرفدارترین محصولات را در ماه آس کشف کنید</p>
            </div>
            <div className="container mx-auto xl:container-fluid overflow-hidden flex justify-center items-center h-full w-full xl:w-1/2  xl:bg-inherit ">
                <Swiper
                    autoplay={true}
                    speed={1000}
                    loop={true}
                    freeMode={true}
                    spaceBetween={50}
                    modules={[Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 150
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 150
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        collections.map(collection => (

                            <SwiperSlide>
                                <Box key={collection._id} {...collection} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    )
}
