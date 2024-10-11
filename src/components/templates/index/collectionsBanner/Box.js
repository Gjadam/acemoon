import Link from "next/link";

// Icons
import { GiFlowerStar } from "react-icons/gi";

export default function Box({ id, text }) {
    return (
            <div className=" relative">
                <GiFlowerStar className=' text-3xl text-white  animate-spin-slow absolute bottom-2 -left-20 transition-colors' />
                <Link href={`/collection/${id}`}>
                    <span className=' text-5xl text-white hover:text-secondary transition-colors'>{text}</span>
                </Link>
            </div>
    )
}
