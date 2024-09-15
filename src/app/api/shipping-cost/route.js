
import connectToDB from "@/configs/db"
import ShippingCostModel from "@/models/ShippingCost"
import { authAdmin } from "@/utils/serverHelpers"

export async function PUT(req) {
    try {

        const isAdmin = await authAdmin()

        if (!isAdmin) {
            return Response.json(
                { message: "This api protected and you can't access it !!"},
                { status: 401 }
            )
        }

        connectToDB()
        const reqBody = await req.json()
        const { price, costID } = reqBody

        if (!price) {
            return Response.json(
                { message: "Price is not defined!" },
                { status: 400 }
            )
        }

            await ShippingCostModel.findOneAndUpdate(
                {_id: costID},
                {
                    $set: {
                        price
                    }
                }
            )

            return Response.json({ message: "Shipping cost updated successfully." })


    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}
