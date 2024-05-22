'use client'
import Link from 'next/link'
import { FaAngleDown } from 'react-icons/fa6'
import PopoverLayout from '@/components/headless-ui/PopoverLayout'

const PopoverToggle = () => <FaAngleDown style={{ marginLeft: '8px' }} />

const Dropdown = () => {
  return (
    <PopoverLayout
      toggler={<PopoverToggle />}
      placement="top"
      togglerClass="bg-slate-500/5 hover:bg-slate-500/10  py-1.5  rounded transition-all flex items-center justify-center"
    >
      <div className="z-50 bg-white shadow rounded border  transition-all duration-300 p-2 px-2 dark:bg-slate-800 dark:border-slate-700 w-max">
        <Link
          className="flex items-center py-2.5 px-3.5 rounded text-base transition-all duration-300 bg-transparent text-slate-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
          href=""
        >
          Windows 7/8/10
        </Link>
        <hr />
        <Link
          className="flex items-center py-2.5 px-3.5 rounded text-base transition-all duration-300 bg-transparent text-slate-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          href=""
        >
          Mac OS
        </Link>
        <hr />
        <Link
          className="flex items-center py-1.5 px-3.5 rounded text-base transition-all duration-300 bg-transparent text-slate-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          href=""
        >
          Ubuntu 18.04
        </Link>
        <Link
          className="flex items-center py-1.5 px-3.5 rounded text-base transition-all duration-300 bg-transparent text-slate-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          href=""
        >
          Ubuntu 16.04
        </Link>
      </div>
    </PopoverLayout>
  )
}

export default Dropdown
