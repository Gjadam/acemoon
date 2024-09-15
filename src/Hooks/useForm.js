'use client'
import { useState } from 'react'

export default function useForm() {

    const [isDisabledSubmit, setIsDisabledSubmit] = useState(false)

    function disableSubmitHandler() {
        setIsDisabledSubmit(true)
        setTimeout(() => {
            setIsDisabledSubmit(false)
        }, 3000);
    }
    
    return { disableSubmitHandler, isDisabledSubmit }

}
