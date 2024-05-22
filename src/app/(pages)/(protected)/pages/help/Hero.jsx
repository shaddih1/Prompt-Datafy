const Hero = () => {
  return (
    <section className="pt-36 pb-24 bg-slate-100">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="md:text-5xl/tight text-3xl font-semibold mb-6">
            How can we help?
          </h2>
          <p className="lg:text-lg text-slate-500 leading-7">
            Explore our knowledge badge to learn more about all the
            functionality Prompt is offering. If you don&apos;t find what you
            are looking, feel free to contact our support team.
          </p>
          <form className="w-full mt-12">
            <div className="relative flex justify-between items-center border bg-white rounded-md">
              <input
                className="w-full text-sm text-gray-700 border-0 rounded py-3 px-4 leading-tight focus:ring-0 focus:outline-none"
                id="grid-first-name"
                type="text"
                placeholder="Ask a question..."
              />
              <svg className="w-5 h-5 me-6" fill="none" aria-hidden="true">
                <path
                  d="m19 19-3.5-3.5"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx={11}
                  cy={11}
                  r={6}
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </form>
          <div className="mt-2">
            <p className="text-slate-500">
              <span className="uppercase">Recent searches:</span> How to prepare
              upload documents, Linking Payment Account
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
