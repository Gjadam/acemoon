'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Comopnents
import Button from '@/components/modules/button/Button';
import FormInput from '@/components/modules/formInput/FormInput';

// Icons
import { LuLoader2 } from "react-icons/lu";

// Axios
import apiRequest from '@/Services/Axios/Configs/configs';

// SweetAlert
import toastAlert from '@/utils/toastAlert';

export default function AddProduct({ collections }) {

    const router = useRouter();
    const [name, setName] = useState("");
    const [priceBeforeDiscount, setPriceBeforeDiscount] = useState("");
    const [price, setPrice] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
    const [collection, setCollection] = useState(-1);
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [images, setImages] = useState('')

    const [isImageUploaded, setIsImageUploaded] = useState(false)

    const addProduct = async () => {

        // ساختن محصول پس از دریافت تمام تصاویر
        const createProductHandler = async (uploadedImages) => {
            apiRequest.post('/products', {
                name,
                priceBeforeDiscount,
                price,
                shortDescription,
                longDescription,
                collection,
                size,
                color,
                images: uploadedImages,
            })
                .then(res => {
                    if (res.status === 201) {
                        toastAlert.fire({
                            text: "محصول موردنظر با موفقیت ایجاد شد.",
                            icon: "success",
                        }).then(() => {
                            router.refresh()
                        })
                        setName("")
                        setPriceBeforeDiscount("")
                        setPrice("")
                        setShortDescription("")
                        setLongDescription("")
                        setCollection(-1)
                        setColor('')
                        setSize('')
                    }
                })

        }

        // دریافت اطلاعات تصاویر از vercel
        const getImageUrlFromVercel = async (image) => {
            setIsImageUploaded(true);
            const responseUploadImage = await fetch(
                `/api/products/upload?filename=${image.name}`,
                {
                    method: 'POST',
                    body: image,
                },
            );
            if (responseUploadImage.status === 201) {
                const newBlob = await responseUploadImage.json();
                return newBlob.blob; // بازگرداندن آدرس عکس
            }
            return null; // در صورتی که خطایی رخ دهد
        };

        if (images.length > 1) {
            const imageUploadPromises = Array.from(images).map(image => getImageUrlFromVercel(image));
            // تا زمانی که اطلاعات تصاویر رو کامل دریافت نکرده به قسمت بعدی نمیره
            const uploadedImages = await Promise.all(imageUploadPromises);
            createProductHandler(uploadedImages)
            setIsImageUploaded(false);
        } else {
            getImageUrlFromVercel(images[0])
                .then(uploadedImage => {
                    if (uploadedImage !== null) {
                        createProductHandler(uploadedImage)
                        setIsImageUploaded(false);
                    }
                });
        }

    }


    return (
        <>
            <div className=" flex flex-col gap-5 mt-5">
                <div className="flex justify-center items-center gap-5 flex-wrap md:flex-nowrap">
                    <FormInput type={'text'} placeholder={'نام محصول'} value={name} onChange={(e) => setName(e.target.value)} />
                    <FormInput type={'select-option'} placeholder={'دسته بندی'} options={collections} value={collection} onChange={(e) => setCollection(e.target.value)} />
                </div>
                <div className="flex justify-center items-center gap-5 flex-wrap md:flex-nowrap">
                    <FormInput type={'number'} placeholder={'قیمت قبل از تخفیف(تومان)'} value={priceBeforeDiscount} onChange={(e) => setPriceBeforeDiscount(e.target.value)} />
                    <FormInput type={'number'} placeholder={'قیمت اصلی(تومان)'} value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="flex justify-center items-center gap-5 flex-wrap md:flex-nowrap">
                    <FormInput type={'text'} placeholder={'سایز (مثل : S ، M ، L ، XL ، ...)'} value={size} onChange={(e) => setSize(e.target.value)} />
                    <FormInput type={'text'} placeholder={'رنگ (مثل : آبی ، سبز ،...)'} value={color} onChange={(e) => setColor(e.target.value)} />
                </div>
                <div className="flex justify-center items-center flex-col gap-5 ">
                    <FormInput type={'text'} placeholder={'توضیحات کوتاه'} value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
                    <FormInput type={'textarea'} placeholder={'توضیحات بلند'} value={longDescription} onChange={(e) => setLongDescription(e.target.value)} />
                    <FormInput type={"file"} onChange={(e) => setImages(e.target.files)} />
                </div>
                <Button text={'افزودن محصول'} onClick={addProduct} />
            </div>
            <div className={`fixed ${isImageUploaded ? "right-5" : " -right-96"} top-5  z-50 w-64 transition-all`}>
                <div className="flex justify-between items-center shadow-xl border-b-1 border-rose-500 bg-secondary text-white p-5 rounded-[2rem] overflow-hidden">
                    <span>درحال آپلود تصاویر</span>
                    <LuLoader2 className=' animate-spin text-2xl text-rose-500' />
                </div>
            </div>
        </>
    )
}
