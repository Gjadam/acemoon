import Image from 'next/image'

// Components
import Button from '@/components/modules/button/Button'

export default function Box() {
    return (
        <div className=' flex justify-evenly items-center text-start h-full overflow-hidden'>
            <Image
                alt='product'
                src={'/images/jpg/product1.jpg'}
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
                <h1 data-swiper-parallax="-200" className=' text-4xl  '>نام محصول</h1>
                <p data-swiper-parallax="-150" className=' max-w-[40rem]'>150,000 تومان</p>
                <div data-swiper-parallax="-50" className=' z-50'>
                    <Button text={"مشاهده"} />
                </div>
            </div>
        </div>
    )
}
