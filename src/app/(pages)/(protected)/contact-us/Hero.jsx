const Hero = () => {
  return (
    <section className="bg-gray-100 lg:pt-28 sm:pb-36 pb-16 pt-36 relative">
      <div className="container">
        <div className="flex justify-center">
          <div className="lg:w-7/12 text-center">
            <h1 className="text-5xl/relaxed text-gray-700">Contact Us</h1>
            <p className="mb-6 md:text-lg text-gray-500">
              Please fill out the following form and we will get back to you
              shortly
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 w-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 40"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="shape-b"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <g id="curve" fill="#fff">
              <path
                d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z"
                id="Path"
              />
            </g>
          </g>
        </svg>
      </div>
    </section>
  )
}

export default Hero
