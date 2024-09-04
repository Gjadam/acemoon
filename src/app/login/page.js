import Link from "next/link";

// Components
import LoginRegisterLayout from "@/components/layouts/LoginRegisterLayout";
import Button from "@/components/modules/button/Button";
import FormHeader from "@/components/modules/FormHeader/FormHeader";
import LoginForm from "@/components/templates/login/LoginForm";

// Icons
import { IoHome } from "react-icons/io5";

export const metadata = {
    title: "ماه آس | ورود"
}

export default function page() {
    return (
        <LoginRegisterLayout>
            <div data-aos='fade-right' className=' w-full' >
                <div className="flex justify-between items-center flex-wrap">
                    <FormHeader title={'ورود'} />
                    <div className=" lg:hidden">
                        <Link href={'/'}>
                            <Button type='circle' >
                                <IoHome />
                            </Button>
                        </Link>
                    </div>
                </div>
                <LoginForm />
            </div>
        </LoginRegisterLayout>
    )
}
