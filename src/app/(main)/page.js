
// Components
import AllProducts from "@/components/templates/index/allProducts/AllProducts";
import Collections from "@/components/templates/index/collections/Collections";
import Header from "@/components/templates/index/header/Header";
import NewProducts from "@/components/templates/index/newProducts/NewProducts";
import Facility from "@/components/templates/index/facility/Facility";
import SocialMedias from "@/components/modules/socialMedias/SocialMedias";

// Backend
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import CollectionModel from "@/models/Collection";

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
    <>
      <Header products={JSON.parse(JSON.stringify(products))} />
      <Facility/>
      <AllProducts products={JSON.parse(JSON.stringify(products))} />
      <Collections collections={JSON.parse(JSON.stringify(collections))} />
      <NewProducts sortedProducts={JSON.parse(JSON.stringify(sortedProducts))} />
      <SocialMedias/>
    </>
  );
}
