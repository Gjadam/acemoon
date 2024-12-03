
// Components
import CategoryHeader from "@/components/modules/categoryHeader/CategoryHeader";
import Collections from "@/components/templates/collections/Collections";

// Backend
import connectToDB from "@/configs/db";
import CollectionModel from "@/models/Collection";

export const metadata = {
  title: "ماه آس | دسته بندی ها",
  description: "ما در ماه آس همه چیز داریم ، از لوازم آرایشی بگیر تا انواع لباس."
}

export default async function page() {

  connectToDB()
  const collections = await CollectionModel.find({})
    .sort({ _id: -1 })
    .lean()

  return (
    <>
      <CategoryHeader title={'دسته بندی ها'} />
      <Collections collections={JSON.parse(JSON.stringify(collections))} />
    </>
  )
}
