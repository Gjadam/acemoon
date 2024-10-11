"use client"
import { useEffect, useState } from "react"

// Components
import Button from "@/components/modules/button/Button"
import FormInput from "@/components/modules/formInput/FormInput"
import Comment from "./Comment"

// Icons
import { FaStar } from "react-icons/fa"

// Axios
import apiRequest from "@/Services/Axios/Configs/configs"

// SweetAlert
import toastAlert from "@/utils/toastAlert"
import Alert from "@/components/modules/alert/Alert"

// Validations
import { validateEmail } from "@/utils/auth"

// Hooks
import useForm from "@/Hooks/useForm"

export default function Comments({ productID, comments, user }) {


    const { disableSubmitHandler, isDisabledSubmit } = useForm()

    const [hoverRateIcon, setHoverRateIcon] = useState(null)
    const [isSaveUserInfo, setIsSaveUserInfo] = useState(false)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [score, setScore] = useState(5)


    function validateComment () {
        if (user) {
            if (user.name && user.email && body) {
                return false
            }
        } else {
            if (username && email && body) {
                return false
            }
        }
        return true
    }

    useEffect(() => {
        const userInfos = JSON.parse(localStorage.getItem("userInfo"))
        if (userInfos) {
            setUsername(userInfos.username)
            setEmail(userInfos.email)
        }
    }, [])

    const submitComment = async () => {
        disableSubmitHandler()
        if (isSaveUserInfo) {
            const userInfo = {
                username: user ? user.name : username,
                email: user ? user.email : email,
            }
            localStorage.setItem("userInfo", JSON.stringify(userInfo))
        }

        apiRequest.post('/comments', {
            username: user ? user.name : username,
            email: user ? user.email : email,
            body,
            score,
            productID
        })
            .then(res => {
                if (res.status === 201) {
                    toastAlert.fire({
                        text: "دیدگاه شما با موفقیت ثبت شد.",
                        icon: "success",
                    })
                    setUsername('')
                    setEmail('')
                    setBody('')
                }
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 400) {
                        toastAlert.fire({
                            text: "لطفا فیلدهای موردنظر را کامل کنید!",
                            icon: "error",
                        })
                    }
                }
            })
    }
    return (
        <div data-aos='fade-left'>
            <div className=" flex flex-col gap-10 my-10">
                {
                    comments.length > 0 ? (
                        comments.map(comment => (
                            comment.isAccept ?
                                (
                                    <Comment key={comment._id} {...comment} />
                                )
                                : (
                                    <Alert text={'دیدگاهی برای این محصول ثبت نشده'} />
                                )
                        ))
                    ) : (
                        <Alert text={'دیدگاهی برای این محصول ثبت نشده'} />
                    )
                }

            </div>
            <div className="flex flex-col gap-5">
                <div >
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
                                    className={` ${ratingValue <= (hoverRateIcon || score) ? 'text-yellow-500' : 'text-zinc-300'} active:text-yellow-600 text-xl mb-1 transition-all duration-200`}
                                    onMouseEnter={() => setHoverRateIcon(ratingValue)}
                                    onMouseLeave={() => setHoverRateIcon(null)}
                                />
                            </label>
                        )
                    })}
                </div>
            </div>
            <div className=" flex flex-col gap-5 mt-5">
                <FormInput type={'textarea'} placeholder={'دیدگاه شما'} error={!body && 'دیدگاه خود را وارد کنید'} onChange={(e) => setBody(e.target.value)} value={body} />
                {
                    !user ? (
                        <div className=" flex justify-center items-start flex-col md:flex-row gap-5">
                            <FormInput type={'text'} placeholder={'نام'} error={!username && 'نام خود را وارد کنید'} onChange={(e) => setUsername(e.target.value)} value={username} />
                            <FormInput type={'email'} placeholder={'ایمیل'} error={!email ? 'ایمیل خود را وارد کنید' : !validateEmail(email) && 'لطفا ایمیل را به درستی وارد کنید'} onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>

                    ) : null
                }
                <div >
                    <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value={isSaveUserInfo} onChange={() => setIsSaveUserInfo(!isSaveUserInfo)} />
                    <label for="wp-comment-cookies-consent" className=" mr-2">ذخیره نام و ایمیل من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.</label>
                </div>
                <Button text={'ثبت دیدگاه'} onClick={submitComment} isDisabled={validateComment() || isDisabledSubmit} />
            </div>
        </div>
    )
}
