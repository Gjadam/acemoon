// Components
import LoadingGif from '@/components/modules/LoadingGif/LoadingGif'

export default function loading() {
    return (
        <div className=' w-full h-screen  flex justify-center items-center  z-50'>
            <LoadingGif />
        </div>
    )
}
