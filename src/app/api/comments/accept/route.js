import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";

export async function POST(req) {
    try {
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
                $set: { isAccept: true }
            }
        )

        return Response.json({ message: "Comment accepted successfully." })

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}