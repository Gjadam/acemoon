
// Components
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import Comments from "@/components/templates/p-admin/comments/Comments";

// Backend
import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";


export default async function page() {

    connectToDB()
    const comments = await CommentModel.find({})
    .populate('productID', 'name')
    .sort({_id: -1})
    .lean()

  return (
    <AdminPanelLayout>
        <Comments comments={JSON.parse(JSON.stringify(comments))}/>
    </AdminPanelLayout>
  )
}
