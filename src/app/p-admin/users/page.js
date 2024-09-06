
// Components
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader";
import Users from "@/components/templates/p-admin/users/Users";

// Backend
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { authUser } from "@/utils/serverHelpers";

export default async function page() {

  connectToDB()
  const user = await authUser()
  const users = await UserModel.find({ _id: { $ne: user._id } })
    .sort({ _id: -1 })
    .lean()

  return (
    <AdminPanelLayout>
      <SectionHeader title={'کاربران'} linkText={'کاربران مسدود شده'} route={'/p-admin/users/ban'} />
      <Users users={JSON.parse(JSON.stringify(users))} />
    </AdminPanelLayout>
  )
}
