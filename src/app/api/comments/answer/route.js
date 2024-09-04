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
        const { commentID, answer } = body

        if (!commentID || !answer) {
            return Response.json(
                { message: "Comment id or answer is not found !" },
                { status: 400 }
            )
        }

        await CommentModel.findOneAndUpdate(
            {_id: commentID},
            {
                $set: { answer }
            }
        )

        return Response.json({ message: "Answer saved successfully." })

    } catch (err) {
        console.log(err);
        
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}