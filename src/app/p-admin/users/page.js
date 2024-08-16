
// Components
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader";
import Users from "@/components/templates/p-admin/users/Users";

// Backend
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";

export default async function page() {

  connectToDB()
  const users = await UserModel.find({})
    .sort({ _id: -1 })
    .lean()

  return (
    <AdminPanelLayout>
      <SectionHeader title={'کاربران'} />
      <Users users={JSON.parse(JSON.stringify(users))}/>
    </AdminPanelLayout>
  )
}
