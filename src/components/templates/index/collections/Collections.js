'use client'

// Components
import Box from './Box';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


// Icons
import { BsCollection } from "react-icons/bs";

export default function Categories({ collections }) {
    return (
        <div id='category' className=" flex justify-center items-center gap-10 bg-rose-500  py-10 pr-5 mt-28">
            <div data-aos='fade-left' className=" flex justify-center items-center flex-col h-full  w-96 text-center z-10 text-white ">
                <BsCollection className=' text-4xl text-white' />
                <h1 className=" xl:text-4xl text-3xl font-bold">دسته بندی ها</h1>
                <p className='  text-center'>پرطرفدارترین محصولات را در ماه آس کشف کنید</p>
            </div>
            <div className=" p-5 bg-zinc-50 w-full h-full rounded-r-3xl overflow-hidden">
             <Swiper
                    autoplay={true}
                    speed={1000}
                    loop={true}
                    freeMode={true}
                    modules={[Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 150
                        },
                        1024: {
                            slidesPerView: 7,
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
