'use client'
import {  useRef } from 'react'

const SimpleCollapse = ({
  open,
  children,
  classNames,
  as: tag = 'div',
}) => {
  const ref = useRef(null)
  const height = open ? ref.current?.scrollHeight ?? 0 : 0
  const Tag = tag
  return (
    <Tag
      ref={ref}
      className={`transition-all overflow-hidden ${classNames ?? ''}`}
      style={{ height: height }}
    >
      {children}
    </Tag>
  )
}

export default SimpleCollapse
