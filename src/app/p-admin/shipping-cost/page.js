
// Components
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader";
import ShippingCost from "@/components/templates/p-admin/shippingCost/ShippingCost";

// Backend
import connectToDB from "@/configs/db";
import ShippingCostModel from "@/models/ShippingCost";

export default async function page() {

    connectToDB()
    const cost = await ShippingCostModel.findOne({})

    return (
        <AdminPanelLayout>
            <SectionHeader title={'هزینه حمل و نقل'} />
            <div className="flex justify-center items-start flex-col  gap-5 mt-5 w-full">
                <ShippingCost cost={JSON.parse(JSON.stringify(cost))} />
            </div>
        </AdminPanelLayout>
    )
}
