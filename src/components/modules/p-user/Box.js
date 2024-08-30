
export default function Box({ title, count, children }) {
    return (
        <div className=" group flex justify-start items-center grow gap-5 w-80 h-32 p-5  bg-white hover:bg-rose-500  rounded-2xl transition-colors duration-200">
            <div className=" p-3 border-1 rounded-3xl bg-white  text-5xl  text-rose-500">
                {children}
            </div>
            <div >
                <h2 className=" text-lg text-zinc-500 group-hover:text-white transition-colors duration-200">{title}</h2>
                <p className=" text-3xl  text-secondary group-hover:text-white transition-colors duration-200">{count}</p>
            </div>
        </div>
    )
}
