import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from './data'

//images
import logoDark from '@/assets/images/logo-dark.png'

const Footer3 = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container">
        <div className="py-14 pb-10">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 pt-14">
            <div>
              <Link href="/">
                <Image
                  width={128}
                  height={32}
                  alt="logo"
                  src={logoDark}
                  className="w-32 mb-3"
                />
              </Link>
              <p className="text-sm/relaxed tracking-wider text-gray-500">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit sed consequuntur ratione voluptatem sequi nesciunt.
              </p>
            </div>
            <div>
              <div className="flex justify-start sm:justify-end lg:gap-32 gap-14">
                {Object.keys(footerLinks)
                  .slice(0, 2)
                  .map((title, idx) => {
                    return (
                      <div className="flex flex-col gap-4 text-sm" key={idx}>
                        <h6 className="mb-3">{title}</h6>
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
        </div>
        <div className="border-b" />
        <div className="py-5">
          <div className="grid sm:grid-cols-2 text-center sm:text-start gap-6">
            <div>
              <p className="text-gray-500/80 text-sm">
                {new Date().getFullYear()}© Prompt. All rights reserved.
                Crafted by&nbsp;
                <Link
                  href=""
                  className="text-gray-800 hover:text-primary transition-all"
                >
                  Coderthemes
                </Link>
              </p>
            </div>
            <div className="flex justify-center sm:justify-end gap-7">
              <div>
                <Link href="">
                  <svg
                    className="w-5 h-5 text-gray-600 hover:text-primary transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
              </div>
              <div>
                <Link href="">
                  <svg
                    className="w-5 h-5 text-gray-600 hover:text-primary transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </Link>
              </div>
              <div>
                <Link href="">
                  <svg
                    className="w-5 h-5 text-gray-600 hover:text-primary transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x={2} y={9} width={4} height={12} />
                    <circle cx={4} cy={4} r={2} />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer3
