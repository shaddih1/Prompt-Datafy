'use client'
import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaChevronDown } from 'react-icons/fa6'

import { findAllParent, findMenuItem, getMenuItemFromURL } from '@/helpers/menu'
import { PopoverLayout } from '../headless-ui'
import { cn } from '@/helpers'

// constants
import { MenuItemTypes } from '@/constants'

const MenuItemWithChildren = ({
  item,
  activeMenuItems,
  linkClassName,
  toggleMenu,
  level
}) => {

  const [open, setOpen] = useState(activeMenuItems.includes(item.key))

  useEffect(() => {
    setOpen(activeMenuItems.includes(item.key))
  }, [activeMenuItems, item])

  const toggleMenuItem = () => {
    const status = !open
    setOpen(status)
    if (toggleMenu) toggleMenu(item, status)
  }

  return (
    <li className={cn('hs-dropdown [--strategy:static] [--adaptive:none]  [--placement:right-top] relative ')}>
      <div
        className={cn('hs-dropdown-toggle  flex justify-between items-center cursor-pointer py-1', activeMenuItems.includes(item.key) && 'active', level==1 ?"px-1":"px-4")}
        aria-expanded={open}
        onClick={toggleMenuItem}
        id={`hs-dropdown-${item.key}`}
        data-menu-key={item.key}
      >
        <span className={cn("font-medium", activeMenuItems?.includes(item.key)?"text-primary":"text-gray-800 ")}>{item.label}</span>
        {!item.badge && <span className={cn("transition-all ms-2 hs-dropdown-open:rotate-180", activeMenuItems?.includes(item.key)?"text-primary":"text-gray-800 ")}><FaChevronDown size={12} /></span>}
      </div>
      <div className={cn('hs-dropdown-menu mt-0 transition-all z-10 duration hs-dropdown-open:opacity-100 origin-center absolute hidden', open && 'active', linkClassName, level!=1&&'left-full')}>
        <ul
          className={" bg-white rounded-lg shadow-lg border p-2 w-48 pt-2"}
          aria-labelledby={`hs-dropdown-${item.key}`}
        >
          {(item.children ?? []).map((child) => {
            return (
              <Fragment key={child.key}>
                {child.children ? (
                  <MenuItemWithChildren
                    item={child}
                    level={level+1}
                    toggleMenu={toggleMenu}
                    activeMenuItems={activeMenuItems}
                    linkClassName={cn('nav-link z-20', activeMenuItems.includes(child.key) && 'active')}
                  />
                ) : (
                  <MenuItem
                    item={child}
                    level={level+1}
                    className={'nav-item'}
                    linkClassName={cn('nav-link', activeMenuItems.includes(child.key) && 'active')}
                  />
                )}
              </Fragment>
            )
          })}
        </ul>
      </div>
      {item.isDivider && <hr className="-mx-2 my-2"></hr>}
    </li>
  )
}

const MenuItem = ({ item, className, linkClassName, level }) => {
  return (
    <li className={className}>
      <MenuItemLink item={item} className={linkClassName} level={level+1} />
    </li>
  )
}

const MenuItemLink = ({ item, className }) => {
  return (
    <Link
      className={`nav-link ${className}`}
      href={item.url ?? ''}
      target={item.target ?? '_self'}
      data-menu-key={item.key}
    >
      {item.icon ? (
        <div className="flex items-center -ms-1.5">
          <span className="bg-blue-600/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
            {item.icon}
          </span>
          <div className="flex-grow-1">
            {item.label}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-between">{item.label}</div>
      )}
    </Link>
  )
}

const AppMenu = ({ menuItems }) => {
  const [activeMenuItems, setActiveMenuItems] = useState([])

  const location = usePathname()
  const menuRef = useRef(null)

  const toggleMenu = (menuItem, show) => {
    if (show) {
      setActiveMenuItems([
        menuItem.key,
        ...findAllParent(menuItems, menuItem),
      ])
    }
  }

  /**
   * activate the menuitems
   */
  const activeMenu = useCallback(() => {
    const trimmedURL = location?.replaceAll('', '')
    const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL)

    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key)
      if (activeMt) {
        setActiveMenuItems([
          activeMt.key,
          ...findAllParent(menuItems, activeMt),
        ])
      }
    }
  }, [location, menuItems])

  useEffect(() => {
    activeMenu()
  }, [activeMenu, menuItems])

  return (
    <ul
      className="navbar-nav flex gap-x-3 items-center justify-center"
      ref={menuRef}
    >
      {(menuItems ?? []).map((item) => {
        return (
          <Fragment key={item.key}>
            {item.children ? (
              <MenuItemWithChildren
                item={item}
                level={1}
                toggleMenu={toggleMenu}
                activeMenuItems={activeMenuItems}
                linkClassName={`nav-link ${activeMenuItems.includes(item.key) ? 'active' : ''}`}
              />
            ) : (
              <MenuItem
                item={item}
                level={1}
                linkClassName={activeMenuItems.includes(item.key) ? 'active' : ''}
                className={'nav-item'}
              />
            )}
          </Fragment>
        )
      })}
    </ul>
  )
}

export default AppMenu
