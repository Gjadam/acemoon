
// Components
import MainLayout from "@/components/layouts/MainLayout";
import AllProducts from "@/components/templates/index/allProducts/AllProducts";
import Collections from "@/components/templates/index/collections/Collections";
import Header from "@/components/templates/index/header/Header";
import CollectionsBanner from "@/components/templates/index/collectionsBanner/CollectionsBanner";
import NewProducts from "@/components/templates/index/newProducts/NewProducts";

// Backend
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import CollectionModel from "@/models/Collection";
import Facility from "@/components/templates/index/facility/Facility";
import SocialMedias from "@/components/modules/socialMedias/SocialMedias";

export default async function Home() {

  connectToDB()
  const products = await ProductModel.find({})
    .populate('collection', 'name')
    .sort({ _id: -1 })
    .limit(9)

  const sortedProducts = await ProductModel.find({})
    .sort({ _id: -1 })
    .limit(4)

  const collections = await CollectionModel.find({})


  return (
    <MainLayout>
      <Header products={JSON.parse(JSON.stringify(products))} />
      <Collections collections={JSON.parse(JSON.stringify(collections))} />
      <AllProducts products={JSON.parse(JSON.stringify(products))} />
      <NewProducts sortedProducts={JSON.parse(JSON.stringify(sortedProducts))} />
      <CollectionsBanner collections={JSON.parse(JSON.stringify(collections))}/>
      <Facility/>
      <SocialMedias/>
    </MainLayout>
  );
}
