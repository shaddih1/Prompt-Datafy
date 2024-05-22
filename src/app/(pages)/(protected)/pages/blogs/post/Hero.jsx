import Link from 'next/link'
import Image from 'next/image'

//image
import avatar1 from '@/assets/images/avatars/img-1.jpg'

const Hero = () => {
  return (
    <section className="pt-20">
      <div className="container">
        <div className="py-14">
          <div className="flex flex-wrap items-center gap-2 bg-gray-100 py-2 px-3">
            <Link href="" className="transition-all hover:text-primary">
              Home
            </Link>
            /
            <Link href="" className="transition-all hover:text-primary">
              Blog
            </Link>
            /<p className="text-gray-500">Announcing-the-free-upgrade</p>
          </div>
        </div>
        <div className="lg:w-4/5">
          <span className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2">
            <a href="#">Announcement</a>
          </span>
          <h1 className="lg:text-5xl/snug text-3xl/snug mt-3">
            Announcing the free upgrae for the subscribed plans
          </h1>
        </div>
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3 mt-7">
              <Image
                width={44}
                height={44}
                src={avatar1}
                alt="avatar"
                className="h-11 w-11 rounded-full"
              />
              <div>
                <h6 className="text-sm transition-all hover:text-primary">
                  <a href="#">Emily Blunt</a>
                </h6>
                <p className="text-sm text-gray-500">
                  11 Mar, 2020 · 3 min read
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <p className="text-sm text-gray-500">SHARE:</p>
              <div className="flex gap-3">
                <span>
                  <Link href="">
                    <svg
                      className="w-5 h-5 text-blue-500"
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
                </span>
                <span>
                  <Link href="">
                    <svg
                      className="w-5 h-5 text-teal-500"
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
                </span>
                <span>
                  <Link href="">
                    <svg
                      className="w-5 h-5 text-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
