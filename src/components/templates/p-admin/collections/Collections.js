'use client'
import { useRouter } from "next/navigation";

// Components
import PanelCard from "@/components/modules/panelCard/PanelCard";
import PanelCardButton from "@/components/modules/panelCard/panelCardButton/PanelCardButton";
import Alert from "@/components/modules/alert/Alert";

// Axios
import apiRequest from "@/Services/Axios/Configs/configs";

// SweetAlert
import toastAlert from "@/utils/toastAlert";
import Swal from "sweetalert2";

export default function Collections({ collections }) {

  const router = useRouter()

  const editCollection = (collectionID) => {
    Swal.fire({
      title: "نام جدید کالکشن را وارد کنید",
      input: 'text',
      confirmButtonText: "ارسال"
    }).then((newName) => {
      if (newName.value) {
        apiRequest.put('/collections', {
          collectionID,
          name: newName.value
        })
          .then(res => {
            if (res.status === 200) {
              toastAlert.fire({
                text: "کالکشن موردنظر با موفقیت آپدیت شد.",
                icon: 'success'
              })
              router.refresh()
            }
          })
      }
    })
  }

  const deleteCollection = (collectionID) => {
    Swal.fire({
      title: "آیا از حذف این کالکشن اطمینان دارید؟",
      text: "بعد از حذف شدن قابل بازیابی نخواهد بود.",
      icon: "question",
      confirmButtonText: "بله",
      showCancelButton: true,
      cancelButtonText: "خیر"
    }).then(value => {
      if (value.isConfirmed) {
        apiRequest.delete('/collections', { data: { collectionID } })
          .then(res => {
            if (res.status === 200) {
              toastAlert.fire({
                text: "کالکشن موردنظر با موفقیت حذف شد.",
                icon: 'success'
              })
              router.refresh()
            }
          })
      }
    })
  }

  return (
    <div className=" flex justify-center items-center flex-col gap-5 bg-white p-5 rounded-2xl w-full">
      {
        collections.length > 0 ? (
          collections.map(collection => (
            <PanelCard title={collection.name} date={collection.createdAt}>
              <PanelCardButton bgColor={'bg-blue-500'} text={'ویرایش'} onClick={() => editCollection(collection._id)} />
              <PanelCardButton bgColor={'bg-red-500'} text={'حذف'} onClick={() => deleteCollection(collection._id)} />
            </PanelCard>
          ))
        ) : (
          <Alert text={'دسته بندی یافت نشد'}/>
        )
      }
    </div>
  )
}
