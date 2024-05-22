import PricingCards2 from '@/components/common/PricingCards2'
import { plans } from './data'

const PricingPlans = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Plans
          </span>
          <h2 className="md:text-3xl/tight text-3xl font-semibold my-4">
            Pricing Plans
          </h2>
          <p className="md:text-lg text-slate-500 leading-7">
            Pricing that <span className="text-primary">works</span> for
            everyone.
          </p>
        </div>

        <PricingCards2 plans={plans} />
      </div>
    </section>
  )
}

export default PricingPlans
