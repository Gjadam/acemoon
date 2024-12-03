
// Components
import Tickets from "@/components/templates/p-admin/tickets/Tickets";

// Backend
import TicketModel from "@/models/Ticket";
import connectToDB from "@/configs/db";

export default async function page() {
    connectToDB()
    const tickets = await TicketModel.find({ hasAnswer: false })
        .populate('user')
        .lean()
        .sort({_id: -1})

    return (
        <>
            <Tickets tickets={JSON.parse(JSON.stringify(tickets))} />
        </>
    )
}
