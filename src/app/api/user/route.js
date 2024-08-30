import connectToDB from "@/configs/db"
import UserModel from "@/models/User"

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

        await UserModel.findOneAndDelete({ _id: userID })

        return Response.json({message: "User removed successfully."})

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }

}