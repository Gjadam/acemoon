import Image from "next/image";
import Link from "next/link";
// Components
import Button from "../button/Button";
// Icons
import { IoIosLink } from "react-icons/io";

export default function SectionHeader({ title, linkText, route }) {
    return (
        <div className={`flex ${route ? "justify-between" : "justify-center"} flex-wrap p-5 xl:p-0 items-center w-full`}>
            <div className=" flex justify-center items-center ">
                {
                    route ? (
                        <>
                            <Image
                                alt='section-header'
                                src={'/images/png/header.png'}
                                width={40}
                                height={0}
                            />
                            <h1 className=" mr-1  text-xl xl:text-2xl text-center text-secondary font-bold">{title}</h1>
                        </>
                    ) : (
                        <>
                            <Image
                                alt='section-header'
                                src={'/images/png/flower1.png'}
                                width={60}
                                height={0}
                                className=" rotate-90"
                            />
                            <h1 className=" text-xl xl:text-2xl  text-center text-secondary font-bold">{title}</h1>
                            <Image
                                alt='section-header'
                                src={'/images/png/flower1.png'}
                                width={60}
                                height={0}
                                className=" -rotate-90"
                            />
                        </>

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
