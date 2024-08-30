
// Icons
import { IoSearch } from "react-icons/io5"
import { LiaTimesSolid } from "react-icons/lia"

export default function SearchBox({ value, onChange, isOpenSearchBox, setIsOpenSearchBox}) {



    return (
        <div className={` flex justify-center items-center flex-row-reverse border-1  rounded-full p-1 bg-zinc-100 ${!isOpenSearchBox && 'hover:bg-rose-500 hover:text-white'}  text-rose-500  transition-colors overflow-hidden`} >
            <div className=" p-2 cursor-pointer text-xl " onClick={() => setIsOpenSearchBox(!isOpenSearchBox)}>
                {
                    isOpenSearchBox ? (
                        <LiaTimesSolid />
                    ) : (
                        <IoSearch />
                    )
                }
            </div>
            <div >
                <input type="text" placeholder="جستوجو..." value={value} className={`  text-secondary placeholder:text-secondary placeholder:text-xs text-sm bg-transparent outline-none ${isOpenSearchBox ? 'w-40' : 'w-0'} transition-all`} onChange={onChange} />
            </div>
        </div>
    )
}
