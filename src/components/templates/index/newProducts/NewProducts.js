'use client'
// Components
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader";

import Box from "./Box";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

export default function NewProducts({ sortedProducts }) {
  return (
    <div className="bg-[url('/images/jpg/product.jpg')] bg-cover bg-no-repeat">
      <div className=" container mx-auto mt-28 ">
        <SectionHeader title={"جدیدترین های ماه آس"} route={"/shop"} linkText={"همه محصولات"} />
        <div className=" overflow-x-hidden p-5 sm:p-0">
          <Swiper
            spaceBetween={50}
            loop={true}
            speed={1000}
            autoplay={true}
            pagination={{
              dynamicBullets: true
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {
              sortedProducts.map(product => (
                <SwiperSlide>
                  <Box key={product._id} {...product} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}
