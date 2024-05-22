'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FormInput } from '@/components'

//images
import logoDark from '@/assets/images/logo-dark.png'

const footerLinks = ['Changelog', 'FAQ', 'Press kit', 'Contact us']
const Footer = () => {
  const { control, handleSubmit } = useForm()
  return (
    <footer className="pt-10 pb-6">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl/tight font-medium my-5">
            Be the first to know!
          </h2>
          <p className="text-gray-500">
            We &nbsp;ll inform you about new updates, features, but no spam, we
            promise.
          </p>
          <form
            onSubmit={handleSubmit(() => {})}
            className="flex w-fit mx-auto items-center justify-center gap-2 my-10"
          >
            <FormInput
              control={control}
              noValidate
              type="email"
              name="Email"
              placeholder="Your email"
              className="text-sm rounded border-gray-200 focus:border-gray-400 focus:ring-0 bg-transparent py-2 px-4"
              containerClassName="flex items-center gap-2"
            />
            <button
              type="submit"
              className="w-full py-2 px-4 rounded text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="border-b" />
      <div className="container">
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-7">
            {new Date().getFullYear()}© Prompt. All rights reserved. Crafted by
            <Link
              href=""
              className="text-gray-800 hover:text-primary transition-all"
            >
              Coderthemes
            </Link>
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-10 mb-8">
            {(footerLinks || []).map((link, idx) => {
              return (
                <li key={idx}>
                  <Link href="">{link}</Link>
                </li>
              )
            })}
            <li>
              <Link href="" className="hover:text-primary">
                Careers&nbsp;
                <span className="px-2 py-1 text-xs rounded-full text-primary bg-primary/10">
                  We&nbsp;re hiring
                </span>
              </Link>
            </li>
          </ul>
          <Link href="/">
            <Image
              width={126}
              alt={'logo'}
              height={32}
              src={logoDark}
              className="h-8 mx-auto"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
