import Image from "next/image";
import Link from "next/link";
// Components
import Button from "../button/Button";
// Icons
import { IoIosLink } from "react-icons/io";

export default function SectionHeader({ title, linkText, route }) {
    return (
        <div className={`flex ${route ? "justify-between" : "justify-center"} p-5 xl:p-0 items-center w-full`}>
            <div className=" flex justify-center items-center">
                <Image
                    alt='section-header'
                    src={'/images/png/header.png'}
                    width={50}
                    height={0}
                />
                <h1 className="text-3xl text-center text-secondary font-bold">{title}</h1>
                {
                    route ? null : (
                        <Image
                            alt='section-header'
                            src={'/images/png/header.png'}
                            width={50}
                            height={0}
                            className=" rotate-180"
                        />

                    )

                }
            </div>
            {
                route &&
                <Link href={route}>
                    <Button text={linkText} type={"simple"} >
                        <IoIosLink />
                    </Button>
                </Link>
            }
        </div>
    )
}
