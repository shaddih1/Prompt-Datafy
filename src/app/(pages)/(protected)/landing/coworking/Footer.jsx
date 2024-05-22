import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const SubscribeInput = dynamic(() => import('./SubscribeInput'))
import { FaEnvelope } from 'react-icons/fa6'

//data
import { footerLinks } from '@/components/common/data'

//images
import logoDark from '@/assets/images/logo-dark.png'
import { cn } from '@/helpers/cn'

const Footer = () => {
  return (
    <div className="py-20 bg-primary/10">
      <div className="container">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-4 sm:col-span-4 lg:col-span-1">
            <Link href="/">
              <Image
                width={128}
                height={32}
                alt="dark-logo"
                src={logoDark}
                className="w-32"
              />
            </Link>
            <div className="mt-5">
              <p className="text-base">
                At vero eos et accusamus et iusto dignissimos ducimus odio.
              </p>
              <p className="text-sm lg:mt-16 mt-7">
                Prompt {new Date().getFullYear()} . All rights reserved.
              </p>
            </div>
          </div>
          {Object.keys(footerLinks)
            .slice(2, 4)
            .map((title, idx) => {
              return (
                <div
                  className={cn(
                    'col-span-4 md:col-span-1 lg:col-span-1',
                    idx == 0 ? 'md:mx-auto' : ''
                  )}
                  key={idx}
                >
                  <h5 className="mb-3 uppercase text-sm font-semibold">
                    {title}
                  </h5>
                  <ul>
                    {footerLinks[title].links.map((link, idx) => {
                      return (
                        <li className="py-1.5" key={idx}>
                          <Link
                            href=""
                            className="text-sm hover:text-slate-700 "
                          >
                            {link}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          <div className="col-span-4 md:col-span-2 lg:col-span-1">
            <h5 className="text-sm font-semibold uppercase">
              Subscribe To Newsletters
            </h5>
            <ul className="mt-4">
              <li className="py-1.5">
                <div className="lg:flex items-center gap-5 border rounded-md bg-white">
                  <div className="flex items-center w-full justify-between">
                    <SubscribeInput />
                    <Link
                      href=""
                      className="text-white rounded-r-md text-sm py-[10px] px-4 duration-300 uppercase bg-primary hover:bg-primary/90"
                    >
                      <FaEnvelope size={20} />
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
