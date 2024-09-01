import connectToDB from "@/configs/db"
import ContactModel from "@/models/Contact"

export async function POST(req) {
    try {

        connectToDB()
        const reqBody = await req.json()
        const { name, phone, email, title, body } = reqBody

        if (!name || !phone || !title || !body) {
            return Response.json(
                { message: "Name or phone or email or title or body is not defined!" },
                { status: 400 }
            )
        }

        await ContactModel.create({ name, phone, email, title, body })

        return Response.json(
            { message: "Contact message created successfully." },
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
        connectToDB()
        const body = await req.json()
        const { contactID } = body

        if (!contactID) {
            return Response.json(
                { message: "Contact id is not defined!" },
                { status: 400 }
            )
        }

        await ContactModel.findOneAndDelete({ _id: contactID })

        return Response.json(
            { message: "Contact removed successfully." },
            { status: 200 }
        )

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}