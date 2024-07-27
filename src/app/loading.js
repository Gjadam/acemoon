import Image from 'next/image'

export default function loading() {
    return (
        <div className=' w-full h-screen flex justify-center items-center '>
            <Image
                alt='logo'
                src={'/images/png/logo2.png'}
                width={150}
                height={0}
                className=' z-50 animate-pulse'
            />
        </div>
    )
}
