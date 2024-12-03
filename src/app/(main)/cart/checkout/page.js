
// Components
import Checkout from "@/components/templates/cart/checkout/Checkout";

// Backend
import { authUser } from "@/utils/serverHelpers";
import connectToDB from "@/configs/db";
import AddressModel from "@/models/Address";
import ShippingCostModel from "@/models/ShippingCost";

export default async function page() {

    connectToDB()
    const user = await authUser()
    const addresses = await AddressModel.find({user: user?._id})

    const shippingCost = await ShippingCostModel.findOne({})
    


    return (
        <>
        <Checkout user={user} shippingCost={JSON.parse(JSON.stringify(shippingCost))} addresses={JSON.parse(JSON.stringify(addresses))}/>
        </>
    )
}
