import Link from 'next/link'
import Image from 'next/image'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import SubscriptionForm from './SubscriptionForm'
import Hero from './Hero'
import BlogPost1 from './BlogPost1'
import BlogPost2 from './BlogPost2'
import Footer3 from '@/components/common/Footer3'

//data
import { post1, post2 } from './data'

//images
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'
import blogImg from '@/assets/images/blog/post-bg.png'

const tags = [
  'Business',
  'Community',
  'Announcement',
  'Tutorials',
  'Resources',
  'Interview',
]

export const metadata = {
  title: 'Blog',
}

const BlogList = () => {
  return (
    <>
      <div className="text-gray-700">
        <Hero />
        <section className="py-24">
          <div className="container">
            <div className="flex items-center gap-2">
              <p>Tags:</p>
              <div className="flex flex-wrap items-center gap-1">
                {tags.map((tag, idx) => {
                  return (
                    <Link
                      key={idx}
                      href=""
                      className="border border-gray-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"
                    >
                      {tag}
                    </Link>
                  )
                })}
              </div>
            </div>
            <div
              className="grid lg:grid-cols-3 grid-cols-1 gap-10 items-center lg:py-16 py-14"
              data-aos="fade-up"
              data-aos-duration={300}
            >
              <BlogPost1 post={post1[0]} />

              <SubscriptionForm />
            </div>
            <div
              className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:py-16 py-14"
              data-aos="fade-up"
            >
              {(post2 ?? []).map((item, idx) => (
                <div key={idx}>
                  <BlogPost2 post={item} />
                </div>
              ))}
            </div>
            <div
              className="grid lg:grid-cols-3 grid-cols-1 gap-10 items-center lg:py-16 py-14"
              data-aos="fade-up"
            >
              <BlogPost1 post={post1[1]} />
              <div>
                <div className="border relative shadow-xl rounded-lg w-full">
                  <div className="relative">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 right-4 text-sm bg-red-500 text-white rounded py-1 px-3">
                      Resource
                    </div>
                    <Image
                      width={334}
                      height={223}
                      alt="blogImg"
                      src={blogImg}
                      className="w-full"
                    />
                    <div className="absolute right-5 bottom-3 left-5 text-white">
                      <h2 className="text-2xl">
                        <Link href="">
                          Top 10 ideas to improve the team productivity
                        </Link>
                      </h2>
                      <div className="flex mt-3">
                        <Link href="" className="ms-1 -me-3 shadow-lg">
                          <Image
                            src={avatar1}
                            alt="image"
                            width={32}
                            height={32}
                            className="w-8 h-8 shadow-lg border-2 border-white rounded-full"
                          />
                        </Link>
                        <Link href="" className="ms-1 -me-3 shadow-lg">
                          <Image
                            width={32}
                            height={40}
                            src={avatar2}
                            alt="image"
                            className="w-8 h-8 shadow-lg border-2 border-white rounded-full"
                          />
                        </Link>
                        <Link href="" className="ms-1 -me-3 shadow-lg">
                          <Image
                            width={32}
                            height={40}
                            src={avatar3}
                            alt="image"
                            className="w-8 h-8 shadow-lg border-2 border-white rounded-full"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="grid lg:grid-cols-3 gap-6 lg:py-16 py-14"
              data-aos="fade-up"
            >
              {(post2 ?? []).map((item, idx) => (
                <div key={idx}>
                  <BlogPost2 post={item} />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="flex items-center">
                <Link
                  href=""
                  className="flex gap-3 items-center border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"
                >
                  <FaArrowLeft /> Previous
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  href=""
                  className="flex items-center gap-3 border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"
                >
                  Next <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer3 />
      </div>
    </>
  )
}

export default BlogList
