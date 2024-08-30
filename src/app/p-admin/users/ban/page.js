
// Components
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader";
import BanUsers from "@/components/templates/p-admin/users/banUsers/BanUsers";

// Backend
import connectToDB from "@/configs/db";
import BanModel from "@/models/Ban";

export default async function page() {

  connectToDB()
  const banUsers = await BanModel.find({})
    .sort({ _id: -1 })
    .lean()

  return (
    <AdminPanelLayout>
      <SectionHeader title={'کاربران مسدود شده'} />
      <BanUsers banUsers={JSON.parse(JSON.stringify(banUsers))}/>
    </AdminPanelLayout>
  )
}
