"use client"
import Image from 'next/image';


// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Components
import Box from './Box';
import { FaArrowDown } from 'react-icons/fa6';

export default function Header({ products }) {
    return (
        <div className=" relative ">
            <div className="  container mx-auto xl:container-fluid  ">
                <div data-aos='fade-left' data-aos-delay="400" className='relative flex lg:hidden justify-center items-center bg-zinc-50 w-full h-[50rem] rounded-b-3xl overflow-hidden'>
                    <Swiper
                        direction={'horizontal'}
                        autoplay={{
                            delay: 6000
                        }}
                        speed={2000}
                        loop={true}
                        pagination={{
                            dynamicBullets: true
                        }}
                        parallax={true}
                        modules={[Pagination, Autoplay, Parallax]}
                        className="mySwiper"
                    >
                        {
                            products.map(product => (
                                <SwiperSlide>
                                    <Box key={product._id} {...product} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div data-aos='fade-down' data-aos-delay="400" className='relative hidden lg:flex justify-center items-center bg-zinc-50 w-full h-[50rem] rounded-t-3xl overflow-hidden'>
                    <Swiper
                        direction={'vertical'}
                        autoplay={{
                            delay: 6000
                        }}
                        speed={2000}
                        loop={true}
                        pagination={{
                            dynamicBullets: true
                        }}
                        parallax={true}
                        modules={[Pagination, Autoplay, Parallax]}
                        className="mySwiper"
                    >
                        {
                            products.map(product => (
                                <SwiperSlide>
                                    <Box key={product._id} {...product} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <Image
                    alt='cloud'
                    src={'/images/png/cloud.png'}
                    width={0}
                    height={0}
                    sizes='100%'
                    className=' hidden lg:block w-full absolute left-0 -bottom-5 drag-none z-10'
                />
                <Image
                    alt='logo'
                    src={'/images/png/flower1.png'}
                    width={150}
                    height={0}
                    className=' absolute left-36 top-10 drag-none -rotate-45 hidden lg:block'
                    data-aos='fade-up'
                    data-aos-delay='600'
                />
                <Image
                    alt='logo'
                    src={'/images/png/flower2.png'}
                    width={150}
                    height={0}
                    className=' absolute right-36 top-10 drag-none  rotate-45 hidden lg:block'
                    data-aos='fade-up'
                    data-aos-delay='800'
                />
            </div>
            <div className=" hidden xl:block absolute -rotate-90  -left-16 top-1/2 z-30">
                <div className=" flex items-center gap-10 text-lg">
                    <a href="https://www.instagram.com/ladyshop7191">
                        <p className=' hover:text-rose-500 transition-colors'>اینستاگرام</p>
                    </a>
                    <a href="https://rubika.ir/Ladyshop2222">
                        <p className=' hover:text-rose-500 transition-colors'>روبیکا</p>
                    </a>
                    <a href="https://eitaa.com/LadyShop7171">
                        <p className=' hover:text-rose-500 transition-colors'>ایتا</p>
                    </a>
                </div>
            </div>
            <div className=" flex xl:hidden justify-center items-center flex-col absolute left-0 right-0 -bottom-7 ">
                <a href="#category" className=' z-20 '>
                    <div className=" md:hidden p-5 rounded-full text-zinc-600 hover:text-rose-500 bg-white border-y-1  hover:border-rose-300 transition-all duration-200 cursor-pointer">
                        <FaArrowDown />
                    </div>
                </a>

            </div>
        </div>
    )
}

