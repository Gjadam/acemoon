import connectToDB from "@/configs/db"
import UserModel from "@/models/User"
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
        const body = await req.json()
        const { userID } = body
        if (!userID) {
            return Response.json(
                { message: "User id is not defined!" },
                { status: 400 }
            )
        }
        const user = await UserModel.findOne({ _id: userID }).lean()
        await UserModel.findOneAndUpdate(
            { _id: userID },
            {
                $set: {
                    role: user.role === "USER" ? "ADMIN" : "USER"
                }
            }
        )

        return Response.json({ message: "User role updated successfully." },)

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }

}