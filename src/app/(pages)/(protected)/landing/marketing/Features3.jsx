import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

const checkIcon = (
  <svg
    className="h-5 w-5 text-green-500"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

const Features3 = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div
          className="grid lg:grid-cols-3 grid-cols-1 gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="lg:col-span-2">
            <span className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg
                className="h-6 w-6 text-primary"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect id="bound" x={0} y={0} width={24} height={24} />
                  <path
                    d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z"
                    id="Combined-Shape"
                    fill="currentColor"
                  />
                  <path
                    d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z"
                    id="Combined-Shape"
                    fill="currentColor"
                    opacity="0.3"
                  />
                </g>
              </svg>
            </span>
            <h1 className="text-3xl/tight font-medium mt-5 mb-4">
              Advanced Features
            </h1>
            <p className="text-gray-500">
              Aenean sagittis tellus lacus, nec aliquet mi gravida at. Aenean
              velit purus, consectetur ut lobortis ac, dignissim id mi.
            </p>
            <div className="mt-5 flex items-center">
              <Link
                href=""
                className="text-primary text-sm inline-flex gap-2 items-center"
              >
                Learn more <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg border rounded-lg p-10 lg:w-full md:w-1/2 sm:w-3/4 w-full">
              <div className="flex flex-col gap-5">
                <h6 className="flex items-center gap-3 font-medium text-sm">
                  {checkIcon}
                  Unlimited Campaigns
                </h6>
                <h6 className="flex items-center gap-3 font-medium text-sm">
                  {checkIcon}
                  Detailed Reporting
                </h6>
                <h6 className="flex items-center gap-3 font-medium text-sm">
                  {checkIcon}
                  Auto Schedule Tuning
                </h6>
                <h6 className="flex items-center gap-3 font-medium text-sm">
                  {checkIcon}
                  Smart Analytics
                </h6>
                <h6 className="flex items-center gap-3 font-medium text-sm">
                  {checkIcon}
                  Notifications
                </h6>
                <h6 className="flex items-center gap-4 font-medium text-sm">
                  <FaArrowRight size={20} color="#22C55E" />
                  <p className="text-sm">And More </p>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features3
