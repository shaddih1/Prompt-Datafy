'use client'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowScrollTop(true)
    } else if (window.pageYOffset <= 200) {
      setShowScrollTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {showScrollTop && (
        <button
          data-toggle="back-to-top"
          id="btn-back-to-top"
          className="fixed text-sm rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary/20 text-primary justify-center items-center flex"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FaArrowUp size={16} />
        </button>
      )}
    </>
  )
}

export default ScrollToTop
