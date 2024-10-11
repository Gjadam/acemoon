
export default function ContentLayout({ title, children, isNewSection }) {
    return (
        <div >
            <div className="  flex items-center border-b-1 border-rose-200 pb-1 ">
                <div className=" relative">
                <h3 className=' text-lg text-secondary font-bold '>{title}</h3>
                {
                    isNewSection &&
                    <span className=' absolute -left-1.5 top-1 h-1.5 w-1.5 rounded-full bg-red-500  animate-pulse'></span>
                }

                </div>
            </div>
            <div className=" mt-3">
                {children}
            </div>
        </div>
    )
}
