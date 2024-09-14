import {  RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri";

export default function AddressBox({ address, state, setState }) {
    return (
        <label htmlFor={address} className={`flex justify-start items-center gap-5 grow p-5 ${state === address ? 'bg-rose-500 text-white' : 'border-1  bg-zinc-100 text-secondary hover:text-rose-500'} cursor-pointer  w-60 rounded-lg transition-colors`}>
            <div className="">
                {
                    state === address ? (
                        <RiCheckboxCircleFill className=" text-xl"/>
                    ) : (
                        <RiCheckboxBlankCircleLine   className=" text-xl"/>
                    )
                }
             
            </div>
            <p className="text-sm text-center select-none">{address}</p>
            <input
                type="radio"
                id={address}
                name="sizes"
                value={address}
                checked={state === address}
                onChange={(e) => setState(e.target.value)}
                className=" hidden text-center"
            />
        </label>
    )
}
