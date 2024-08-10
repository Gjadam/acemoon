import Image from "next/image";
import Button from "../button/Button";
import { IoIosLink } from "react-icons/io";
export default function SectionHeader({ title, linkText, route }) {
    return (
        <div className={`flex ${route ? "justify-between" : "justify-center"} items-center w-full`}>
            <div className=" flex justify-center items-center">
                <Image
                    alt='section-header'
                    src={'/images/png/header.png'}
                    width={60}
                    height={0}
                />
                <h1 className="text-4xl  text-secondary font-bold">{title}</h1>
                <Image
                    alt='section-header'
                    src={'/images/png/header.png'}
                    width={60}
                    height={0}
                     className=" rotate-180"
                />
            </div>
            {
                route &&
                <Button text={linkText} type={"simple"} >
                    <IoIosLink />
                </Button>
            }
        </div>
    )
}
