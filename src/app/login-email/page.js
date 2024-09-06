
// Components
import LoginRegisterLayout from "@/components/layouts/LoginRegisterLayout";
import FormHeader from "@/components/modules/FormHeader/FormHeader";
import EmailLoginForm from "@/components/templates/login/EmailLoginForm";

export const metadata = {
    title: "ماه آس | ورود"
}

export default function page() {
    return (
        <LoginRegisterLayout>
            <div data-aos='fade-right' className=' w-full' >
                <FormHeader title={'ورود با ایمیل'} />
                <EmailLoginForm />
            </div>
        </LoginRegisterLayout>
    )
}
