
// Components
import Checkout from "@/components/templates/cart/checkout/Checkout";

// Backend
import { authUser } from "@/utils/serverHelpers";
import connectToDB from "@/configs/db";
import AddressModel from "@/models/Address";

export default async function page() {

    connectToDB()
    const user = await authUser()
    const addresses = await AddressModel.find({user: user?._id})



    return (
        <>
        <Checkout user={user} addresses={JSON.parse(JSON.stringify(addresses))}/>
        </>
    )
}
