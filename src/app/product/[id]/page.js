
// Components
import MainLayout from "@/components/layouts/MainLayout";
import Product from "@/components/templates/product/Product";

// Backend
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";


const getProductData = async (productID) => {
  connectToDB()
  const product = await ProductModel.findOne({ _id: productID })
    .populate('collection', 'name')
    .populate('comments')

  return product
}

export async function generateMetadata({ params }) {
  const product = await getProductData(params.id)
  return {
    title: `ماه آس | ${product.name}`,
    description: `${product.longDescription}`,
  };
}

export default async function page({ params }) {
  const product = await getProductData(params.id)

  const relatedProducts = await ProductModel.find({
    collection: product?.collection?._id,
    _id: { $ne: params.id }
  })
    .populate('collection', 'name')

  return (
    <>
      <MainLayout>
        <Product product={JSON.parse(JSON.stringify(product))} relatedProducts={JSON.parse(JSON.stringify(relatedProducts))} />
      </MainLayout>
    </>
  )
}
