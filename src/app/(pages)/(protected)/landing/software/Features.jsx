import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

//data
import { Feature } from './data'

//images
import desktop from '@/assets/images/hero/desktop.png'
import desktop1 from '@/assets/images/features/desktop1.gif'

const Features = ({ features }) => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
            <div
              className="order-2 lg:order-1"
              data-aos="fade-right"
              data-aos-duration={600}
            >
              <span className="text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1">
                Free Cloud Account!
              </span>
              <h1 className="text-3xl/tight font-medium mt-3 mb-4">
                Smart auto deployment
              </h1>
              <p className="text-gray-500">
                Prompts automatically deploys your changes on the cloud
              </p>
              <div className="flex flex-col gap-4 mt-10">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
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
                        <rect id="bound" x={0} y={0} width={24} height={24} />
                        <path
                          d="M17,8 C16.4477153,8 16,7.55228475 16,7 C16,6.44771525 16.4477153,6 17,6 L18,6 C20.209139,6 22,7.790861 22,10 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,9.99305689 C2,7.7839179 3.790861,5.99305689 6,5.99305689 L7.00000482,5.99305689 C7.55228957,5.99305689 8.00000482,6.44077214 8.00000482,6.99305689 C8.00000482,7.54534164 7.55228957,7.99305689 7.00000482,7.99305689 L6,7.99305689 C4.8954305,7.99305689 4,8.88848739 4,9.99305689 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,10 C20,8.8954305 19.1045695,8 18,8 L17,8 Z"
                          id="Path-103"
                          fill="currentColor"
                          opacity="0.3"
                        />
                        <rect
                          id="Rectangle"
                          fill="currentColor"
                          opacity="0.3"
                          transform="translate(12.000000, 8.000000) scale(1, -1) rotate(-180.000000) translate(-12.000000, -8.000000) "
                          x={11}
                          y={2}
                          width={2}
                          height={12}
                          rx={1}
                        />
                        <path
                          d="M12,2.58578644 L14.2928932,0.292893219 C14.6834175,-0.0976310729 15.3165825,-0.0976310729 15.7071068,0.292893219 C16.0976311,0.683417511 16.0976311,1.31658249 15.7071068,1.70710678 L12.7071068,4.70710678 C12.3165825,5.09763107 11.6834175,5.09763107 11.2928932,4.70710678 L8.29289322,1.70710678 C7.90236893,1.31658249 7.90236893,0.683417511 8.29289322,0.292893219 C8.68341751,-0.0976310729 9.31658249,-0.0976310729 9.70710678,0.292893219 L12,2.58578644 Z"
                          id="Path-104"
                          fill="currentColor"
                          transform="translate(12.000000, 2.500000) scale(1, -1) translate(-12.000000, -2.500000) "
                        />
                      </g>
                    </svg>
                  </div>
                  <h1 className="font-medium">
                    Auto saves the files, one-click sync
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
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
                          id="Rectangle-5"
                          x={0}
                          y={0}
                          width={24}
                          height={24}
                        />
                        <path
                          d="M16.5428932,17.4571068 L11,11.9142136 L11,4 C11,3.44771525 11.4477153,3 12,3 C12.5522847,3 13,3.44771525 13,4 L13,11.0857864 L17.9571068,16.0428932 L20.1464466,13.8535534 C20.3417088,13.6582912 20.6582912,13.6582912 20.8535534,13.8535534 C20.9473216,13.9473216 21,14.0744985 21,14.2071068 L21,19.5 C21,19.7761424 20.7761424,20 20.5,20 L15.2071068,20 C14.9309644,20 14.7071068,19.7761424 14.7071068,19.5 C14.7071068,19.3673918 14.7597852,19.2402148 14.8535534,19.1464466 L16.5428932,17.4571068 Z"
                          id="Combined-Shape"
                          fill="currentColor"
                        />
                        <path
                          d="M7.24478854,17.1447885 L9.2464466,19.1464466 C9.34021479,19.2402148 9.39289321,19.3673918 9.39289321,19.5 C9.39289321,19.7761424 9.16903559,20 8.89289321,20 L3.52893218,20 C3.25278981,20 3.02893218,19.7761424 3.02893218,19.5 L3.02893218,14.136039 C3.02893218,14.0034307 3.0816106,13.8762538 3.17537879,13.7824856 C3.37064094,13.5872234 3.68722343,13.5872234 3.88248557,13.7824856 L5.82567301,15.725673 L8.85405776,13.1631936 L10.1459422,14.6899662 L7.24478854,17.1447885 Z"
                          id="Combined-Shape"
                          fill="currentColor"
                          opacity="0.3"
                        />
                      </g>
                    </svg>
                  </div>
                  <h1 className="font-medium">
                    Auto track every changes/revision
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
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
                        <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
                        <path
                          d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                          id="Combined-Shape"
                          fill="currentColor"
                          opacity="0.3"
                        />
                        <path
                          d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                          id="Combined-Shape"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                  <h1 className="font-medium">
                    Modern way to collaborate with team
                  </h1>
                </div>
              </div>
            </div>
            <div
              className="order-1 lg:order-2"
              data-aos="fade-left"
              data-aos-duration={700}
            >
              <Image alt="desktop1" width={496} height={372} src={desktop1} />
            </div>
          </div>
        </div>
        <div className="py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
            <div>
              <Image
                alt="desktop1"
                width={496}
                height={335}
                src={desktop}
                data-aos="fade-right"
                data-aos-duration={600}
              />
            </div>
            <div data-aos="fade-left" data-aos-duration={700}>
              <span className="text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1">
                Auto Sync
              </span>
              <h1 className="text-3xl/tight font-medium mt-3 mb-4">
                AutoSync deployment
              </h1>
              <p className="text-gray-500">
                Prompts automatically sync your scheduled sync configuration
              </p>
              <div className="flex flex-col gap-4 mt-10">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
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
                        <rect id="bound" x={0} y={0} width={24} height={24} />
                        <path
                          d="M18.6225,9.75 L18.75,9.75 C19.9926407,9.75 21,10.7573593 21,12 C21,13.2426407 19.9926407,14.25 18.75,14.25 L18.6854912,14.249994 C18.4911876,14.250769 18.3158978,14.366855 18.2393549,14.5454486 C18.1556809,14.7351461 18.1942911,14.948087 18.3278301,15.0846699 L18.372535,15.129375 C18.7950334,15.5514036 19.03243,16.1240792 19.03243,16.72125 C19.03243,17.3184208 18.7950334,17.8910964 18.373125,18.312535 C17.9510964,18.7350334 17.3784208,18.97243 16.78125,18.97243 C16.1840792,18.97243 15.6114036,18.7350334 15.1896699,18.3128301 L15.1505513,18.2736469 C15.008087,18.1342911 14.7951461,18.0956809 14.6054486,18.1793549 C14.426855,18.2558978 14.310769,18.4311876 14.31,18.6225 L14.31,18.75 C14.31,19.9926407 13.3026407,21 12.06,21 C10.8173593,21 9.81,19.9926407 9.81,18.75 C9.80552409,18.4999185 9.67898539,18.3229986 9.44717599,18.2361469 C9.26485393,18.1556809 9.05191298,18.1942911 8.91533009,18.3278301 L8.870625,18.372535 C8.44859642,18.7950334 7.87592081,19.03243 7.27875,19.03243 C6.68157919,19.03243 6.10890358,18.7950334 5.68746499,18.373125 C5.26496665,17.9510964 5.02757002,17.3784208 5.02757002,16.78125 C5.02757002,16.1840792 5.26496665,15.6114036 5.68716991,15.1896699 L5.72635306,15.1505513 C5.86570889,15.008087 5.90431906,14.7951461 5.82064513,14.6054486 C5.74410223,14.426855 5.56881236,14.310769 5.3775,14.31 L5.25,14.31 C4.00735931,14.31 3,13.3026407 3,12.06 C3,10.8173593 4.00735931,9.81 5.25,9.81 C5.50008154,9.80552409 5.67700139,9.67898539 5.76385306,9.44717599 C5.84431906,9.26485393 5.80570889,9.05191298 5.67216991,8.91533009 L5.62746499,8.870625 C5.20496665,8.44859642 4.96757002,7.87592081 4.96757002,7.27875 C4.96757002,6.68157919 5.20496665,6.10890358 5.626875,5.68746499 C6.04890358,5.26496665 6.62157919,5.02757002 7.21875,5.02757002 C7.81592081,5.02757002 8.38859642,5.26496665 8.81033009,5.68716991 L8.84944872,5.72635306 C8.99191298,5.86570889 9.20485393,5.90431906 9.38717599,5.82385306 L9.49484664,5.80114977 C9.65041313,5.71688974 9.7492905,5.55401473 9.75,5.3775 L9.75,5.25 C9.75,4.00735931 10.7573593,3 12,3 C13.2426407,3 14.25,4.00735931 14.25,5.25 L14.249994,5.31450877 C14.250769,5.50881236 14.366855,5.68410223 14.552824,5.76385306 C14.7351461,5.84431906 14.948087,5.80570889 15.0846699,5.67216991 L15.129375,5.62746499 C15.5514036,5.20496665 16.1240792,4.96757002 16.72125,4.96757002 C17.3184208,4.96757002 17.8910964,5.20496665 18.312535,5.626875 C18.7350334,6.04890358 18.97243,6.62157919 18.97243,7.21875 C18.97243,7.81592081 18.7350334,8.38859642 18.3128301,8.81033009 L18.2736469,8.84944872 C18.1342911,8.99191298 18.0956809,9.20485393 18.1761469,9.38717599 L18.1988502,9.49484664 C18.2831103,9.65041313 18.4459853,9.7492905 18.6225,9.75 Z"
                          id="Combined-Shape"
                          fill="currentColor"
                          opacity="0.3"
                        />
                        <path
                          d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
                          id="Path"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                  <h1 className="font-medium">
                    Auto saves the files, one-click sync
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
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
                          id="Rectangle-5"
                          x={0}
                          y={0}
                          width={24}
                          height={24}
                        />
                        <path
                          d="M6,7 C7.1045695,7 8,6.1045695 8,5 C8,3.8954305 7.1045695,3 6,3 C4.8954305,3 4,3.8954305 4,5 C4,6.1045695 4.8954305,7 6,7 Z M6,9 C3.790861,9 2,7.209139 2,5 C2,2.790861 3.790861,1 6,1 C8.209139,1 10,2.790861 10,5 C10,7.209139 8.209139,9 6,9 Z"
                          id="Oval-7"
                          fill="currentColor"
                        />
                        <path
                          d="M7,11.4648712 L7,17 C7,18.1045695 7.8954305,19 9,19 L15,19 L15,21 L9,21 C6.790861,21 5,19.209139 5,17 L5,8 L5,7 L7,7 L7,8 C7,9.1045695 7.8954305,10 9,10 L15,10 L15,12 L9,12 C8.27142571,12 7.58834673,11.8052114 7,11.4648712 Z"
                          id="Combined-Shape"
                          fill="currentColor"
                          opacity="0.3"
                        />
                        <path
                          d="M18,22 C19.1045695,22 20,21.1045695 20,20 C20,18.8954305 19.1045695,18 18,18 C16.8954305,18 16,18.8954305 16,20 C16,21.1045695 16.8954305,22 18,22 Z M18,24 C15.790861,24 14,22.209139 14,20 C14,17.790861 15.790861,16 18,16 C20.209139,16 22,17.790861 22,20 C22,22.209139 20.209139,24 18,24 Z"
                          id="Oval-7-Copy"
                          fill="currentColor"
                        />
                        <path
                          d="M18,13 C19.1045695,13 20,12.1045695 20,11 C20,9.8954305 19.1045695,9 18,9 C16.8954305,9 16,9.8954305 16,11 C16,12.1045695 16.8954305,13 18,13 Z M18,15 C15.790861,15 14,13.209139 14,11 C14,8.790861 15.790861,7 18,7 C20.209139,7 22,8.790861 22,11 C22,13.209139 20.209139,15 18,15 Z"
                          id="Oval-7-Copy-3"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                  <h1 className="font-medium">
                    Auto track every changes/revision
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
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
                        <rect id="bound" x={0} y={0} width={24} height={24} />
                        <path
                          d="M9,15 L7.5,15 C6.67157288,15 6,15.6715729 6,16.5 C6,17.3284271 6.67157288,18 7.5,18 C8.32842712,18 9,17.3284271 9,16.5 L9,15 Z M9,15 L9,9 L15,9 L15,15 L9,15 Z M15,16.5 C15,17.3284271 15.6715729,18 16.5,18 C17.3284271,18 18,17.3284271 18,16.5 C18,15.6715729 17.3284271,15 16.5,15 L15,15 L15,16.5 Z M16.5,9 C17.3284271,9 18,8.32842712 18,7.5 C18,6.67157288 17.3284271,6 16.5,6 C15.6715729,6 15,6.67157288 15,7.5 L15,9 L16.5,9 Z M9,7.5 C9,6.67157288 8.32842712,6 7.5,6 C6.67157288,6 6,6.67157288 6,7.5 C6,8.32842712 6.67157288,9 7.5,9 L9,9 L9,7.5 Z M11,13 L13,13 L13,11 L11,11 L11,13 Z M13,11 L13,7.5 C13,5.56700338 14.5670034,4 16.5,4 C18.4329966,4 20,5.56700338 20,7.5 C20,9.43299662 18.4329966,11 16.5,11 L13,11 Z M16.5,13 C18.4329966,13 20,14.5670034 20,16.5 C20,18.4329966 18.4329966,20 16.5,20 C14.5670034,20 13,18.4329966 13,16.5 L13,13 L16.5,13 Z M11,16.5 C11,18.4329966 9.43299662,20 7.5,20 C5.56700338,20 4,18.4329966 4,16.5 C4,14.5670034 5.56700338,13 7.5,13 L11,13 L11,16.5 Z M7.5,11 C5.56700338,11 4,9.43299662 4,7.5 C4,5.56700338 5.56700338,4 7.5,4 C9.43299662,4 11,5.56700338 11,7.5 L11,11 L7.5,11 Z"
                          id="Path-2"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                  <h1 className="font-medium">
                    A powerful command line interface
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" data-aos="fade-up" data-aos-duration={700}>
        <div className="bg-yellow-50 p-12">
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center">
            <div className="lg:col-span-2">
              <h4 className="text-base mb-10">Prompt works on Every Device</h4>
              <div className="flex flex-wrap gap-10">
                {(features ?? []).map((feature, idx) => {
                  return (
                    <div className="text-center" key={idx}>
                      {feature.deviceIcon}
                      <h6>{feature.deviceName}</h6>
                    </div>
                  )
                })}
              </div>
            </div>
            <div>
              <div className="inline-flex mt-14">
                <Link
                  href=""
                  className="flex gap-3 items-center py-2 px-4 rounded border border-primary bg-primary text-white hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
                >
                  Get Prompt for Free
                  <FaArrowRight />
                </Link>
              </div>
              <div className="mt-2">
                <p className="inline-flex text-xs">
                  Looking for other platforms?
                  <a href="#" className="hover:text-primary">
                    Click Here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
