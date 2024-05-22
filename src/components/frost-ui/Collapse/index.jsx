'use client'
import { useState } from 'react'
import { CollapseContext } from './collapseContext'
import CollapseToggle from './CollapseToggle'
import CollapseMenu from './CollapseMenu'

const Collapse = ({ children, open, toggleCollapse }) => {
  const [collapseOpen, setCollapseOpen] = useState(false)
  const handleCollapse = () => {
    setCollapseOpen(!collapseOpen)
  }
  return (
    <CollapseContext.Provider
      value={{
        open: open ?? collapseOpen,
        handleCollapse: toggleCollapse ?? handleCollapse,
      }}
    >
      {children}
    </CollapseContext.Provider>
  )
}

export default Object.assign(Collapse, {
  Toggle: CollapseToggle,
  Menu: CollapseMenu,
})
