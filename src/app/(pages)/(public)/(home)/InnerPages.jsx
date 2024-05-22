
import Link from 'next/link'
import Image from 'next/image'

const InnerPages = ({ innerPages }) => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Inner Pages
          </span>
          <h1 className="text-4xl mt-4 mb-14">Inner Pages</h1>
        </div>
        <div
          className="grid md:grid-cols-2 grid-cols-1 gap-6"
          data-aos="fade-up"
          data-duration={600}
        >
          {(innerPages ?? []).map((item, idx) => {
            return (
              <Link href={item.url} target="_blank" key={idx}>
                <div className="border p-2 rounded">
                  <Image
                    alt="innerPages"
                    width={514}
                    height={321}
                    src={item.image.src}
                  />
                </div>
                <h4 className="text-base text-center mt-4">{item.name}</h4>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default InnerPages
