
export default function KeyValue({ title, text, date }) {
    return (
        <div className=" flex justify-between items-start flex-wrap">
            <p className=" text-rose-500">{title}: </p>
            {
                date ?
                    <p>{new Date(date).toLocaleDateString('fa-IR')}</p>
                    : text ?
                        <p>{text}</p>
                        :
                        <p>---</p>
            }
        </div>
    )
}
