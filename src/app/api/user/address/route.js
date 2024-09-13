import connectToDB from "@/configs/db"
import AddressModel from "@/models/Address"
import { authUser } from "@/utils/serverHelpers"

export async function POST(req) {
    try {
        connectToDB()
        const user = await authUser()
        const body = await req.json()
        const { text } = body

        if (!text || !user) {
            return Response.json(
                { message: "Address or user is not defined!" },
                { status: 400 }
            )
        }

        await AddressModel.create({ text, user: user._id })

        return Response.json(
            { message: "Address created successfully." },
            { status: 201 }
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
        const { addressID } = body

        if (!addressID) {
            return Response.json(
                { message: "Address id is not defined!" },
                { status: 400 }
            )
        }

        await AddressModel.findOneAndDelete({ _id: addressID })

        return Response.json({ message: "Address removed successfully." })

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}