import Image from 'next/image'
import Link from 'next/link'

//images
import google from '@/assets/images/buttons/google.png'
import store from '@/assets/images/buttons/store.png'
import logoDark from '@/assets/images/logo-dark.png'

const footerLinks = ['About', 'Privacy', 'Terms', 'Developers', 'Support']

const Footer = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="text-center">
          <div>
            <h2 className="md:text-3xl text-xl font-semibold my-5">
              Start offering your users a better experience
            </h2>
            <p className="text-slate-500">
              Start working with <span className="text-primary">Prompt</span> to
              showcase your app to thousands of people.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 my-10">
              <Link href="">
                <Image
                  alt="google"
                  width={192}
                  height={57}
                  src={google}
                  className="w-48"
                />
              </Link>
              <Link href="">
                <Image
                  alt="store"
                  width={192}
                  height={57}
                  src={store}
                  className="w-48"
                />
              </Link>
            </div>
          </div>

          <div>
            <ul className="flex flex-wrap items-center justify-center gap-5">
              {(footerLinks ?? []).map((title, idx) => {
                return (
                  <li
                    key={idx}
                    className="after:content-['-'] after:text-slate-500 after:font-extrabold"
                  >
                    <Link href="" className="hover:text-primary me-4">
                      {title}
                    </Link>
                  </li>
                )
              })}
              <li>
                <Link href="" className="hover:text-primary">
                  Careers&nbsp;
                  <span className="px-2 py-1 text-xs rounded-full text-primary bg-primary/10">
                    We &apos; re hiring
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
                alt="logo"
                width={126}
                height={32}
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

export default Footer
