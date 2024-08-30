import BreadCrumb from "../breadCrumb/BreadCrumb";

export default function CategoryHeader({ title }) {
    return (
        <div className=" h-36 bg-zinc-100">
            <div className=" container mx-auto p-5 flex justify-between items-center w-full h-full ">
                <h1 className=" font-bold text-4xl">{title}</h1>
                <div>
                    <BreadCrumb routeText={title} />
                </div>
            </div>
        </div>
    )
}
