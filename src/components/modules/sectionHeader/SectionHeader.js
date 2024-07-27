import Image from "next/image";
import Button from "../button/Button";
import { IoIosLink } from "react-icons/io";
export default function SectionHeader() {
    return (
        <div className=" flex justify-between items-center w-full">
            <div className=" flex justify-center items-center">
                <Image
                    alt='section-header'
                    src={'/images/png/header.png'}
                    width={60}
                    height={0}
                />
                <h1 className="text-4xl  text-secondary font-bold">محصولات ما</h1>
            </div>
            <Button text={"همه محصولات"} type={"simple"} >
                <IoIosLink/>
            </Button>
        </div>
    )
}
