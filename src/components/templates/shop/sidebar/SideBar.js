'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Components
import Button from '@/components/modules/button/Button'
import ContentLayout from './ContentLayout'

// Icons
import { FaBarsStaggered } from 'react-icons/fa6'
import { IoMdArrowDropleft } from "react-icons/io";

export default function SideBar({ collections, products }) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  return (
    <>
      <div className=" xl:hidden w-full flex justify-end items-center px-5">
        <Button type={'circle'} onClick={() => setIsOpenSidebar(true)}>
          <FaBarsStaggered />
        </Button>
      </div>
      <div className={`${isOpenSidebar && 'fixed left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.5)] xl:bg-inherit xl:relative transition-all ease-in-out duration-500'} z-50 `} onClick={() => setIsOpenSidebar(false)}>
        <div className={` fixed ${isOpenSidebar ? 'left-0' : '-left-96'} -left-96 top-0 bottom-0   bg-white xl:bg-inherit  w-60 xl:w-72 p-5 rounded-r-2xl xl:rounded-none  xl:sticky xl:top-48 transition-all ease-in-out duration-500`} onClick={(e) => e.stopPropagation()}>
          <div className=" flex flex-col gap-10 translate-y-[26px]">
            <ContentLayout title={'دسته بندی ها'}>
              <div className=" max-h-96 py-1 overflow-y-auto flex flex-col gap-3" >
                {
                  collections.map(collection => (
                    <Link key={collection._id} href={`/collection/${collection._id}`}>
                      <div className=" flex items-center gap-1 hover:text-rose-500 transition-colors">
                        <IoMdArrowDropleft className=' text-rose-500' />
                        <span className=' text-sm'>{collection.name}</span>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </ContentLayout>
            <ContentLayout title={'محصولات اخیر'} isNewSection={true}>
              <div className=" flex flex-col gap-5" >
                {
                  products.map(product => (
                    <Link key={product._id} href={`/product/${product._id}`}>
                      <div className=" flex  items-start gap-4 hover:bg-zinc-50 transition-colors">
                        <div className=" w-20 h-16 ">
                          <Image
                            alt={product.name}
                            src={product.images[0]?.url}
                            width={0}
                            height={0}
                            sizes='100&'
                            className=' w-full h-full object-cover'
                          />
                        </div>
                        <div className=" flex flex-col ">
                          <span className=' font-bold'>{product.name}</span>
                          <span className=" text-xs text-rose-600 brightness-75  ">
                            {product.price.toLocaleString()}
                            <span className='  mr-1 text-rose-400 '>تومان</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </ContentLayout>
            <ContentLayout title={'ما را دنبال کنید'}>
              <div className=" flex items-center gap-3 ">
                <a href="https://eitaa.com/LadyShop7171">
                  <Image
                    alt="social"
                    src={'/images/png/eitaa.png'}
                    width={24}
                    height={0}
                  />
                </a>
                <a href="https://www.instagram.com/ladyshop7191">
                  <Image
                    alt="social"
                    src={'/images/png/instagram.png'}
                    width={30}
                    height={0}
                  />
                </a>
                <a href="https://rubika.ir/Ladyshop2222">
                  <Image
                    alt="social"
                    src={'/images/png/rubika.png'}
                    width={30}
                    height={0}
                  />
                </a>
              </div>
            </ContentLayout>
          </div>
        </div>
      </div>
    </>
  )
}
