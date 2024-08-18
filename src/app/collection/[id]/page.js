
// Components
import MainLayout from "@/components/layouts/MainLayout";
import CategoryHeader from "@/components/modules/categoryHeader/CategoryHeader";
import Collection from "@/components/templates/collection/Collection";

// Backend
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import CollectionModel from "@/models/Collection";

export default async function page({ params }) {


    connectToDB()
    const collectionID = params.id
    const collection = await CollectionModel.findOne({ _id: collectionID })
    const products = await ProductModel.find({ collection: collectionID })
        .sort({ _id: -1 })
        .lean()

    return (
        <MainLayout>
            <CategoryHeader title={collection.name} />
            <Collection products={JSON.parse(JSON.stringify(products))} />
        </MainLayout>
    )
}