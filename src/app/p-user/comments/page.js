
// Components
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import Comments from "@/components/templates/p-user/comments/Comments";

// Backend
import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";
import { authUser } from "@/utils/serverHelpers";

export default async function page() {

    connectToDB()
    const user = await authUser()
    const comments = await CommentModel.find({ email: user.email })
        .populate('productID')
        .sort({ _id: -1 })
        .lean()

    return (
        <UserPanelLayout>
            <Comments comments={comments} />
        </UserPanelLayout>
    )
}
