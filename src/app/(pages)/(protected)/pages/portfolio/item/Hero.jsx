import Link from 'next/link'

const Hero = () => {
  return (
    <section className="pt-36 pb-24">
      <div className="container">
        <div className="text-center">
          <h2 className="md:text-5xl/tight text-3xl font-semibold mb-6">
            Awesome Mobile App
          </h2>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-3 gap-6 items-center border-y py-8 mt-14">
          <div>
            <span>Client</span>
            <h4>Scarlet Johnson</h4>
          </div>
          <div>
            <span>Category</span>
            <h4>Mobile App</h4>
          </div>
          <div>
            <span>Crafted Date</span>
            <h4>Oct 12, 2019</h4>
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-end md:gap-5">
              <div>
                <h4 className="font-medium text-slate-400 uppercase">Share:</h4>
              </div>
              <div>
                <Link href="">
                  <svg
                    className="w-5 h-5 text-primary transition-all"
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
              </div>
              <div>
                <Link href="">
                  <svg
                    className="w-5 h-5 text-green-500 transition-all"
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
              </div>
              <div>
                <Link href="">
                  <svg
                    className="w-5 h-5 text-red-500 transition-all"
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
              </div>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2">
            <Link
              href=""
              className="py-3 px-6 rounded border border-primary text-primary hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
            >
              Load More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
