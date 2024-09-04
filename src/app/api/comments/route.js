import connectToDB from "@/configs/db"
import CommentModel from "@/models/Comment"
import ProductModel from "@/models/Product"
import { authAdmin } from "@/utils/serverHelpers"

export async function POST(req) {

    try {

        connectToDB()
        const reqBody = await req.json()

        const {
            username,
            email,
            body,
            score,
            productID,
        } = reqBody

        if (!username || !email || !body) {
            return Response.json(
                { message: "Username or email or body not found !" },
                { status: 400 }
            )
        }

        const comment = await CommentModel.create({
            username,
            email,
            body,
            score,
            productID,
        })

        await ProductModel.findOneAndUpdate({
            _id: productID
        }, {
            $push: {
                comments: comment._id
            }
        })

    
        return Response.json(
            { message: "Comment created successfully." },
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
        const isAdmin = await authAdmin()

        if (!isAdmin) {
            return Response.json(
                { message: "This api protected and you can't access it !!"},
                { status: 401 }
            )
        }

        connectToDB()
        const body = await req.json()
        const {
            commentID
        } = body
        console.log(body);
        
        if (!commentID) {
            return Response.json(
                { message: "Comment id is not defined !" },
                { status: 400 }
            )
        }


        await CommentModel.findOneAndDelete({_id: commentID})

        return Response.json(
            { message: "Comment removed successfully." },
            { status: 200 }
        )

    } catch(err) {
        return Response.json(
            {message: err},
            {status: 500}
        )
    }
}

