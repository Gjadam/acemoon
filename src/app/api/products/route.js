import connectToDB from "@/configs/db";
import ProductModel from '@/models/Product'
import CommentModel from '@/models/Comment'
import WishlistModel from '@/models/Wishlist'

export async function POST(req) {
    try {

        connectToDB();
        const body = await req.json()
        const { name, price, priceBeforeDiscount, shortDescription, longDescription, collection, size, images, color } = body

        if (!name || !price || !shortDescription || !longDescription || !images) {
            return Response.json(
                { message: "Name or price or shortDescription or longDescription or images or size or color not found !" },
                { status: 400 }
            )
        }

        await ProductModel.create({
            name,
            price,
            priceBeforeDiscount,
            shortDescription,
            longDescription,
            collection,
            size,
            color,
            images,
        });

        return Response.json(
            { message: "Product created successfully :))" },
            { status: 201 }
        );
    } catch (err) {
        console.log(err);

        return Response.json({ message: err }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        connectToDB()
        const body = await req.json()

        const {
            productID,
            name,
            priceBeforeDiscount,
            price,
            shortDescription,
            longDescription,
            collection,
            size,
            color,
        } = body

        if (!productID) {
            return Response.json(
                { message: "Product id is not defined" },
                { status: 400 }
            )
        }

        await ProductModel.findOneAndUpdate(
            { _id: productID },
            {
                $set: {
                    name,
                    priceBeforeDiscount,
                    price,
                    shortDescription,
                    longDescription,
                    collection,
                    size,
                    color,
                }
            }
        )

        return Response.json(
            { message: 'Product updated successfully.' },
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
        const { productID } = body

        await ProductModel.findOneAndDelete({ _id: productID })
        await CommentModel.findOneAndDelete({ productID })
        await WishlistModel.findOneAndDelete({ product: productID })

        return Response.json({ message: "Product removed successfully." })

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}