
// Components
import PanelCard from "@/components/modules/panelCard/PanelCard";
import PanelCardButton from "@/components/modules/panelCard/panelCardButton/PanelCardButton";

export default function Collections({ collections }) {
  return (
    <div className=" flex justify-center items-center flex-col gap-5 bg-white p-5 rounded-2xl w-full">
      {
        collections.map(collection => (
          <PanelCard title={collection.name} date={collection.createdAt}>
            <PanelCardButton bgColor={'bg-red-500'} text={'ویرایش'} />
            <PanelCardButton bgColor={'bg-blue-500'} text={'حذف'} />
          </PanelCard>
        ))
      }
    </div>
  )
}
