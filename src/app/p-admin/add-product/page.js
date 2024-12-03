
// Components
import SectionHeader from '@/components/modules/sectionHeader/SectionHeader'
import AddProduct from '@/components/templates/p-admin/products/addProduct/AddProduct'

// Backend
import connectToDB from "@/configs/db";
import CollectionModel from "@/models/Collection";

export default async function page() {

  connectToDB()
  const collections = await CollectionModel.find({})

  return (
    <>
      <SectionHeader title={'افزودن محصول'} linkText={'همه محصولات'} route={'/p-admin/add-product/products'} />
      <AddProduct collections={JSON.parse(JSON.stringify(collections))} />
    </>
  )
}
