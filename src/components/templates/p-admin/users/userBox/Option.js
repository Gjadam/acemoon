
export default function Option({ title, children, iconColor, onClick }) {
    return (
        <abbr title={title} onClick={onClick}>
            <div className={` cursor-pointer ${iconColor}`} >
                {children}
            </div>
        </abbr>
    )
}
