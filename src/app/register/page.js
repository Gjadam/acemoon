import Link from "next/link";
// Components
import LoginRegisterLayout from "@/components/layouts/LoginRegisterLayout";
import Button from "@/components/modules/button/Button";
import FormHeader from "@/components/modules/FormHeader/FormHeader";
import RegisterForm from "@/components/templates/register/RegisterForm";

// Icons
import { IoHome } from "react-icons/io5";

export const metadata = {
    title: "ماه آس | ثبت نام"
}


export default function page() {
    return (
        <LoginRegisterLayout>
            <div data-aos='fade-right' className=' w-full' >
                <div className="flex justify-between items-center flex-wrap">
                    <FormHeader title={'ثبت نام'} />
                    <div className=" lg:hidden">
                        <Link href={'/'}>
                            <Button type='circle' >
                                <IoHome />
                            </Button>
                        </Link>
                    </div>
                </div>
                <RegisterForm />
            </div>
        </LoginRegisterLayout>
    )
}
