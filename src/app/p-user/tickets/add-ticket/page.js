
// Components
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import AddTicket from "@/components/templates/p-user/tickets/addTicket/AddTicket";


export default function page() {
    return (
        <UserPanelLayout>
            <AddTicket />
        </UserPanelLayout>
    )
}
