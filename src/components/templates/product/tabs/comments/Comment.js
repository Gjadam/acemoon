import Image from "next/image";

// Components
import StarScore from "@/components/modules/starScore/StarScore";

// Icons
import { PiArrowBendDownLeft } from "react-icons/pi";

export default function Comment({ username, body, score, date, answer }) {
  return (
    <div className="border-b-1 pb-14">
    <div className=" flex items-start gap-5 ">
        <Image
            src={'/images/png/user-icon.png'}
            alt="user icon"
            width={70}
            height={0}
            className=" rounded-full"
        />
        <div className=" flex flex-col gap-2 w-full">
            <div className=" flex justify-between items-start w-full">
                <div className=" flex flex-col">
                    <span className=" text-xl">{username}</span>
                    <span className=" text-sm text-rose-500">
                        {new Date(date).toLocaleDateString('fa-IR')}
                    </span>
                </div>
                <div className=" flex justify-center items-center">
                    <StarScore score={score} />
                </div>
            </div>
            <p className=" text-zinc-600">{body}</p>
        </div>
    </div>
    {
        answer && 
    <div className=" flex items-start gap-5 mt-7 mr-8">
        <PiArrowBendDownLeft className=' text-4xl text-zinc-500' />
        <div className=" flex items-start  gap-5 w-full bg-zinc-100 px-5 py-10  rounded-s-3xl rounded-tl-3xl">
            <Image
                src={'/images/png/user-icon.png'}
                alt="user icon"
                width={50}
                height={0}
                className=" rounded-full"
            />
            <div className=" flex justify-center items-start flex-col w-full">
                <span className="  text-rose-500">ادمین</span>
                <p className=" text-secondary">{answer}</p>
            </div>
        </div>
    </div>
    }
</div>
  )
}
