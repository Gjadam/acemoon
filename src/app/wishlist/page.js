
// Components
import MainLayout from "@/components/layouts/MainLayout"
import CategoryHeader from "@/components/modules/categoryHeader/CategoryHeader"
import Wishlist from "@/components/templates/wishlist/Wishlist"

// Backend
import connectToDB from "@/configs/db"
import WishlistModel from "@/models/Wishlist"
import { authUser } from "@/utils/serverHelpers"


export const metadata = {
    title: 'ماه آس | لیست علاقه مندی ها'
}

export default async function page() {

    connectToDB()
    const user = await authUser()
    const wishes = await WishlistModel.find({ user: user._id })
        .populate('product')
        .sort({ _id: 1 })
        .lean()


    return (
        <MainLayout>
            <CategoryHeader title={'لیست علاقه مندی ها'} />
            <Wishlist wishes={wishes} />
        </MainLayout>
    )
}
