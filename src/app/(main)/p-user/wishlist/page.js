
// Components
import Alert from "@/components/modules/alert/Alert";
import WishBox from "@/components/templates/p-user/wishlist/WishBox";

// Backend
import connectToDB from "@/configs/db";
import WishlistModel from "@/models/Wishlist";
import { authUser } from "@/utils/serverHelpers";

export default async function page() {

    connectToDB()
    const user = await authUser()
    const wishes = await WishlistModel.find({ user: user._id })
        .populate('product')
        .sort({ _id: -1 })
        .lean()

    return (
            <div className=" flex justify-center items-center flex-wrap gap-5">
                {
                    wishes.length > 0 ? (
                        wishes.map(wish => (
                            <WishBox key={wish._id} {...wish.product} />
                        ))
                    ) : (
                        <Alert text={'محصولی در لیست علاقه مندی ها یافت نشد.'} />
                    )
                }
            </div>
    )
}
