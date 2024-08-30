
// Components
import MainLayout from "@/components/layouts/MainLayout";
import CategoryHeader from "@/components/modules/categoryHeader/CategoryHeader";
import ContactUs from "@/components/templates/contactUs/ContactUs";

export default function page() {
  return (
    <MainLayout>
        <CategoryHeader title={'ارتباط با ما'}/>
        <ContactUs />
    </MainLayout>
  )
}
