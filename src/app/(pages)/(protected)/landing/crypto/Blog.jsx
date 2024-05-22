import Link from 'next/link'
import Image from 'next/image'

//iamges
import blog1 from '@/assets/images/blog/blog-1.png'
import blog2 from '@/assets/images/blog/blog-2.png'
import blog3 from '@/assets/images/blog/blog-3.png'

const Blog = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center">
          <h1 className="text-3xl font-medium my-3">Useful Reading</h1>
          <p className="text-slate-500 mt-5 mb-4">
            Few articles to read to know more about cryptocurrency
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
          <div>
            <div
              className="relative"
              data-aos="fade-up"
              data-aos-duration={300}
            >
              <span
                className="absolute top-3 bg-orange-500 p-1 pe-6 text-sm font-semibold text-white"
                style={{
                  clipPath:
                    'polygon(0% 0%, 100% 0, 90% 49%, 100% 99%, 0% 100%)',
                }}
              >
                Announcement
              </span>
              <Image
                alt="blog1"
                width={350}
                height={232}
                src={blog1}
                className="rounded-md"
              />
            </div>
            <p className="text-slate-500 mt-5">May 19 2020 . 5 min read</p>
            <h4 className="mt-1 text-lg">
              <Link href="">Introducing blazing fast new user interface</Link>
            </h4>
          </div>
          <div>
            <div
              className="relative"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <span
                className="absolute top-3 bg-red-500 p-1 pe-6 text-sm font-semibold text-white"
                style={{
                  clipPath:
                    'polygon(0% 0%, 100% 0, 90% 49%, 100% 99%, 0% 100%)',
                }}
              >
                Bitcoin
              </span>
              <Image
                alt="blog2"
                width={350}
                height={232}
                src={blog3}
                className="rounded-md"
              />
            </div>
            <p className="text-slate-500 mt-5">May 18 2020 . 8 min read</p>
            <h4 className="mt-1 text-lg">
              <Link href="">What you should know before buying bitcoin</Link>
            </h4>
          </div>
          <div>
            <div
              className="relative"
              data-aos="fade-up"
              data-aos-duration={900}
            >
              <span
                className="absolute top-3 bg-blue-500 p-1 pe-6 text-sm font-semibold text-white"
                style={{
                  clipPath:
                    'polygon(0% 0%, 100% 0, 90% 49%, 100% 99%, 0% 100%)',
                }}
              >
                Event
              </span>
              <Image
                alt="blog3"
                width={350}
                height={232}
                src={blog2}
                className="rounded-md"
              />
            </div>
            <p className="text-slate-500 mt-5">May 13 2020 . 2 min read</p>
            <h4 className="mt-1 text-lg">
              <Link href="">A biggest crypto event to attend this month</Link>
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
