
export default function PanelCardButton({ text, bgColor, onClick, condition }) {
    return (
        condition ? (
            <div className={` flex-grow w-28 py-1 rounded-md text-center ${bgColor} select-none text-white`} >
                <span className=' text-sm'>{condition}</span>
            </div>
        ) : (
            <div className={` flex-grow w-28 py-1 rounded-md text-center ${bgColor} hover:bg-secondary text-white transition-colors cursor-pointer`} onClick={onClick}>
                <span className=' text-sm'>{text}</span>
            </div>
        )
    )
}
