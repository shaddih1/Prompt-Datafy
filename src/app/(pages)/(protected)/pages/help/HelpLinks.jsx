import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'

const HelpLinks = ({ helpLinks }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
      {(helpLinks ?? []).map((item, idx) => {
        return (
          <div key={idx}>
            {item.icon}
            <h4 className="text-lg my-4">{item.title}</h4>

            {(item.links ?? []).map((item, idx) => {
              return (
                <div className="grid gap-y-4 mb-4" key={idx}>
                  <Link href="" className="font-medium text-slate-400">
                    {item}
                  </Link>
                </div>
              )
            })}

            <Link href="">
              <div className="flex items-center gap-3">
                <p className="text-primary font-medium">View More</p>
                <FaAngleRight className="text-primary" />
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default HelpLinks
