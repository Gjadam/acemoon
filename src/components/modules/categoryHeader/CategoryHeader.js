import BreadCrumb from "../breadCrumb/BreadCrumb";

export default function CategoryHeader({ title }) {
    return (
        <div className=" h-72 bg-[url('/images/png/categoryItem.png')] bg-cover bg-no-repeat bg-center">
            <div className=" flex justify-center items-center flex-col gap-3 w-full h-full ">
            <h1 className=" font-bold text-5xl">{title}</h1>
            <BreadCrumb routeText={title} />
            </div>
        </div>
    )
}
