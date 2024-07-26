import Button from '@/components/modules/button/Button'
import Image from 'next/image'

export default function Box() {
    return (
        <div className=' flex justify-evenly items-center text-start h-full overflow-hidden'>
            <Image
                alt='product'
                src={'/images/jpg/product2.jpg'}
                width={500}
                height={0}
                className=' rounded-3xl'
                data-swiper-parallax="-700"
            />
            <div className=" flex flex-col gap-5 text-secondary ">
                <h1  data-swiper-parallax="-100" className=' text-6xl font-bold '>کالکشن تابستونی</h1>
                <h1 data-swiper-parallax="-200" className=' text-4xl  '>نام محصول</h1>
                <p data-swiper-parallax="-150"  className=' max-w-[40rem]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد...</p>
                <div data-swiper-parallax="-50" className=' z-50'>
                    <Button text={"مشاهده محصول"}  />
                </div>
            </div>
        </div>
    )
}
