import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";
import { authAdmin } from "@/utils/serverHelpers";

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
        const { commentID } = body

        if (!commentID) {
            return Response.json(
                { message: "Comment id not found !" },
                { status: 400 }
            )
        }

        await CommentModel.findOneAndUpdate(
            {_id: commentID},
            {
                $set: { isAccept: false }
            }
        )

        return Response.json({ message: "Comment rejected successfully." })

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}