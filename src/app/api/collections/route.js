import connectToDB from "@/configs/db"
import CollectionModel from "@/models/Collection"

export async function POST(req) {
    try {
        connectToDB()
        const body = await req.json()
        const { name } = body

        if (!name) {
            return Response.json(
                { message: err },
                { status: 500 }
            )
        }

        await CollectionModel.create({ name })

        return Response.json(
            { message: "Collection created successfully." },
            { status: 201 }
        )

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}