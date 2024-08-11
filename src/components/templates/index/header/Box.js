import Image from 'next/image'
import Link from 'next/link'

// Components
import Button from '@/components/modules/button/Button'
import ProductPrice from '@/components/modules/productPrice/ProductPrice'

export default function Box({ _id, images, name, price }) {
    return (
        <div className=' flex justify-evenly items-center text-start h-full overflow-hidden'>
            <Image
                alt='product'
                src={images[0].fileUrl}
                width={500}
                height={0}
                className=' rounded-3xl'
                data-swiper-parallax="-700"
            />
            <div className=" flex flex-col gap-5 text-secondary ">
                <h1 data-swiper-parallax="-100" className=' text-6xl font-bold '>
                    کالکشن
                    <span className=' text-rose-500'> تابستونی</span>
                </h1>
                <h1 data-swiper-parallax="-200" className=' text-4xl  '>{name}</h1>
                <div data-swiper-parallax="-150">
                <ProductPrice price={price}/>
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
