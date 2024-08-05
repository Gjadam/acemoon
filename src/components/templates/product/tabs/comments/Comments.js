"use client"
import { useEffect, useState } from "react"

// Components
import Button from "@/components/modules/button/Button"
import FormInput from "@/components/modules/formInput/FormInput"

// Icons
import { FaStar } from "react-icons/fa"
import Comment from "./Comment"

export default function Comments() {

    const [hoverRateIcon, setHoverRateIcon] = useState(null)
    const [isSaveUserInfo, setIsSaveUserInfo] = useState(false)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [score, setScore] = useState(4)

    useEffect(() => {
        const userInfos = JSON.parse(localStorage.getItem("userInfo"))
        if(userInfos) {
            setUsername(userInfos.username)
            setEmail(userInfos.email)
        }
    }, [])

    const submitComment = async () => {

        if(isSaveUserInfo) {
            const userInfo = {
                username,
                email
            }
            localStorage.setItem("userInfo", JSON.stringify(userInfo))
        }
    }
    return (
        <div data-aos='fade-left'>
            {/* <span className=" text-2xl" ><span className=" text-primary ml-1">{product.comments.filter(comment => comment.isAccept).length}</span>دیدگاه برای {product.name}</span> */}
            <div className=" flex flex-col gap-10 my-10">

                        <Comment  />

            </div>
            <div className="flex flex-col gap-5">
                <div className="">
                    <span className=" text-2xl" >دیدگاه خود را بنویسید</span>
                    <p className=" text-zinc-600 text-sm ">نشانی ایمیل شما منتشر نخواهد شد.</p>
                </div>
                <div className="flex items-center">
                    <span className=" ml-3">امتیاز شما:</span>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1
                        return (
                            <label key={i} >
                                <input type="radio" name="rating" value={ratingValue} onChange={() => setScore(ratingValue)} className="hidden" />
                                <FaStar
                                    className={` ${ratingValue <= (hoverRateIcon || score) ? 'text-rose-500' : 'text-zinc-300'} active:text-rose-600 text-xl mb-1 transition-all duration-200`}
                                    onMouseEnter={() => setHoverRateIcon(ratingValue)}
                                    onMouseLeave={() => setHoverRateIcon(null)}
                                />
                            </label>
                        )
                    })}
                </div>
            </div>
            <div className=" flex flex-col gap-5 mt-5">
                <FormInput type={'textarea'} placeholder={'دیدگاه شما'} onChange={(e) => setBody(e.target.value)} value={body} />
                <div className=" flex justify-center items-center flex-col md:flex-row gap-5">
                    <FormInput type={'text'} placeholder={'نام'} onChange={(e) => setUsername(e.target.value)} value={username} />
                    <FormInput type={'email'} placeholder={'ایمیل'} onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="">
                    <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value={isSaveUserInfo} onChange={() => setIsSaveUserInfo(!isSaveUserInfo)} />
                    <label for="wp-comment-cookies-consent" className=" mr-2">ذخیره نام و ایمیل من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.</label>
                </div>
                <Button text={'ثبت دیدگاه'} onClick={submitComment} />
            </div>
        </div>
    )
}
