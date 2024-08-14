export default function Box({ children, title, count }) {
    return (
        <div className=" flex justify-start items-center flex-grow gap-5 w-72 text-white bg-rose-500 shadow-lg p-5  rounded-2xl transition-colors">
            <div className=" bg-white bg-opacity-30 py-4 px-5 rounded-xl text-4xl ">
                {children}
            </div>
            <div className=" flex flex-col ">
                <span className=' text-lg'>{title}</span>
                <span className=' text-5xl'>{count}</span>
            </div>
        </div>
    )
}