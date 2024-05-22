import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Fragment, useCallback, useEffect, useRef, useState, } from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import SimpleCollapse from '@/components/frost-ui/SimpleCollapse'

// helpers
import { findAllParent, findMenuItem, getMenuItemFromURL } from '@/helpers/menu'

// constants
import { MenuItemTypes } from '@/constants'

const MenuItemWithChildren = ({
  item,
  linkClassName,
  subMenuClassNames,
  activeMenuItems,
  toggleMenu,
}) => {
  const [open, setOpen] = useState(activeMenuItems.includes(item.key))

  useEffect(() => {
    setOpen(activeMenuItems.includes(item.key))
  }, [activeMenuItems, item])

  const toggleMenuItem = () => {
    const status = !open
    setOpen(status)
    if (toggleMenu) toggleMenu(item, status)
    return false
  }

  return (
    <li className={`nav-item`}>
      <div
        className={`${linkClassName} ${activeMenuItems.includes(item['key']) ? 'active' : ''
          }`}
        aria-expanded={open}
        data-menu-key={item.key}
        onClick={toggleMenuItem}
      >
        {item.label}
        {!item.badge && (
          <FaAngleDown
            style={{ marginLeft: 'auto', verticalAlign: 'middle' }}
          />
        )}
      </div>
      <SimpleCollapse
        open={open}
        as="ul"
        classNames={subMenuClassNames + ' sub-menu'}
      >
        {(item.children ?? []).map((child, idx) => {
          return (
            <Fragment key={idx}>
              {child.children ? (
                <MenuItemWithChildren
                  item={child}
                  toggleMenu={toggleMenu}
                  activeMenuItems={activeMenuItems}
                  subMenuClassNames="sub-menu"
                  linkClassName={
                    activeMenuItems.includes(child.key) ? 'active' : ''
                  }
                />
              ) : (
                <MenuItem
                  item={child}
                  className={`ms-3 nav-item`}
                  linkClassName={
                    activeMenuItems.includes(child.key) ? 'active' : ''
                  }
                />
              )}
            </Fragment>
          )
        })}
      </SimpleCollapse>
    </li>
  )
}

const MenuItem = ({ item, className, linkClassName }) => {
  return (
    <li className={`${className}`}>
      <MenuItemLink item={item} className={linkClassName} />
    </li>
  )
}

const MenuItemLink = ({ item, className }) => {
  return (
    <Link
      href={item.url}
      target={item.target}
      className={`nav-link ${className}`}
      data-menu-key={item.key}
    >
      {item.icon ? (
        <div className="flex items-center -ms-1.5">
          <span className="bg-blue-600/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
            {item.icon}
          </span>
          <div className="flex-grow-1">{item.label}</div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-between">{item.label}</div>
      )}
    </Link>
  )
}

const VerticalMenu = ({ menuItems }) => {
  const location = usePathname()

  const menuRef = useRef(null)

  const [activeMenuItems, setActiveMenuItems] = useState([])

  /**
   * toggle the menus
   */
  const toggleMenu = (menuItem, show) => {
    if (show) {
      setActiveMenuItems([
        menuItem['key'],
        // ...findAllParent(menuItems, menuItem),
      ])
    }
  }

  const activeMenu = useCallback(() => {
    const trimmedURL = location?.replaceAll('', '')
    const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL)

    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key)
      if (activeMt) {
        setActiveMenuItems([
          activeMt['key'],
          ...findAllParent(menuItems, activeMt),
        ])
      }

      setTimeout(function () {
        const activatedItem = document.querySelector(
          `#right-menu a[href="${trimmedURL}"]`
        )

        if (activatedItem != null) {
          const simplebarContent = document.querySelector('#right-menu')

          const offset = activatedItem.offsetTop - 150

          scrollTo(simplebarContent, 100, 600)
          if (simplebarContent && offset > 100) {
            scrollTo(simplebarContent, offset, 600)
          }
        }
      }, 200)

      // scrollTo (Right Side Bar Active Menu)
      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2
        if (t < 1) return (c / 2) * t * t + b
        t--
        return (-c / 2) * (t * (t - 2) - 1) + b
      }

      const scrollTo = (element, to, duration) => {
        const start = element.scrollTop,
          change = to - start,
          increment = 20
        let currentTime = 0
        const animateScroll = function () {
          currentTime += increment
          const val = easeInOutQuad(currentTime, start, change, duration)
          element.scrollTop = val
          if (currentTime < duration) {
            setTimeout(animateScroll, increment)
          }
        }
        animateScroll()
      }
    }
  }, [location, menuItems])

  useEffect(() => {
    if (menuItems && menuItems.length > 0) activeMenu()
  }, [activeMenu, menuItems])

  return (
    <ul
      className="navbar-nav flex flex-col gap-2 menu"
      ref={menuRef}
      id="main-side-menu"
    >
      {(menuItems ?? []).map((item, idx) => {
        return (
          <Fragment key={item.key}>
            {item.isTitle ? (
              <li className="nav-item">{item.label}</li>
            ) : (
              <>
                {item.children ? (
                  <MenuItemWithChildren
                    item={item}
                    toggleMenu={toggleMenu}
                    subMenuClassNames="space-y-2"
                    activeMenuItems={activeMenuItems}
                    linkClassName="nav-link"
                  />
                ) : (
                  <MenuItem
                    item={item}
                    linkClassName={`${activeMenuItems.includes(item.key) ? 'active' : ''
                      }`}
                    className={'nav-item'}
                  />
                )}
              </>
            )}
          </Fragment>
        )
      })}
    </ul>
  )
}

export default VerticalMenu
