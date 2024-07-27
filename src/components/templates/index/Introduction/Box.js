
export default function Box({ children, title, text }) {
    return (
        <div className=" flex justify-center items-center flex-col text-secondary">
            {children}
            <span className=" font-bold text-3xl mb-1">{title}</span>
            <p className=" text-lg">{text}</p>
        </div>
    )
}
