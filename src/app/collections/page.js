
// Components
import MainLayout from "@/components/layouts/MainLayout";
import CategoryHeader from "@/components/modules/categoryHeader/CategoryHeader";
import Collections from "@/components/templates/collections/Collections";

// Backend
import connectToDB from "@/configs/db";
import CollectionModel from "@/models/Collection";

export default async function page() {

  connectToDB()
  const collections = await CollectionModel.find({})
    .sort({ _id: -1 })
    .lean()

  return (
    <MainLayout>
      <CategoryHeader title={'دسته بندی ها'} />
      <Collections collections={JSON.parse(JSON.stringify(collections))} />
    </MainLayout>
  )
}
