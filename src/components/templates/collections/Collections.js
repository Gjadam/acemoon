
// Components
import Alert from "@/components/modules/alert/Alert";
import CollectionBox from "@/components/modules/collectionBox/CollectionBox";

export default function Collections({ collections }) {
    return (
        <div className="container mx-auto mt-28 px-5">
            <div className=" flex justify-center items-center flex-wrap gap-10 ">
                {
                    collections.length > 0 ? (
                        collections.map(collection => (
                            <CollectionBox key={collection._id}{...collection} />
                        ))
                    ) : (
                        <Alert text={"دسته بندی یافت نشد"} />
                    )

                }
            </div>
        </div>
    )
}
