import Link from "next/link";

// Components
import Button from "../button/Button";

// Icons
import { IoHome } from "react-icons/io5";

export default function FormHeader({ title }) {
  return (
    <div className="flex justify-between items-center flex-wrap">
      <h1 className=' text-rose-500 text-4xl'>{title}</h1>
      <div className=" lg:hidden">
        <Link href={'/'}>
          <Button type='circle' >
            <IoHome />
          </Button>
        </Link>
      </div>
    </div>

  )
}
