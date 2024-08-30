
export default function CollectionBox({name}) {
  return (
    <div className=" text-center bg-zinc-50 hover:bg-zinc-100 text-secondary py-1 rounded-xl transition-colors cursor-pointer">
    <span className=' text-sm'>{name}</span>
</div>
  )
}
