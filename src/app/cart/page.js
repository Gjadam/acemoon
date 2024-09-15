
// Components
import Cart from "@/components/templates/cart/Cart";

// Backend
import connectToDB from "@/configs/db";
import ShippingCostModel from "@/models/ShippingCost";

export default async function page() {

  connectToDB()
  const shippingCost = await ShippingCostModel.findOne({})
  
  return (
    <Cart shippingCost={JSON.parse(JSON.stringify(shippingCost))}/>
  )
}
