
// Components
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader";
import ContactUs from "@/components/templates/p-admin/contactUs/ContactUs";

// Backend
import connectToDB from "@/configs/db";
import ContactModel from "@/models/Contact";

export default async function page() {
    connectToDB()
    const contacts = await ContactModel.find({})
        .sort({ _id: -1 })
        .lean()

    return (
        <>
            <SectionHeader title={'ارتباط با ما'} />
            <ContactUs contacts={JSON.parse(JSON.stringify(contacts))}/>
        </>
    )
}
