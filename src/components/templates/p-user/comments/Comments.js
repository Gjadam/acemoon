'use client'
import { useState } from "react";

// Components
import Alert from "@/components/modules/alert/Alert";
import Pagination from "@/components/modules/pagination/Pagination";
import PanelCard from "@/components/modules/panelCard/PanelCard";
import PanelCardButton from "@/components/modules/panelCard/panelCardButton/PanelCardButton";
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader";
import Swal from "sweetalert2";

export default function Comments({comments}) {
    
    const [paginateComments, setPaginateComments] = useState(comments)

    const showCommentBody = (commentBody) => {
        Swal.fire({
            text: commentBody,
            showConfirmButton: true,
            confirmButtonText: "بستن"
        })
    }

  return (
    <div>
        <SectionHeader title={'کامنت ها'}/>
        <div className=" flex justify-center items-center flex-col gap-5 bg-white p-5 rounded-2xl w-full">
      {
        comments.length > 0 ? (
          <>
            {
              paginateComments.slice(0, 9).map(comment => (
                <PanelCard title={comment.productID.name} date={comment.date}>
                  <PanelCardButton bgColor={'bg-sky-500'} text={'مشاهده'} onClick={() => showCommentBody(comment.body)} />
                  <PanelCardButton condition={comment.isAccept ? "تایید شده" : "درانتظار تایید"} bgColor={comment.isAccept ? 'bg-green-500' : 'bg-zinc-500'}/>
                </PanelCard>
              ))
            }
            <Pagination items={comments} setShowItems={setPaginateComments} />
          </>
        ) : (
          <Alert text={'کامنتی یافت نشد'} />
        )
      }
    </div>
    </div>
  )
}
