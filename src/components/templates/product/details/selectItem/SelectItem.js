
export default function SelectItem({item, state, setState}) {
  return (
    <label htmlFor={item} className={`flex justify-center items-center  ${state === item ? 'bg-rose-500 text-white' : 'border-1  bg-zinc-100 text-secondary hover:text-rose-500'} cursor-pointer  w-12 h-12 rounded-full transition-colors`}>
    <span className="text-sm  select-none">{item}</span>
    <input
        type="radio"
        id={item}
        name="sizes"
        value={item}
        checked={state === item}
        onChange={(e) => setState(e.target.value)}
        className=" hidden"
    />
</label>
  )
}
