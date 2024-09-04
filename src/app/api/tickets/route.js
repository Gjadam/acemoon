import connectToDB from "@/configs/db"
import TicketModel from "@/models/Ticket"
import { authAdmin, authUser } from "@/utils/serverHelpers"

export async function POST(req) {
    try {
        connectToDB()
        const user = await authUser()
        const reqBody = await req.json()
        const {
            title,
            body
        } = reqBody

        if (!body || !title) {
            return Response.json(
                { message: "Ticket body not defined !" },
                { status: 400 }
            )
        }


        await TicketModel.create({
            title,
            body,
            user: user._id
        })

        return Response.json(
            { message: "Ticket saved successfully." },
            { status: 201 }
        )

    } catch(err) {
        return Response.json(
            {message: err},
            {status: 500}
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
            ticketID
        } = body

        if (!ticketID) {
            return Response.json(
                { message: "Ticket id is not defined !" },
                { status: 400 }
            )
        }


        await TicketModel.findOneAndDelete({_id: ticketID})

        return Response.json(
            { message: "Ticket removed successfully." },
            { status: 200 }
        )

    } catch(err) {
        return Response.json(
            {message: err},
            {status: 500}
        )
    }
}

