
export default function List({title, children}) {
  return (
    <ul className=" flex flex-col gap-3">
        <p className=" text-xl">{title}</p>
        {children}
    </ul>
)
}
