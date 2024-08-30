
export default function Box({ title, text, children }) {
    return (
        <div data-aos='zoom-in' className=" group xl:first:border-l-1 xl:last:border-r-1  flex justify-center items-center flex-col  w-96 grow gap-3">
            <div className=" relative p-3 after:absolute after:left-0 after:bottom-0 after:border-2 after:border-rose-500 after:w-full after:h-full after:rounded-full after:opacity-0 group-hover:after:opacity-100 after:invisible group-hover:after:visible after:translate-y-16 group-hover:after:translate-y-0 after:transition-all after:duration-500 ">

            <div className=" text-rose-500 text-5xl translate-y-3 group-hover:-translate-y-0 transition-all duration-500">
            {children}
            </div>
            </div>
            <div className=" text-center bg-white z-10 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <h1 className=" text-xl  text-secondary">{title}</h1>
                <h4 className=" text-zinc-400">{text}</h4>
            </div>
        </div>
    )
}
