
import { RiAlertFill } from "react-icons/ri";

export default function Alert({text}) {
    return (
        <div className=" flex justify-center md:justify-between items-center p-5 text-center w-full  text-white bg-red-600 rounded">
            <div className=" flex items-center gap-3">
            <RiAlertFill className=" text-xl"/>
            <span>{text}</span>
            </div>
        </div>
    )
}
