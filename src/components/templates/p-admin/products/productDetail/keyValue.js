
export default function KeyValue({ title, text, date }) {
    return (
        <div className=" flex justify-between items-start flex-wrap">
            <p className=" text-rose-500">{title}: </p>
            {
                date ?
                    <p>{new Date(date).toLocaleDateString('fa-IR')}</p>
                    : text ?
                        <p className={`${text.length > 50 && ' h-20 overflow-y-auto'}`}>{text}</p>
                        :
                        <p>---</p>
            }
        </div>
    )
}
