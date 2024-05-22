
const Services = ({ services }) => {
  return (
    <section className="py-20">
      <div className="container">
        <div>
          <h2 className="md:text-3xl text-xl font-semibold my-5">What I Do</h2>
          <p className="text-slate-400 font-medium">
            Connecting brands and companies with their customers through
            <span className="text-red-500">&nbsp;good design</span>.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-14">
          {(services ?? []).map((service, idx) => {
            return (
              <div
                key={idx}
                className="group"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                <div className="p-6 rounded-md shadow group-hover:shadow-lg transition-all duration-500">
                  <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center rounded-tr-xl rounded-bl-xl group-hover:rounded-tr-none group-hover:rounded-bl-none group-hover:rounded-tl-xl group-hover:rounded-br-xl transition-all duration-500">
                    {service.icon}
                  </div>
                  <h4 className="text-lg mt-6">{service.title}</h4>
                  <p className="text-base text-slate-400 leading-7 mt-2">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
