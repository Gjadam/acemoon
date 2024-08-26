'use client'
import { useState } from "react";

// Components
import Alert from "@/components/modules/alert/Alert";
import UserBox from "./userBox/UserBox";
import Pagination from "@/components/modules/pagination/Pagination";

export default function Users({ users }) {

    const [paginateUsers, setPaginateUsers] = useState(users)

    return (
        <div className=" flex justify-center items-start gap-5 flex-wrap mt-10 overflow-x-hidden">
            {
                users.length > 0 ? (
                    <>
                        {
                            paginateUsers.slice(0, 9).map((user) => (
                                <UserBox key={user._id} {...user} />
                            ))
                        }
                        <Pagination items={users} setShowItems={setPaginateUsers} />
                    </>
                ) : (
                    <Alert text={'کاربری یافت نشد'} />
                )
            }
        </div>
    )
}
