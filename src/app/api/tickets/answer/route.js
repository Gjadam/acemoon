import connectToDB from "@/configs/db"
import TicketModel from "@/models/Ticket"
import { authAdmin } from "@/utils/serverHelpers"

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
        const reqBody = await req.json()
        const { answer, ticketID} = reqBody

        if (!answer) {
            return Response.json(
                { message: "Answer ticket is not defined !" },
                { status: 400 }
            )
        }

        await TicketModel.findOneAndUpdate(
            { _id: ticketID },
            {
                $set: {
                    hasAnswer: true,
                    answer
                }
            }
        )

        return Response.json(
            { message: "Answer saved successfully." },
            { status: 200 }
        )

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}