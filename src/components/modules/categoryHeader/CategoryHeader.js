import BreadCrumb from "../breadCrumb/BreadCrumb";

export default function CategoryHeader({ title }) {
    return (
        <div className=" h-36 bg-zinc-100 bg-cover bg-no-repeat bg-center overflow-hidden">
            <div className=" flex justify-center items-center flex-col gap-3 w-full h-full ">
                <h1 className=" font-bold text-4xl">{title}</h1>
                <div>
                    <BreadCrumb routeText={title} />
                </div>
            </div>
        </div>
    )
}
