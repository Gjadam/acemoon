'use client'

// Components
import SectionHeader from '@/components/modules/sectionHeader/SectionHeader';
import ProductBox from '@/components/modules/productBox/ProductBox';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

export default function MoreProducts({ relatedProducts }) {
    return (
        <div data-aos='fade-up' className=' my-20'>
            <SectionHeader title={'محصولات مرتبط'} />
            <div>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        720: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1400: {
                            slidesPerView: 4,
                        },
                    }}
                    slidesPerView={4}
                    spaceBetween={100}
                    loop={true}
                    speed={1000}
                    navigation={true}
                    autoplay={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {
                        relatedProducts.map(relatedProduct => (
                            <SwiperSlide>

                                <ProductBox key={relatedProduct._id} {...relatedProduct} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}