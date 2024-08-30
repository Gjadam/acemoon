import connectToDB from "@/configs/db"
import WishlistModel from "@/models/Wishlist"
import { authUser } from "@/utils/serverHelpers"

export async function POST(req) {
    try {
        connectToDB()
        const user = await authUser()
        const body = await req.json()
        const { productID } = body

        if (!user) {
            return Response.json(
                { message: "Please login first !" },
                { status: 401 }
            )
        }

        if (!productID) {
            return Response.json(
                { message: "Product is not defined !" },
                { status: 400 }
            )
        }

        const wish = await WishlistModel.findOne({ user: user._id, product: productID })

        if (!wish) {
            await WishlistModel.create({ user: user._id, product: productID })
        } else {
            return Response.json(
                { message: "This product already exist." },
                { status: 422 }
            )
        }

        return Response.json(
            { message: "Product added to wishlist successfully." },
            { status: 201 }
        )


    } catch (err) {
        console.log(err);

        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}


export async function DELETE(req) {
    try {
        connectToDB()
        const user = await authUser()
        const body = await req.json()
        const { productID } = body
        if (!user) {
            return Response.json(
                { message: "Please login first !" },
                { status: 401 }
            )
        }

        await WishlistModel.findOneAndDelete(
            {
                user: user._id,
                product: productID
            }
        )

        return Response.json(
            { message: "Product removed successfully." },
        )

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}