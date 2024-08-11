"use client"
// Components
import ProductBox from '@/components/modules/productBox/ProductBox'
import SectionHeader from '@/components/modules/sectionHeader/SectionHeader'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


export default function AllProducts({ products }) {
    return (
        <div className=' flex justify-center items-center mt-28 bg-[url("/images/jpg/products.jpg")] bg-cover bg-center bg-no-repeat'>
            <div className="container mx-auto xl:container-fluid">
                <SectionHeader title={"محصولات ما"} route={"/"} linkText={"همه محصولات"} />
                <div className='container mx-auto xl:container-fluid overflow-hidden flex justify-center items-center my-10'>
                    <Swiper
                        autoplay={true}
                        speed={1000}
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
                        className="mySwiper">
                        {
                            products.map(product => (
                                <SwiperSlide>
                                    <ProductBox key={product._id} {...product} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>

        </div>
    )
}
