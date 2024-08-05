
// Components
import BreadCrumb from "@/components/modules/breadCrumb/BreadCrumb";
import Gallery from "../product/gallery/Gallery";
import Details from "../product/details/Details";

export default function Product() {
    return (
        <div className=" bg-[url('/images/jpg/products.jpg')] bg-cover bg-center bg-no-repeat">
            <div className=" container mx-auto xl:container-fluid bg-zinc-100 p-5">
                <BreadCrumb routeText={'نام محصول'} />
            </div>
            <div className=" container mx-auto my-10">
                <div className=" flex justify-center items-start gap-10 w-full">
            <Gallery/>
            <Details/>
                </div>
            </div>
        </div>
    )
}
