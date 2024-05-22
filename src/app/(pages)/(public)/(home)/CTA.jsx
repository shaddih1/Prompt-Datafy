import Link from 'next/link'
import Image from 'next/image'

//image
import logoDark from '@/assets/images/logo-dark.png'
import { FaBagShopping } from 'react-icons/fa6'

const CTA = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="text-center">
          <div>
            <h2 className="md:text-3xl text-xl font-semibold my-5">
              Start creating delightful user experience
            </h2>
            <p className="text-slate-500">
              Start working with <span className="text-primary">Prompt</span> to
              showcase your app to thousands of people.
            </p>
            <div className="my-14">
              <Link
                href="#demo"
                className="mx-auto flex gap-3 items-center w-fit py-3 px-6 rounded border border-primary text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
              >
                <FaBagShopping /> View Demos
              </Link>
            </div>
          </div>
          <div>
            <ul className="flex flex-wrap items-center justify-center gap-5">
              <li className="after:content-['-'] after:text-slate-500 after:font-extrabold">
                <Link href="" className="hover:text-primary me-4">
                  About
                </Link>
              </li>
              <li className="after:content-['-'] after:text-slate-500 after:font-extrabold">
                <Link href="" className="hover:text-primary me-4">
                  Support
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-primary">
                  Version&nbsp;
                  <span className="px-2 py-1 text-xs rounded-full text-primary bg-primary/10">
                    v1.0
                  </span>
                </Link>
              </li>
            </ul>
            <p className="my-5">
              {new Date().getFullYear()} © Prompt. All rights reserved. Crafted
              by
            </p>
            <Link href="/">
              <Image
                width={126}
                height={32}
                alt="logoDark"
                src={logoDark}
                className="h-8 mx-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
