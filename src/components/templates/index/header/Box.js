import Image from 'next/image'
import Link from 'next/link'

// Components
import Button from '@/components/modules/button/Button'
import ProductPrice from '@/components/modules/productPrice/ProductPrice'

// Icons
import { GiFlowerStar } from "react-icons/gi";
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Box({ _id, images, name, price, priceBeforeDiscount, collection }) {

    return (
        <div className=' flex justify-evenly items-center flex-col lg:flex-row text-start h-full overflow-hidden'>
            <div className=" w-96 xl:w-120 h-96 z-10 xl:h-[40rem] ">
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#f43f5e',
                    }}
                    spaceBetween={20}
                    speed={1000}
                    pagination={{
                        dynamicBullets: true
                    }}
                    autoplay={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        images.map(image => (
                            <SwiperSlide>
                                <Image
                                    alt='product'
                                    src={image?.url}
                                    width={0}
                                    height={0}
                                    sizes='100%'
                                    className=' w-full h-full object-cover rounded-3xl'
                                    data-swiper-parallax="-700"
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className=" relative overflow-hidden flex items-center xl:items-start flex-col gap-5 text-secondary z-20 backdrop-blur-md p-10 rounded-3xl ">
                {
                    collection ? (
                        <>
                            <div data-swiper-parallax="-100" className=' flex items-center gap-1 text-4xl xl:text-6xl font-bold '>
                                <span>کالکشن</span>
                                <p className=' text-rose-500'>{collection.name}</p>
                            </div>
                            <h1 data-swiper-parallax="-200" className=' text-3xl xl:text-4xl  '>{name}</h1>
                        </>
                    ) : (
                        <h1 data-swiper-parallax="-200" className=' text-3xl xl:text-6xl font-bold  '>{name}</h1>

                    )
                }
                <div data-swiper-parallax="-150">
                    <ProductPrice price={price} priceBeforeDiscount={priceBeforeDiscount} />
                </div>
                <div data-swiper-parallax="-50" className=' z-50'>
                    <Link href={`/product/${_id}`}>
                        <div className=" w-40">
                            <Button text={"مشاهده"} isWidthFull={true} />
                        </div>
                    </Link>
                </div>
                <div className=" absolute -left-11 -top-11 text-8xl text-rose-500 animate-spin-slow">
                    <GiFlowerStar/>
                </div>
            </div>
        </div>
    )
}
