import connectToDB from "@/configs/db"
import OtpModel from "@/models/Otp"
import UserModel from "@/models/User"
import { verifyPassword } from "@/utils/auth"

export async function POST(req) {
    try {
        connectToDB()
        const body = await req.json()
        const { phone, password } = body

        if (!phone) {
            return Response.json(
                {message: "Phone number not found !"},
                {status: 404}
            )
        }

        const now = new Date()
        const expTime = now.getTime() + 300_000

        const code = Math.floor(Math.random() * 99999)

        await OtpModel.create({ phone, code, expTime })

        const user = await UserModel.findOne({ phone })

        if(user) { 
            const isCorrectPasswordWithHash = await verifyPassword(password, user.password);
    
            if (!isCorrectPasswordWithHash) {
                return Response.json(
                    { message: "Phone or password is not correct" },
                    { status: 401 }
                );
            }

            return Response.json(
                { code: code },
                { status: 201 }
            )
        } else {
            return Response.json({
                message: "User not defined !!"
            }, {
                status: 400,
            })
        }

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 },
        )
    }
}