
// Components
import MainLayout from "@/components/layouts/MainLayout";
import Product from "@/components/templates/product/Product";

// Backend
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";

export default async function page({ params }) {

  connectToDB()
  const productID = params.id
  const product = await ProductModel.findOne({ _id: productID }).populate('collection', 'name')

  return (
    <>
      <MainLayout>
        <Product product={JSON.parse(JSON.stringify(product))} />
      </MainLayout>
    </>
  )
}
