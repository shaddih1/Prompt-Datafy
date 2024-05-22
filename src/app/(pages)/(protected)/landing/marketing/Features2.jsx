import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

//images
import marketing from '@/assets/images/features/marketing.jpg'

const Features2 = () => {
  return (
    <div className="py-16 lg:py-32 overflow-x-hidden" data-aos="fade-up">
      <div className="container">
        <div className="relative">
          <div className="lg:absolute lg:max-w-md lg:translate-y-1/2 z-10 mb-14">
            <div className="bg-white shadow-lg border rounded-lg p-4 w-full">
              <div className="relative">
                <div className="before:w-20 before:h-20 before:absolute before:-bottom-12 before:-start-12 before:-z-10 before:bg-[url('../assets/images/pattern/dot2.svg')] hidden sm:block" />
                <span className="h-14 w-14 bg-primary/10 rounded-md flex justify-center items-center">
                  <svg
                    className="h-6 w-6 text-primary"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect
                        id="Rectangle-10"
                        x={0}
                        y={0}
                        width={24}
                        height={24}
                      />
                      <path
                        d="M16.3740377,19.9389434 L22.2226499,11.1660251 C22.4524142,10.8213786 22.3592838,10.3557266 22.0146373,10.1259623 C21.8914367,10.0438285 21.7466809,10 21.5986122,10 L17,10 L17,4.47708173 C17,4.06286817 16.6642136,3.72708173 16.25,3.72708173 C15.9992351,3.72708173 15.7650616,3.85240758 15.6259623,4.06105658 L9.7773501,12.8339749 C9.54758575,13.1786214 9.64071616,13.6442734 9.98536267,13.8740377 C10.1085633,13.9561715 10.2533191,14 10.4013878,14 L15,14 L15,19.5229183 C15,19.9371318 15.3357864,20.2729183 15.75,20.2729183 C16.0007649,20.2729183 16.2349384,20.1475924 16.3740377,19.9389434 Z"
                        id="Path-3"
                        fill="currentColor"
                      />
                      <path
                        d="M4.5,5 L9.5,5 C10.3284271,5 11,5.67157288 11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L4.5,8 C3.67157288,8 3,7.32842712 3,6.5 C3,5.67157288 3.67157288,5 4.5,5 Z M4.5,17 L9.5,17 C10.3284271,17 11,17.6715729 11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L4.5,20 C3.67157288,20 3,19.3284271 3,18.5 C3,17.6715729 3.67157288,17 4.5,17 Z M2.5,11 L6.5,11 C7.32842712,11 8,11.6715729 8,12.5 C8,13.3284271 7.32842712,14 6.5,14 L2.5,14 C1.67157288,14 1,13.3284271 1,12.5 C1,11.6715729 1.67157288,11 2.5,11 Z"
                        id="Combined-Shape"
                        fill="currentColor"
                        opacity="0.3"
                      />
                    </g>
                  </svg>
                </span>
                <h4 className="font-medium text-lg my-2">
                  Smart Campaign Monitoring
                </h4>
                <p className="text-gray-500">
                  Et harum quidem rerum facilis est et expedita distinctio at
                  libero tempore cum soluta nobis est eligendi optio cumque.
                </p>
                <div className="mt-5 flex items-center">
                  <Link
                    href=""
                    className="text-primary text-sm inline-flex items-center gap-2"
                  >
                    Learn more <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              alt="features-img"
              width={800}
              height={530}
              src={marketing}
              className="ms-auto rounded"
            />
            <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-end-8 after:-z-10 after:bg-[url('../assets/images/pattern/dot5.svg')] hidden sm:block" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features2
