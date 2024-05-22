'use client'
import Link from 'next/link'
import Image from 'next/image'
import Tippy from '@tippyjs/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

//images
import blogImg3 from '@/assets/images/blog/blog-3.png'
import blogImg2 from '@/assets/images/blog/blog-2.png'
import avatar2 from '@/assets/images/avatars/img-2.jpg'

//style
import 'tippy.js/dist/tippy.css'

const PostNavigation = () => {
  return (
    <section>
      <div className="container">
        <div className="border-t mb-5" />
        <div className="grid md:grid-cols-4 grid-cols-1 items-center">
          <div>
            <div>
              <div className="flex items-center justify-start">
                <Tippy
                  className="!bg-transparent"
                  arrow={false}
                  content={
                    <div
                      className="bg-white shadow-lg rounded-md transition-all z-50 p-4 pb-1 w-72"
                      role="tooltip"
                    >
                      <div className="flex items-center gap-5">
                        <Image
                          alt="tooltipimg"
                          width={64}
                          height={43}
                          src={blogImg3}
                          className="w-16 rounded"
                        />
                        <div>
                          <h6 className="text-sm text-gray-700">
                            Introducing new blazzing fast user interface
                          </h6>
                          <p className="text-sm text-gray-500">
                            by Emily Blunt
                          </p>
                        </div>
                      </div>
                      <div className="bg-white w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" />
                    </div>
                  }
                >
                  <button className="flex gap-3 items-center border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-500 hover:shadow-lg py-2 px-5">
                    <FaArrowLeft />
                    Prev Post
                  </button>
                </Tippy>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="my-5 md:my-0">
              <div className="flex md:justify-center justify-start items-center gap-4">
                <Image
                  width={48}
                  height={48}
                  alt="avatar"
                  src={avatar2}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h6 className="text-sm transition-all hover:text-primary">
                    <Link href="">Emily Blunt</Link>
                  </h6>
                  <p className="text-sm text-gray-500">
                    I write about the latest trend in web design and
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center md:justify-end justify-start">
            <Tippy
              className="!bg-transparent"
              arrow={false}
              content={
                <div
                  className="bg-white shadow-lg rounded-md transition-all z-50 p-4 w-72"
                  role="tooltip"
                >
                  <div className="flex items-center gap-5">
                    <Image
                      alt="tooltipimg"
                      width={64}
                      height={43}
                      src={blogImg2}
                      className="w-16 rounded"
                    />
                    <div>
                      <h6 className="text-sm text-gray-700">
                        What you should know before...
                      </h6>
                      <p className="text-sm text-gray-500">by Emily Blunt</p>
                    </div>
                  </div>
                  <div className="bg-white w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]" />
                </div>
              }
            >
              <button className="flex items-center gap-3 border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-500 hover:shadow-lg py-2 px-5">
                Next Post <FaArrowRight />
              </button>
            </Tippy>
          </div>
        </div>
        <div className="border-b mt-5" />
      </div>
    </section>
  )
}

export default PostNavigation
