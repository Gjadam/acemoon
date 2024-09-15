'use client'
import { useRouter } from "next/navigation";

// Components
import Alert from "@/components/modules/alert/Alert";
import PanelCard from "@/components/modules/panelCard/PanelCard";
import PanelCardButton from "@/components/modules/panelCard/panelCardButton/PanelCardButton";
import ProductPrice from "@/components/modules/productPrice/ProductPrice";

// Axios
import apiRequest from "@/Services/Axios/Configs/configs";

// SweetAlert
import Swal from "sweetalert2";
import toastAlert from "@/utils/toastAlert";

export default function ShippingCost({ cost }) {

  const router = useRouter()

  const editCost = (costID) => {
    Swal.fire({
      title: "هزینه جدید حمل و نقل را وارد کنید",
      input: 'number',
      confirmButtonText: "ارسال"
    }).then((price) => {
      if (price.value) {
        apiRequest.put('/shipping-cost', {
          costID,
          price: price.value
        })
          .then(res => {
            if (res.status === 200) {
              toastAlert.fire({
                text: "هزینه حمل و نقل با موفقیت آپدیت شد.",
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
        cost ? (
          <PanelCard key={cost._id} title={<ProductPrice price={cost.price} />} date={cost.createdAt}>
            <PanelCardButton bgColor={'bg-blue-500'} text={'ویرایش'} onClick={() => editCost(cost._id)} />
          </PanelCard>
        ) : (
          <Alert text={'هزینه ای یافت نشد'} />
        )
      }
    </div>
  )
}
