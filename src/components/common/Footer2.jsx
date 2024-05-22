import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from './data'

//image
import logoDark from '@/assets/images/logo-dark.png'

const Footer2 = ({ socialIcon }) => {
  return (
    <footer className="bg-gray-100">
      <div className="py-6">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-2xl font-medium mt-3 mb-2">
                Ready to get started?
              </h1>
              <p className="text-gray-500">
                Create your free 14-day trial account now
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-start lg:justify-end gap-7 mt-5 lg:mt-0">
              <button className="flex items-center">
                <Link
                  href=""
                  className="bg-primary text-white rounded-full hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 py-2 px-4"
                >
                  Try it free for 14 days
                </Link>
              </button>
              <Link href="" className="transition-all hover:text-primary">
                Chat with us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b" />
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-14 py-6">
          <div>
            <Link href="/">
              <Image
                alt="logo"
                width={126}
                height={32}
                src={logoDark}
                className="h-8"
              />
            </Link>
            <p className="text-gray-500/80 mt-5 w-4/5">
              Make your web application stand out with high-quality landing page
            </p>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row gap-14 flex-wrap sm:flex-nowrap justify-between">
              {Object.keys(footerLinks)
                .slice(0, 3)
                .map((title, idx) => {
                  return (
                    <div className="flex flex-col gap-3" key={idx}>
                      <h5 className="mb-3 uppercase">{title}</h5>
                      {footerLinks[title].links.map((link, idx) => {
                        return (
                          <div className="text-gray-500/80" key={idx}>
                            <Link href="">{link}</Link>
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        <div className="border-b" />
        <div
          className={`${
            socialIcon ? 'grid sm:grid-cols-2' : 'flex justify-around'
          } text-center sm:text-start gap-6 py-5`}
        >
          <p className="text-gray-500/80 text-sm">
            {new Date().getFullYear()}© Prompt. All rights reserved. Crafted
            by&nbsp;
            <Link
              href=""
              className="text-gray-800 hover:text-primary transition-all"
            >
              Coderthemes
            </Link>
          </p>
          {socialIcon && (
            <div className="flex justify-center sm:justify-end gap-7">
              <div>
                <Link href="">
                  <svg
                    className="w-5 h-5 text-slate-500/90 hover:text-primary transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
              </div>
              <div>
                <Link href="">
                  <svg
                    className="w-5 h-5 text-slate-500/90 hover:text-primary transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </Link>
              </div>
              <div>
                <Link href="">
                  <svg
                    className="w-5 h-5 text-slate-500/90 hover:text-primary transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer2
