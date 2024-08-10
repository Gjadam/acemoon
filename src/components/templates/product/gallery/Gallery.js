import Image from "next/image";

export default function Gallery() {
    return (
        <div data-aos='fade-left' className=" ">
            <div className=" flex flex-col gap-5 w-120">
                <Image
                    alt='product'
                    src={'/images/jpg/product1.jpg'}
                    width={500}
                    height={0}
                    className="rounded-3xl"
                />
                <div className=" flex justify-start gap-5 overflow-x-auto">
                    <div className=" min-w-28 max-w-28 h-28  rounded-3xl overflow-hidden">
                        <Image
                            alt='product'
                            src={'/images/jpg/product1.jpg'}
                            width={0}
                            height={0}
                            sizes="100%"
                            className=" w-full h-full object-cover object-top"
                        />
                    </div>
                    <div className=" min-w-28 max-w-28 h-28 rounded-3xl overflow-hidden">
                        <Image
                            alt='product'
                            src={'/images/jpg/product1.jpg'}
                            width={0}
                            height={0}
                            sizes="100%"
                            className=" w-full h-full object-cover object-top"
                        />
                    </div>
                    <div className=" min-w-28 max-w-28 h-28  rounded-3xl overflow-hidden">
                        <Image
                            alt='product'
                            src={'/images/jpg/product1.jpg'}
                            width={0}
                            height={0}
                            sizes="100%"
                            className=" w-full h-full object-cover object-top"
                        />
                    </div>
                    <div className=" min-w-28 max-w-28 h-28  rounded-3xl overflow-hidden">
                        <Image
                            alt='product'
                            src={'/images/jpg/product1.jpg'}
                            width={0}
                            height={0}
                            sizes="100%"
                            className=" w-full h-full object-cover object-top"
                        />
                    </div>
                    <div className=" min-w-28 max-w-28 h-28  rounded-3xl overflow-hidden">
                        <Image
                            alt='product'
                            src={'/images/jpg/product1.jpg'}
                            width={0}
                            height={0}
                            sizes="100%"
                            className=" w-full h-full object-cover object-top"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
