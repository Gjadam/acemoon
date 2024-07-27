"use client"
import Image from 'next/image';


// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Components
import Box from './Box';

export default function Header() {
    return (
        <div className="  container mx-auto xl:container-fluid  ">
            <div className='relative flex justify-center items-center bg-zinc-100 w-full h-[50rem] rounded-t-3xl overflow-hidden'>
                <Swiper
                    direction={'vertical'}
                    autoplay={true}
                    speed={2000}
                    loop={true}
                    pagination={{
                        dynamicBullets: true
                    }}
                    navigation={true}
                    parallax={true}
                    modules={[Pagination, Autoplay, Parallax, Navigation]}
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
                </Swiper>
                <Image
                    alt='cloud'
                    src={'/images/png/cloud.png'}
                    width={0}
                    height={0}
                    sizes='100%'
                    className=' w-full absolute left-0 -bottom-5 drag-none z-10'
                />
                <Image
                    alt='logo'
                    src={'/images/png/logo2.png'}
                    width={150}
                    height={0}
                    className=' absolute left-5 bottom-10 drag-none z-20'
                />
                <Image
                    alt='logo'
                    src={'/images/png/flower1.png'}
                    width={150}
                    height={0}
                    className=' absolute left-36 top-10 drag-none -rotate-45'
                />
                <Image
                    alt='logo'
                    src={'/images/png/flower2.png'}
                    width={150}
                    height={0}
                    className=' absolute right-36 top-10 drag-none  rotate-45'
                />
            </div>
        </div>
    )
}

