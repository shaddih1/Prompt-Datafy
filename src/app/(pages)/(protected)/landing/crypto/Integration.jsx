import Link from 'next/link'
import Image from 'next/image'

//image
import code from '@/assets/images/other/code.jpg'

const Integration = () => {
  return (
    <section className="py-24" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-6">
          <div className="lg:me-20">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
              <svg
                className="w-7 h-7 text-primary"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect id="bound" x={0} y={0} width={24} height={24} />
                  <path
                    d="M17.2718029,8.68536757 C16.8932864,8.28319382 16.9124644,7.65031935 17.3146382,7.27180288 C17.7168119,6.89328641 18.3496864,6.91246442 18.7282029,7.31463817 L22.7282029,11.5646382 C23.0906029,11.9496882 23.0906029,12.5503176 22.7282029,12.9353676 L18.7282029,17.1853676 C18.3496864,17.5875413 17.7168119,17.6067193 17.3146382,17.2282029 C16.9124644,16.8496864 16.8932864,16.2168119 17.2718029,15.8146382 L20.6267538,12.2500029 L17.2718029,8.68536757 Z M6.72819712,8.6853647 L3.37324625,12.25 L6.72819712,15.8146353 C7.10671359,16.2168091 7.08753558,16.8496835 6.68536183,17.2282 C6.28318808,17.6067165 5.65031361,17.5875384 5.27179713,17.1853647 L1.27179713,12.9353647 C0.909397125,12.5503147 0.909397125,11.9496853 1.27179713,11.5646353 L5.27179713,7.3146353 C5.65031361,6.91246155 6.28318808,6.89328354 6.68536183,7.27180001 C7.08753558,7.65031648 7.10671359,8.28319095 6.72819712,8.6853647 Z"
                    id="Combined-Shape"
                    fill="currentcolor"
                  />
                  <rect
                    id="Rectangle-28"
                    fill="currentcolor"
                    opacity="0.3"
                    transform="translate(12.000000, 12.000000) rotate(-345.000000) translate(-12.000000, -12.000000) "
                    x={11}
                    y={4}
                    width={2}
                    height={16}
                    rx={1}
                  />
                </g>
              </svg>
            </div>
            <h1 className="sm:text-3xl text-xl font-medium my-3">
              Easy to Integrate - SDK
            </h1>
            <p className="text-slate-500 mt-5 mb-4">
              Maecenas blandit aliquam sem, auctor accumsan mauris finibus
              pellentesque. In vestibulum ac nunc ut rutrum. Donec mollis
              viverra magna vel tincidunt.
            </p>
            <p className="text-slate-500 mt-5 mb-4">
              Ut faucibus libero non tortor commodo, ac faucibus lectus
              fermentum. Sed sit amet ornare turpis, ac lobortis urna.
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-12">
              <Link
                href=""
                className="py-3 px-6 rounded border border-primary text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
              >
                Explore the SDK
              </Link>
              <Link
                href=""
                className="py-3 px-6 rounded border-primary/5 text-primary bg-primary/5 hover:border-primary hover:bg-primary/10 hover:shadow hover:shadow-primary transition-all duration-500"
              >
                Documentation
              </Link>
            </div>
          </div>
          <div>
            <Image
              alt="code"
              width={500}
              height={347}
              src={code}
              className="lg:mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integration
