import connectToDB from "@/configs/db"
import CollectionModel from "@/models/Collection"

export async function POST(req) {
    try {
        connectToDB()
        const body = await req.json()
        const { name } = body

        if (!name) {
            return Response.json(
                { message: "Name is required !" },
                { status: 400 }
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

export async function PUT(req) {
    try { 
        connectToDB()
        const body = await req.json()
        const { collectionID, name } = body

        if(!collectionID || !name) {
            return Response.json(
                {message: "Collection id or name is not found !"},
                {status: 400}
            )
        }

        await CollectionModel.findOneAndUpdate(
            {_id: collectionID},
            {
                $set: { name }
            }
        )

        return Response.json({message: 'Collection name updated successfully.'})

    } catch(err) {
        return Response.json(
            {message: err},
            {status: 500}
        )
    }
}

export async function DELETE(req) {
    try { 
        connectToDB()
        const body = await req.json()
        const { collectionID } = body

        if(!collectionID) {
            return Response.json(
                {message: "Collection id is not found !"},
                {status: 400}
            )
        }

        await CollectionModel.findOneAndDelete({_id: collectionID})

        return Response.json({message: 'Collection removed successfully.'})

    } catch(err) {
        console.log(err);
        
        return Response.json(
            {message: err},
            {status: 500}
        )
    }
}