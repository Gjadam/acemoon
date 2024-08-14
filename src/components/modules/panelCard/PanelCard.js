
export default function PanelCard({ title, date, children }) {
  return (
    <div className=" flex justify-center sm:justify-between items-center flex-wrap gap-3 w-full p-3 rounded-xl text-secondary bg-white hover:bg-zinc-100 transition-colors">
      <h1 className=' font-bold text-xl'>{title}</h1>
      <div className=" flex justify-center sm:justify-between items-center flex-wrap gap-3">
        <span className=' text-sm text-zinc-500'>
          {
            new Date(date).toLocaleDateString("fa-IR")
          }
        </span>
        <div className=" flex items-center flex-wrap gap-3">
          {children}
        </div>
      </div>
    </div>
  )
}
