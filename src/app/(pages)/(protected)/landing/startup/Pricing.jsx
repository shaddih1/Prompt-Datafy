import { FaCheck } from 'react-icons/fa6'

const checkIcon = <FaCheck className="text-green-500" />
const Pricing = ({ planFeatures }) => {
  return (
    <section className="xl:py-24 py-16">
      <div className="container" data-aos="fade-up" data-aos-duration={1500}>
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Pricing
          </span>
          <h1 className="text-3xl/tight font-medium mt-3 mb-4">
            Pricing Plans
          </h1>
          <p className="text-gray-500">
            Pricing that <span className="text-primary">works </span> for
            everyone.
          </p>
        </div>
        <div className="pt-16 overflow-x-auto">
          <div className="inline-block overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="text-center divide-y">
                  <th className="px-5 py-4 xl:w-2/5 w-1/2 text-xs text-start border-b-2 border-t" />
                  <th className="px-5 py-4 xl:w-[15%] w-1/4">
                    <h1>Starter</h1>
                    <p className="text-gray-500 text-xs">$40/mo</p>
                  </th>
                  <th className="px-5 py-4 w-1/4 border-s">
                    <h1>
                      Professional
                      <span className="inline-flex text-xs bg-red-500 text-white rounded-full py-1 px-3 ms-1">
                        Popular
                      </span>
                    </h1>
                    <p className="text-gray-500 text-xs">$60/mo</p>
                  </th>
                  <th className="px-5 py-4 w-[10%] border-s">
                    <h1>Enterprise</h1>
                    <p className="text-gray-500 text-xs">$300/mo</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {(planFeatures ?? []).map((planFeature, idx) => {
                  return (
                    <tr
                      className={`text-center ${
                        idx === 0 ? 'divide-y-2' : 'divide-y'
                      }`}
                      key={idx}
                    >
                      <td className="p-3 text-start border-b">
                        <p>{planFeature.name}</p>
                      </td>
                      <td className="p-3">
                        {planFeature.starter.available ? (
                          <span className=" flex justify-center items-center">
                            {checkIcon}
                          </span>
                        ) : !planFeature.starter.available &&
                          planFeature.starter.addon ? (
                          <span className="text-xs inline-flex bg-primary text-white rounded-full py-1 px-3">
                            Add-on Available
                          </span>
                        ) : null}
                      </td>
                      <td className="p-3 border-s">
                        {planFeature.professional.available ? (
                          <span className="flex justify-center">
                            {checkIcon}
                          </span>
                        ) : !planFeature.professional.available &&
                          planFeature.professional.addon ? (
                          <span className="text-xs inline-flex bg-primary text-white rounded-full py-1 px-3">
                            Add-on Available
                          </span>
                        ) : null}
                      </td>
                      <td className="p-3 border-s">
                        {planFeature.enterprise.available ? (
                          <span className="items-center flex justify-center">
                            {checkIcon}
                          </span>
                        ) : !planFeature.enterprise.available &&
                          planFeature.enterprise.addon ? (
                          <span className="text-xs inline-flex bg-primary text-white rounded-full py-1 px-3">
                            Add-on Available
                          </span>
                        ) : null}
                      </td>
                    </tr>
                  )
                })}
                <tr className="border" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
