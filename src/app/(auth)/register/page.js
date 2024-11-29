// Components
import RegisterForm from "@/components/templates/register/RegisterForm";

export const metadata = {
    title: "ماه آس | ثبت نام"
}

export default function page() {
    return (
            <div data-aos='fade-right' className=' w-full' >
                <RegisterForm />
            </div>
    )
}
