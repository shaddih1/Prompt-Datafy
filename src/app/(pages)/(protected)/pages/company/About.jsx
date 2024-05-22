const About = () => {
  return (
    <section className="lg:py-24 py-16">
      <div className="container" data-aos="fade-up">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          <div className="flex flex-col items-center lg:items-start">
            <div className="border-t-2 border-gray-300 w-1/5 mb-7" />
            <h1 className="text-3xl">About Us</h1>
          </div>
          <div>
            <p className="text-sm/relaxed tracking-wider text-gray-600">
              Temporibus autem quibusdam et aut as officiis debitis aut rerum
              necessitatibus saepe eveniet voluptates repudiandae sint et
              molestiae non recusandae itaque earum rerum hic tenetur a sapiente
              delectus reiciendis.
            </p>
          </div>
          <div>
            <p className="text-sm/relaxed tracking-wider text-gray-600">
              Temporibus autem quibusdam et aut as officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae itaque earum rerum hic tenetur a sapiente
              delectus reiciendis.
            </p>
          </div>
        </div>
        <div className="lg:mt-5">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            <div />
            <div className="lg:col-span-2">
              <p className="text-sm/relaxed tracking-wider text-gray-600">
                Temporibus autem quibusdam et aut as officiis debitis aut rerum
                necessitatibus saepe eveniet voluptates repudiandae sint et
                molestiae non recusandae itaque earum rerum hic tenetur a
                sapiente delectus reiciendis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
