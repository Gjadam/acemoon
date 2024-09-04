import Image from "next/image";

export default function Box({ imageUrl, socialImage, socialLink }) {
    return (
        <div data-aos='zoom' className=" grow group flex justify-center items-center  relative w-64 h-64 md:rounded-3xl overflow-hidden ">
            <Image
                alt="background"
                src={imageUrl}
                width={0}
                height={0}
                sizes="100%"
                className=" group-hover:brightness-50 w-full h-full object-cover transition-all duration-500"
            />
            <a href={socialLink} className=" absolute hover:bg-zinc-100 border-1 rounded-full p-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                    <Image
                        alt="social"
                        src={socialImage}
                        width={40}
                        height={0}
                        className=" grayscale group-hover:grayscale-0 translate-y-20 group-hover:translate-y-0 transition-all duration-500 "
                    />
            </a>
        </div>
    )
}
