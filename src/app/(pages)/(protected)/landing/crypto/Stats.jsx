'use client'
import Image from 'next/image'
import CountUp from 'react-countup'

//image
import whiteWave from '@/assets/images/shapes/white-wave.svg'

const Stats = () => {
  // const countUpValue1=useCountUp({})
  return (
    <section className="py-24 bg-slate-500/10 relative" data-aos="fade-up">
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <Image src={whiteWave} alt="svg" className="w-full -scale-x-100" />
      </div>
      <div className="container relative">
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Stats
          </span>
          <h1 className="text-3xl font-medium my-3">Prompt In Numbers</h1>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mt-12">
          <div className="text-center">
            <span className="text-3xl">
              <CountUp
                duration={2}
                start={10}
                end={50}
                prefix="$"
                suffix="M+"
              />
            </span>
            <p className="font-semibold mt-3">Value transacted</p>
            <p className="text-slate-800 mt-1">
              in overall sell/buy transactions
            </p>
          </div>
          <div className="text-center">
            <span className="text-3xl">2.1M+</span>
            <p className="font-semibold mt-3">Transactions Processed</p>
            <p className="text-slate-800 mt-1">across 10+ countries</p>
          </div>
          <div className="text-center">
            <span className="text-3xl">2M+</span>
            <p className="font-semibold mt-3">Satisfied Processed</p>
            <p className="text-slate-800 mt-1">across 100+ locations</p>
          </div>
          <div className="text-center">
            <span className="text-3xl">4.5</span>
            <p className="font-semibold mt-3">Star App Rating</p>
            <p className="text-slate-800 mt-1">
              on google play &amp; apple store
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
