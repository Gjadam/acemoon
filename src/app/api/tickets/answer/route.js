import connectToDB from "@/configs/db"
import TicketModel from "@/models/Ticket"

export async function POST(req) {
    try {
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