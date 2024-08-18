import Image from 'next/image'
import Link from 'next/link'

// Components
import Button from '@/components/modules/button/Button'
import ProductPrice from '@/components/modules/productPrice/ProductPrice'

export default function Box({ _id, images, name, price, priceBeforeDiscount, collection }) {

    return (
        <div className=' flex justify-evenly items-center flex-col lg:flex-row text-start h-full overflow-hidden'>
            <div className=" w-96 xl:w-120 h-96 xl:h-[40rem]">

                <Image
                    alt='product'
                    src={images[0].url}
                    width={0}
                    height={0}
                    sizes='100%'
                    className=' w-full h-full object-cover rounded-3xl'
                    data-swiper-parallax="-700"
                />
            </div>
            <div className=" flex flex-col gap-5 text-secondary ">
                {
                    collection ? (
                        <div data-swiper-parallax="-100" className=' flex items-center gap-1 text-4xl xl:text-6xl font-bold '>
                            <span>کالکشن</span>
                            <p className=' text-rose-500'>{collection.name}</p>
                        </div>
                    ) : null
                }
                <h1 data-swiper-parallax="-200" className=' text-3xl xl:text-4xl  '>{name}</h1>
                <div data-swiper-parallax="-150">
                    <ProductPrice price={price} priceBeforeDiscount={priceBeforeDiscount} />
                </div>
                <div data-swiper-parallax="-50" className=' z-50'>
                    <Link href={`/product/${_id}`}>
                        <Button text={"مشاهده"} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
