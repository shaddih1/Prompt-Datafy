import { FC, RefObject, useContext, useRef } from 'react'
import { CollapseProps } from '.'
import { CollapseContext } from './collapseContext'

const CollapseMenu = ({
  children,
  as: tag = 'div',
  className,
}) => {
  const { open } = useContext(CollapseContext)
  const ref = useRef(null)
  const height = open ? ref.current?.scrollHeight ?? 'auto' : 0
  const Tag = tag
  return (
    <Tag
      ref={ref}
      className={`transition-all overflow-hidden ${className ?? ''}`}
      style={{ height: height }}
    >
      {children}
    </Tag>
  )
}

export default CollapseMenu
