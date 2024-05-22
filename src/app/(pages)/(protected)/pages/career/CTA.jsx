import Link from 'next/link'

const CTA = () => {
  return (
    <section className="lg:py-24 py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="border rounded-md p-8">
              <h1 className="text-xl mb-3">Get in touch</h1>
              <p className="text-gray-500">
                Don&apos;t find suitable opening? We&apos;d still love to learn
                more about you. Contact us and we&apos;ll reach out to have
                interesting conversation!
              </p>
              <button className="mt-10 flex items-center">
                <Link
                  href=""
                  className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-500 focus:shadow-none focus:outline focus:outline-primary/40 py-2 px-4"
                >
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
          <div>
            <div className="border rounded-md p-8">
              <h1 className="text-xl mb-3">Meet the team</h1>
              <p className="text-gray-500">
                Learn more about us and who all work at Prompt. You will get
                chance to work with everyone in the team.
              </p>
              <button className="mt-10 flex items-center">
                <Link
                  href=""
                  className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-500focus:shadow-none focus:outline focus:outline-primary/40 py-2 px-4"
                >
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
