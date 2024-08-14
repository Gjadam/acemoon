'use client'

// Components
import Box from './Box';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Categories({ collections }) {
    return (
        <div className="  container mx-auto xl:container-fluid flex justify-center items-center h-52 mt-28 overflow-hidden">
            <div className=" hidden xl:flex justify-center items-center flex-col h-full w-1/2 z-10 bg-[url('/images/jpg/category.jpg')] bg-cover bg-left bg-no-repeat rounded-l-3xl">

                <h1 className=" text-secondary xl:text-5xl text-3xl font-bold">دسته بندی ها</h1>
                <p className=' p-5 text-center'>پرطرفدارترین محصولات را در لیدی شاپ کشف کنید</p>
            </div>
            <div className="container mx-auto xl:container-fluid overflow-hidden flex justify-center items-center h-full w-full xl:w-1/2">
                <Swiper
                    effect={'coverflow'}
                    autoplay={true}
                    speed={1000}
                    loop={true}
                    freeMode={true}
                    spaceBetween={50}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 50,
                        modifier: 0.5,
                        slideShadows: false,
                    }}
                    modules={[Autoplay, EffectCoverflow]}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 5,
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
