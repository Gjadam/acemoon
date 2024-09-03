import Image from "next/image";
import Button from "../button/Button";

// Components
import List from "./list/List";

// Backend
import connectToDB from "@/configs/db";
import CollectionModel from "@/models/Collection";
import Link from "next/link";
import { IoMdHeart } from "react-icons/io";

export default async function Footer() {

  connectToDB()
  const collections = await CollectionModel.find({})
    .limit(6)
    .sort({ _id: -1 })
    .lean()

  return (
    <div className=' bg-[#141414] text-white mt-28'>
      <div className=' container mx-auto py-20 px-5 md:px-0'>
        <div className=" flex justify-between items-start flex-wrap gap-10">
          <div className=" flex items-start flex-col gap-3">
          <Link href={'/'}>
                        <span className=" text-rose-500 text-xl font-bold">ماه آس</span>
                    </Link>
            <p className=" text-sm max-w-64">ما در ماه آس به دنبال ارائه بهترین محصولات با کیفیت و قیمت مناسب هستیم. هدف ما رضایت مشتریان و ایجاد تجربه خریدی لذت‌بخش است. با ما همراه باشید و از تخفیف‌ها و پیشنهادات ویژه بهره‌مند شوید.</p>
            <div className=" flex items-center gap-3">
              <Button type={'circle'}>
                <Image
                  alt="social"
                  src='/images/png/instagram.png'
                  width={20}
                  height={0}
                />
              </Button>
              <Button type={'circle'}>
                <Image
                  alt="social"
                  src='/images/png/rubika.png'
                  width={20}
                  height={0}
                />
              </Button>
              <Button type={'circle'}>
                <Image
                  alt="social"
                  src='/images/png/eitaa.png'
                  width={20}
                  height={0}
                />
              </Button>
            </div>
          </div>
          <List title={"دسته بندی ها"}>
            {
              collections?.map(collection => (
                <Link key={collection._id} href={`/collection/${collection._id}`}>
                  <li className=" hover:text-rose-500 transition-colors ">{collection.name}</li>
                </Link>
              ))
            }
          </List>
          <List title={"دسترسی سریع"}>
            <Link href={'/shop'}>
              <li className=" hover:text-rose-500 transition-colors ">فروشگاه</li>
            </Link>
            <Link href={'/contact-us'}>
              <li className=" hover:text-rose-500 transition-colors ">ارتباط با ما</li>
            </Link>
            <Link href={'/about-us'}>
              <li className=" hover:text-rose-500 transition-colors ">درباره ما</li>
            </Link>
          </List>
          <List title={'نماد اعتماد'}>
            <div className=" bg-zinc-100 rounded-3xl py-5 px-10">
              <Image
                alt="enamad"
                src={'/images/png/enamad.png'}
                width={100}
                height={0}
              />
            </div>
          </List>
        </div>
      </div>
      <div className=" flex justify-center items-center bg-secondary py-5">
        <span>
          <a href="https://github.com/Gjadam">
            <span className=' flex justify-center items-center gap-1 text-white hover:text-rose-500 transition-colors duration-200'> &copy; 1403 | ساخته شده با<IoMdHeart className='text-red-500' />توسط TheGjadam</span>
          </a>
        </span>
      </div>
    </div>
  )
}
