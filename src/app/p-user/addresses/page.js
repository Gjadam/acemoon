
// Components
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import Addresses from "@/components/templates/p-user/addresses/Addresses";

// Backend
import connectToDB from "@/configs/db";
import AddressModel from "@/models/Address";
import { authUser } from "@/utils/serverHelpers";

export default async function page() {

  connectToDB()
  const user = await authUser()
  const addresses = await AddressModel.find({ user: user._id })
    .sort({ _id: -1 })
    .lean()
    
  return (
    <UserPanelLayout>
      <Addresses addresses={addresses} />
    </UserPanelLayout>
  )
}
