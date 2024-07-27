"use client"
// Components
import ProductBox from '@/components/modules/productBox/ProductBox'
import SectionHeader from '@/components/modules/sectionHeader/SectionHeader'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


export default function AllProducts() {
    return (
        <div className=' flex justify-center items-center my-28 bg-[url("/images/jpg/products.jpg")] bg-cover bg-center bg-no-repeat'>
            <div className="container mx-auto xl:container-fluid">
                <SectionHeader />
                <div className='container mx-auto xl:container-fluid overflow-hidden flex justify-center items-center my-10'>
                    <Swiper
                        navigation={true}
                        autoplay={true}
                        speed={1000}
                        modules={[Navigation, Autoplay]}
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
                        className="mySwiper">
                        <SwiperSlide>
                            <ProductBox />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>
    )
}
