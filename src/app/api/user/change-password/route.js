import connectToDB from "@/configs/db"
import UserModel from "@/models/User"
import { hashPassword, validatePassword, verifyPassword } from "@/utils/auth"
import { authUser } from "@/utils/serverHelpers"

export async function PUT(req) {
    try {
        connectToDB()
        const user = await authUser()
        const body = await req.json()
        const { oldPassword, newPassword } = body


        if (!user) {
            return Response.json({ message: "User not found" }, { status: 422 });
        }

        const isMatch = await verifyPassword(oldPassword, user.password);
        if (!isMatch) {
            return Response.json(
                { message: "Old password is incorrect" },
                { status: 400 }
            )
        }

        const isValidPassword = validatePassword(newPassword)

        if (!isValidPassword) {
            return Response.json(
                { message: "Password is invalid" },
                { status: 419 }
            );
        }

        const hashedPassword = await hashPassword(newPassword)

        await UserModel.findOneAndUpdate(
            { _id: user._id },
            {
                $set: {
                    password: hashedPassword
                }
            }
        )

        return Response.json(
            { message: "User password updated successfully." },
        )


    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }

}