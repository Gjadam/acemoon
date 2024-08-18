import Link from "next/link";
import ProductBox from "@/components/modules/productBox/ProductBox";
import Alert from "@/components/modules/alert/Alert";

export default function Collection({ products }) {
    return (
        <div className=" flex justify-center items-center flex-wrap gap-5 my-20">
            {
                products.length > 0 ? (
                    products.map(product => (
                            <ProductBox key={product._id} {...product} />
                    ))
                ) : (
                 <Alert text={'هیچ محصولی در این دسته بندی وجود ندارد.'}/>
            )
        }
        </div>
    )
}
