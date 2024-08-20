'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

// Components
import Button from "@/components/modules/button/Button";
import FormInput from "@/components/modules/formInput/FormInput";
import apiRequest from "@/Services/Axios/Configs/configs";
import toastAlert from "@/utils/toastAlert";

export default function EditProduct({ isShowEditProduct, setIsShowEditProduct, collections, _id, name, priceBeforeDiscount, price, shortDescription, longDescription, size, color, collection: productCollection }) {

    const router = useRouter()

    const [editName, setEditName] = useState(name);
    const [editPriceBeforeDiscount, setEditPriceBeforeDiscount] = useState(priceBeforeDiscount);
    const [editPrice, setEditPrice] = useState(price);
    const [editShortDescription, setEditShortDescription] = useState(shortDescription);
    const [editLongDescription, setEditLongDescription] = useState(longDescription);
    const [editCollection, setEditCollection] = useState(productCollection ? productCollection._id : -1);
    const [editSize, setEditSize] = useState(size);
    const [editColor, setEditColor] = useState(color);

    const editProduct = () => {
        const editedProduct = {
            productID: _id,
            name: editName,
            priceBeforeDiscount: +editPriceBeforeDiscount,
            price: +editPrice,
            shortDescription: editShortDescription,
            longDescription: editLongDescription,
            collection: editCollection,
            size: editSize,
            color: editColor
        }

        apiRequest.put('/products', editedProduct)
            .then(res => {
                if (res.status === 200) {
                    toastAlert.fire({
                        text: "محصول موردنظر با موفقیت ویرایش شد.",
                        icon: 'success'
                    })
                    router.refresh()
                }
            })

    }

    return (
        <div className={` container-fluid fixed left-0 top-0 right-0 bottom-0 z-40 flex justify-center items-center bg-[rgba(0,0,0,0.6)] ${isShowEditProduct ? ' visible opacity-100' : ' invisible opacity-0'} transition-all duration-300`} onClick={() => setIsShowEditProduct(false)}>
            <div className=" flex justify-between items-start flex-col gap-10 md:w-[50rem] w-full h-120 overflow-y-auto p-5 bg-white rounded-xl z-50" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-center items-center gap-5 flex-wrap md:flex-nowrap w-full">
                    <FormInput type={'text'} placeholder={'نام محصول'} value={editName} onChange={(e) => setEditName(e.target.value)} />
                    <div className="flex  flex-col gap-2 w-full">
                        <label>دسته بندی</label>
                        {/* <select name={name} className={` text-gray-400 focus:text-secondary w-full px-3 py-3.5 border-1  ${!isDisabled && 'hover:border-secondary'}  ${error ? "border-red-600" : "focus:border-rose-200"} focus:placeholder:text-secondary focus:bg-rose-50 rounded-xl outline-0 placeholder:transition-all placeholder:duration-300 transition-all duration-300 `} onChange={onChange} onBlur={onBlur} > */}
                        <select className={` text-gray-400 focus:text-secondary w-full px-3 py-3.5 border-1  focus:placeholder:text-secondary focus:bg-rose-50 rounded-xl outline-0 placeholder:transition-all placeholder:duration-300 transition-all duration-300 `} onChange={(e) => setEditCollection(e.target.value)}  >
                            {
                                productCollection ? (
                                    <option value={productCollection._id} className=' text-secondary' >{productCollection.name}</option>
                                ) : (
                                    <option value={-1} className=' text-secondary' >لطفا یک مورد را انتخاب کنید</option>
                                )
                            }
                            {
                                collections?.filter(collection => collection._id !== productCollection?._id).map(collection => (
                                    <option value={collection._id} key={collection._id} className=' text-secondary'>{collection.name}</option>
                                ))
                            }
                        </select>
                        {/* {error ? <span className=' text-xs text-red-500'>{error}</span> : null} */}
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 flex-wrap md:flex-nowrap w-full">
                    <FormInput type={'number'} placeholder={'قیمت قبل از تخفیف(تومان)'} value={editPriceBeforeDiscount} onChange={(e) => setEditPriceBeforeDiscount(e.target.value)} />
                    <FormInput type={'number'} placeholder={'قیمت اصلی(تومان)'} value={editPrice} onChange={(e) => setEditPrice(e.target.value)} />
                </div>
                <div className="flex justify-center items-center gap-5 flex-wrap md:flex-nowrap w-full">
                    <FormInput type={'text'} placeholder={'توضیحات کوتاه'} value={editShortDescription} onChange={(e) => setEditShortDescription(e.target.value)} />
                    <FormInput type={'text'} placeholder={'سایز (مثل : S ، M ، L ، XL ، ...)'} value={editSize} onChange={(e) => setEditSize(e.target.value)} />
                    <FormInput type={'text'} placeholder={'رنگ (مثل : آبی ، سبز ،...)'} value={editColor} onChange={(e) => setEditColor(e.target.value)} />
                </div>
                <div className="flex justify-center items-center gap-5 flex-wrap md:flex-nowrap w-full">
                    <FormInput type={'textarea'} placeholder={'توضیحات بلند'} value={editLongDescription} onChange={(e) => setEditLongDescription(e.target.value)} />
                </div>
                <div className=" w-full">
                    <Button text={'ویرایش اطلاعات'} onClick={editProduct} />
                </div>
            </div>
        </div>
    )
}
