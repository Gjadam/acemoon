
// Components
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader";
import AddCollection from "@/components/templates/p-admin/collections/AddCollection";
import Collections from "@/components/templates/p-admin/collections/Collections";

// Backend
import connectToDB from "@/configs/db";
import CollectionModel from "@/models/Collection";

export default async function page() {

    connectToDB()
    const collections = await CollectionModel.find({})

    return (
        <AdminPanelLayout>
            <SectionHeader title={'افزودن دسته بندی جدید'} />
            <div className="flex justify-between items-start flex-col xl:flex-row gap-5 mt-5  w-full">
                <AddCollection />
                <Collections collections={JSON.parse(JSON.stringify(collections))} />

            </div>
        </AdminPanelLayout>
    )
}
