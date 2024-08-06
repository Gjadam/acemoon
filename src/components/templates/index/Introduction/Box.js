
export default function Box({ children, title, text }) {
    return (
        <div data-aos='fade' className=" flex justify-center items-center flex-col gap-5 text-secondary ">
            <div className=" bg-zinc-100 p-5 rounded-full">
            {children}
            </div>
            <div className=" text-center">
            <span className="  font-bold text-3xl mb-1">{title}</span>
            <p className=" text-rose-500 text-lg">{text}</p>
            </div>
        </div>
    )
}
