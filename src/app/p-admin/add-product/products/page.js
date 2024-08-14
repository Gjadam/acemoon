// Components
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader";
import Products from "@/components/templates/p-admin/products/Products";

// Backend
import connectToDB from '@/configs/db'
import ProductModel from '@/models/Product'

export default async function page() {

  connectToDB()
  const products = await ProductModel.find({})
    .sort({ _id: -1 })
    .lean()


  return (
    <AdminPanelLayout>
      <SectionHeader title={'محصولات'} />
      <Products products={JSON.parse(JSON.stringify(products))} />
    </AdminPanelLayout>
  )
}
