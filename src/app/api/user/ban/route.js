import connectToDB from "@/configs/db"
import BanModel from "@/models/Ban"
import { authAdmin } from "@/utils/serverHelpers"
export async function POST(req) {
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
        const { phone, email } = body

        if (!phone || !email) {
            return Response.json(
                { message: "Phone or email not found !" },
                { status: 404 }
            )
        }

        const banUser = await BanModel.findOne({
            $or: [{ phone }, { email }]
        })

        if (banUser) {
            return Response.json({
                message: "The email or phone exist already !!"
            }, {
                status: 422,
            })
        }

        await BanModel.create({ phone, email })

        return Response.json(
            { message: "User banned successfully." },
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
        
        const isAdmin = await authAdmin()

        if (!isAdmin) {
            return Response.json(
                { message: "This api protected and you can't access it !!"},
                { status: 401 }
            )
        }

        connectToDB()
        const body = await req.json()
        const { phone, email, banUserID } = body

        if (!banUserID) {
            return Response.json(
                { message: 'User id for ban is not defined!' },
                { status: 400 }
            )
        }

        await BanModel.findOneAndDelete({ _id: banUserID })

        return Response.json({message: "User unbanned successfully."})

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}