// Components
import LoginRegisterLayout from "@/components/layouts/LoginRegisterLayout";
import OtpLoginForm from "@/components/templates/login/OtpLoginForm";

export const metadata = {
    title: "ماه آس | ورود"
}

export default function page() {
    return (
        <LoginRegisterLayout>
            <div data-aos='fade-right' className=' w-full' >
                <OtpLoginForm />
            </div>
        </LoginRegisterLayout>
    )
}
