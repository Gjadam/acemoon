import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";
import ProductModel from "@/models/Product";
import { authAdmin } from "@/utils/serverHelpers";

export async function POST(req) {
    try {

        const isAdmin = await authAdmin()

        if (!isAdmin) {
            return Response.json(
                { message: "This api protected and you can't access it !!" },
                { status: 401 }
            )
        }

        connectToDB()
        const body = await req.json()
        const { commentID } = body

        if (!commentID) {
            return Response.json(
                { message: "Comment id not found !" },
                { status: 400 }
            )
        }


        await CommentModel.findOneAndUpdate(
            { _id: commentID },
            {
                $set: { isAccept: true }
            }
        )

        const userComment = await CommentModel.findOne({ _id: commentID });
        const product = await ProductModel.findOne({ _id: userComment.productID });
    
        // دریافت امتیاز کامنت و امتیاز فعلی محصول  
        const userCommentScore = userComment.score;
        let productScore = product.score;

        if(userComment.isAccept === true) {
    
            // به‌روزرسانی امتیاز محصول بر اساس امتیاز کامنت کاربر  
            productScore += Math.round((userCommentScore - productScore) * 0.5); // مثال: فقط 50% از تفاوت به امتیاز جدید اضافه می‌شود.  
    
            // اطمینان از محدود کردن امتیاز بین ۰ و ۵  
            productScore = Math.max(0, Math.min(5, productScore));
    
            // ذخیره تغییرات در محصول  
    
            await ProductModel.findByIdAndUpdate(
                { _id: userComment.productID },
                { score: productScore }
            );

        }

        
        return Response.json({ message: "Comment accepted successfully." })

    } catch (err) {
        return Response.json(
            { message: err },
            { status: 500 }
        )
    }
}