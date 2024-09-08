
// Components
import BreadCrumb from "@/components/modules/breadCrumb/BreadCrumb";
import Gallery from "../product/gallery/Gallery";
import Details from "../product/details/Details";
import Tabs from "./tabs/Tabs";
import MoreProducts from "./tabs/moreProducts/MoreProducts";

// Backend
import { authUser } from "@/utils/serverHelpers";

export default async function Product({product, relatedProducts}) {
    
    const user = await authUser()

    return (
        <div className=" bg-[url('/images/jpg/product.jpg')] bg-cover bg-center bg-no-repeat min-h-screen">
            <div className=" container mx-auto xl:container-fluid bg-zinc-100 p-5 overflow-hidden">
                <div  data-aos='fade-up'>
                <BreadCrumb routeText={product.name} />
                </div>
            </div>
            <div className=" container mx-auto my-10 overflow-hidden p-10">
                <div className=" flex justify-center items-start flex-wrap gap-10 w-full">
                    <Gallery images={product.images}/>
                    <Details {...product} />
                </div>
                <Tabs productID={product._id} longDescription={product.longDescription} comments={product.comments} user={user}/>
                {
                    relatedProducts.length > 0 ? (
                        <MoreProducts relatedProducts={relatedProducts}/>
                    ) : null
                }
            </div>
        </div>
    )
}
