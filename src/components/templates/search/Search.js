// Components
import Alert from "@/components/modules/alert/Alert";
import CollectionBox from "@/components/modules/collectionBox/CollectionBox";
import ProductBox from "@/components/modules/productBox/ProductBox";
import SectionHeader from "@/components/modules/sectionHeader/SectionHeader";

export default function Search({ products, collections }) {
    return (
        <div className=" container mx-auto flex flex-col p-5 xl:p-0 gap-10 mt-28">
            <SectionHeader title={'محصولات'} />
            <div className=" flex justify-center items-center flex-wrap gap-5">
                {
                    products.length > 0 ? (
                        products.map(product => (
                            <ProductBox key={product._id} {...product} />
                        ))
                    ) : (
                        <Alert text={'محصول موردنظر یافت نشد'} />
                    )
                }
            </div>
            <SectionHeader title={'دسته بندی ها'} />
            <div className=" flex justify-center items-center flex-wrap gap-5">
                {
                    collections.length > 0 ? (
                        collections.map(collection => (
                                <CollectionBox {...collection} />
                        ))
                    ) : (
                        <Alert text={'دسته بندی موردنظر یافت نشد'} />
                    )
                }
            </div>
        </div>
    )
}
