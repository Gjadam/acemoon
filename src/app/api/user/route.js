import connectToDB from "@/configs/db"
import UserModel from "@/models/User"
import TicketModel from "@/models/Ticket"
import { authUser } from "@/utils/serverHelpers"

export async function PUT(req) {
    try {
        connectToDB()
        const user = await authUser()
        const body = await req.json()
        const { name, email, phone } = body

        if (!name || !email || !phone) {
            return Response.json(
                { message: "Name or email or phone number not found !" },
                { status: 400 }
            )
        }

        await UserModel.findOneAndUpdate(
            { _id: user._id },
            {
                $set: {
                    name,
                    email,
                    phone
                }
            }
        )

        return Response.json(
            { message: "User updated successfully." },
        )

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}

export async function DELETE(req) {
    try {
        connectToDB()
        const body = await req.json()
        const { userID } = body
        if (!userID) {
            return Response.json(
                { message: "User id is not defined!" },
                { status: 400 }
            )
        }

        await TicketModel.deleteMany({ user: userID })
        await UserModel.findOneAndDelete({ _id: userID })

        return Response.json({ message: "User removed successfully." })

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }

}