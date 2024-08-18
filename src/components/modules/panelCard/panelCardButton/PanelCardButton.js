
export default function PanelCardButton({ text, bgColor, onClick }) {
    return (
        <div className={` flex-grow w-28 py-1 rounded-md text-center ${bgColor} hover:bg-secondary text-white transition-colors cursor-pointer`} onClick={onClick}>
            <span className=' text-sm'>{text}</span>
        </div>
    )
}
