
// Components
import MainLayout from "@/components/layouts/MainLayout"

// Backend
import connectToDB from "@/configs/db"
import ProductModel from "@/models/Product"
import CollectionModel from "@/models/Collection"
import CategoryHeader from "@/components/modules/categoryHeader/CategoryHeader"
import Search from "@/components/templates/search/Search"

export default async function page({ searchParams }) {
    const { q } = searchParams

    connectToDB()
    const products = await ProductModel.find({ name: { $regex: q } })
        .lean()
    const collections = await CollectionModel.find({ name: { $regex: q } })
        .lean()


    return (
        <MainLayout>
            <CategoryHeader title={'جستوجو'} />
            <Search products={JSON.parse(JSON.stringify(products))} collections={JSON.parse(JSON.stringify(collections))} />
        </MainLayout>
    )
}
