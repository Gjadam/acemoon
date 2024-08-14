
// Components
import MainLayout from "@/components/layouts/MainLayout";
import AllProducts from "@/components/templates/index/allProducts/AllProducts";
import Banner from "@/components/templates/index/banner/Banner";
import Collections from "@/components/templates/index/collections/Collections";
import Header from "@/components/templates/index/header/Header";
import Introduction from "@/components/templates/index/Introduction/Introduction";

// Backend
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import CollectionModel from "@/models/Collection";

export default async function Home() {

  connectToDB()
  const products = await ProductModel.find({}).populate('collection', 'name')
  const collections = await CollectionModel.find({})


  return (
    <MainLayout>
      <Header products={JSON.parse(JSON.stringify(products))}/>
      <Collections collections={JSON.parse(JSON.stringify(collections))}/>
      <AllProducts products={JSON.parse(JSON.stringify(products))} />
      <Introduction />
      <Banner />
    </MainLayout>
  );
}
