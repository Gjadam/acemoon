'use client'
import { useEffect, useState } from "react";
// Icons
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
      const showScrollToTop = () => {
          const currentScroll = window.pageYOffset
          if (currentScroll > 105) {
            setShowScrollToTop(true)
          } else {
            setShowScrollToTop(false)
          }
      }

      window.addEventListener('scroll', showScrollToTop)
      return () => window.removeEventListener('scroll', showScrollToTop)
  }, [])


  return (
    <div className={`fixed left-7 ${showScrollToTop ? ' bottom-5  visible opacity-100 ' : '-bottom-20 invisible opacity-0 '}  z-50 text-2xl p-2 rounded  -translate-y-2.5 hover:animate-bounce  bg-rose-500 hover:bg-secondary shadow-xl text-white transition-all duration-300 cursor-pointer `} onClick={scrollToTop}>
      <IoIosArrowUp />
    </div>
  )
}