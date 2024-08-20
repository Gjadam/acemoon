
// Components
import Alert from "@/components/modules/alert/Alert";
import UserBox from "./UserBox";

export default function Users({ users }) {
    return (
        <div className=" flex justify-center items-start gap-5 flex-wrap mt-10">
            {
            users.length > 0 ? (
                users.map((user) => (
                    <UserBox key={user._id} {...user}/>
                ))

            ) : (
                <Alert text={'کاربری یافت نشد'}/>
            )
            }
        </div>
    )
}
