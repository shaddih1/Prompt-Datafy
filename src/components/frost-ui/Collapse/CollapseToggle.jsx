import { useContext } from 'react'
import { CollapseContext } from './collapseContext'

const CollapseToggle = ({
  children,
  as: tag = 'button',
  className,
  openClass,
}) => {
  const { open, handleCollapse } = useContext(CollapseContext)
  const Tag = tag
  return (
    <Tag
      className={`${className}${
        open ? ' open ' + 'fc-col-open ' : ' fc-col-close '
      }${open && openClass ? openClass : ''}`}
      onClick={handleCollapse}
    >
      {children}
    </Tag>
  )
}

export default CollapseToggle
