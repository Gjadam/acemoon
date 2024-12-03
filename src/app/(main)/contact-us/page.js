
// Components
import CategoryHeader from "@/components/modules/categoryHeader/CategoryHeader";
import ContactUs from "@/components/templates/contactUs/ContactUs";

export const metadata = {
  title: "ماه آس | ارتباط با ما",
  description: "برای همکاری و یا ثبت پیشنهادات و انتقادات میتونید با ما در ارتباط باشید."
}

export default function page() {
  return (
    <>
        <CategoryHeader title={'ارتباط با ما'}/>
        <ContactUs />
    </>
  )
}
