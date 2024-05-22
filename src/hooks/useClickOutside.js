'use client'
import { useEffect, useRef } from 'react'

function useOutsideClick(elRef, callback) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!elRef.current.contains(e.target) && callbackRef.current) {
        callbackRef.current(e)
      }
    }
    document.addEventListener('mousedown', handleClickOutside, true)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [callbackRef, elRef])
}

export default useOutsideClick
