'use client'

import CountUp from 'react-countup'

const About = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            About
          </span>
          <h2 className="md:text-3xl text-xl font-semibold my-5">
            More Productivity, Less Expenses
          </h2>
          <p className="text-slate-500">
            From an established enterprise or a startup, we offer space that
            fits all.
          </p>
        </div>
        <div
          className="grid md:grid-cols-4 grid-cols-2 mt-14 gap-5"
          data-aos="fade-up"
        >
          <div className="text-center">
            <h4 className="text-5xl mb-3 ">
              <CountUp duration={2} end={21} />
            </h4>
            <p className="text-slate-600">Meeting Rooms</p>
          </div>
          <div className="text-center">
            <h4 className="text-5xl mb-3 ">
              <CountUp duration={2} start={5} end={51} />
            </h4>
            <p className="text-slate-600">Event Spaces</p>
          </div>
          <div className="text-center">
            <h4 className="text-5xl mb-3 ">
              <CountUp duration={2} start={1} end={11} />
            </h4>
            <p className="text-slate-600">Studio Rooms</p>
          </div>
          <div className="text-center">
            <h4 className="text-5xl mb-3 ">
              <CountUp duration={2} start={100} end={500} suffix="+" />
            </h4>
            <p className="text-slate-600">Seating Spaces</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
