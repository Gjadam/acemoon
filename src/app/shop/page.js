
// Components
import MainLayout from "@/components/layouts/MainLayout";
import ShopLayout from "@/components/layouts/ShopLayout";
import CategoryHeader from "@/components/modules/categoryHeader/CategoryHeader";
import Shop from "@/components/templates/shop/Shop";

// Backend
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";

export default async function page() {
  
  connectToDB()
  const products = await ProductModel.find({})
  .populate('collection', 'name')
  return (
    <MainLayout>
      <CategoryHeader title={'فروشگاه'} />
      <ShopLayout>
        <Shop products={JSON.parse(JSON.stringify(products))} />
      </ShopLayout>
    </MainLayout>
  )
}
