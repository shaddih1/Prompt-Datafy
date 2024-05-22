
import Image from 'next/image'

const Team = ({ teamMembers }) => {
  return (
    <section className="lg:py-24 py-16">
      <div className="container">
        <div className="text-center">
          <span className="text-sm bg-primary/10 text-primary/40 rounded-full px-3 py-1">
            Our Team
          </span>
          <h1 className="text-3xl/tight font-medium mt-3 mb-4">
            Meet Our Team
          </h1>
          <p className="text-gray-500">
            Start working with<span className="text-primary"> Prompt </span>to
            manage your workforce better.
          </p>
        </div>
        <div className="mt-14">
          <div
            className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12"
            data-aos="fade-up"
          >
            {(teamMembers ?? []).map((teamMember, idx) => {
              return (
                <div key={idx}>
                  <div className="flex gap-4 items-center">
                    <Image
                      width={64}
                      height={64}
                      src={teamMember.avatar}
                      alt="avatar"
                      className="h-16 w-16 rounded-md"
                    />
                    <div>
                      <h6 className="font-medium">{teamMember.name}</h6>
                      <p className="text-gray-500">{teamMember.designation}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
