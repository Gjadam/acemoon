import BreadCrumb from "../breadCrumb/BreadCrumb";

export default function CategoryHeader() {
    return (
        <div className=" flex justify-center items-center flex-col gap-3 h-44 bg-[url('/images/jpg/category.jpg')] bg-cover bg-no-repeat bg-center">
            <h1 className=" text-5xl">فروشگاه</h1>
            <BreadCrumb />
        </div>
    )
}
