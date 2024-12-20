
// Components
import CategoryHeader from "@/components/modules/categoryHeader/CategoryHeader";
import Collection from "@/components/templates/collection/Collection";
import ShopLayout from "@/components/layouts/ShopLayout";

// Backend
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import CollectionModel from "@/models/Collection";



async function getCollectionData(collectionID) {
    await connectToDB();
    const collection = await CollectionModel.findOne({ _id: collectionID });
    return collection;
}

export async function generateMetadata({ params }) {
    const collection = await getCollectionData(params.id)
    return {
        title: `ماه آس | دسته بندی ${collection.name}`,
        description:`دسته بندی ${collection.name} ماه آس`,
    };
}


export default async function page({ params }) {

    connectToDB()
    const collectionID = params.id
    const collection = await CollectionModel.findOne({ _id: collectionID })
    const products = await ProductModel.find({ collection: collectionID })
        .populate('collection', 'name')
        .sort({ _id: -1 })
        .lean()

    return (
        <>
            <CategoryHeader title={`دسته بندی ${collection.name}`} />
            <ShopLayout>
                <Collection products={JSON.parse(JSON.stringify(products))} />
            </ShopLayout>
        </>
    )
}
