
const Services = ({ services }) => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center">
          <h1 className="text-3xl font-medium">What We Do</h1>
          <p className="font-medium text-slate-500 mt-5 mb-4">
            We are helping businesses to develop their web applications
          </p>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-12 gap-4">
          {services.map((service, idx) => {
            return (
              <div
                key={idx}
                className="p-6 hover:bg-white rounded-md hover:shadow-xl transition-all duration-500"
                data-aos="fade-up"
                data-aos-duration={500}
              >
                <div
                  className={`w-12 h-12 rounded-md ${service.variant} flex items-center justify-center`}
                >
                  {service.icon}
                </div>
                <h4 className="text-base font-medium my-5">{service.title}</h4>
                <p className="text-slate-400">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
