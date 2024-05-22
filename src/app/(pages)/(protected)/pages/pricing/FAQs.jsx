'use client'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import { cn } from '@/helpers'
import { FAQContent, FUCollapse as Accordion } from '@/components'

const FAQs = () => {
  const [basicAccordion, setBasicAccordion] = useState(0)

  const handleBasicAccordion = (index) => () => {
    if (index === basicAccordion) setBasicAccordion(null)
    else setBasicAccordion(index)
  }
  return (
    <section className="py-20 bg-slate-100">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            FAQs
          </span>
          <h2 className="md:text-3xl/tight text-3xl font-semibold my-4">
            Frequently Asked Questions
          </h2>
          <p className="md:text-lg text-slate-500 leading-7">
            Here are some of the basic types of questions for our customers
          </p>
        </div>
        <div className="mt-16 lg:mx-32">
          {(FAQContent ?? []).map((item, idx) => {
            return (
              <Accordion
                key={idx}
                open={basicAccordion == idx}
                toggleCollapse={handleBasicAccordion(idx)}
              >
                <div
                  className={cn('rounded border bg-white', idx != 0 && 'mt-2')}
                >
                  <Accordion.Toggle
                    className="sm:text-base p-5 inline-flex items-center gap-x-3 w-full font-medium text-gray-800 transition hover:text-gray-500"
                    openClass="[&>svg]:rotate-180"
                  >
                    {item.title}
                    <FaChevronDown className="ms-auto transition-transform duration-300" />
                  </Accordion.Toggle>
                  <Accordion.Menu className="w-full overflow-hidden transition-[height] duration-300 ">
                    <p className="sm:text-sm font-medium text-gray-500 p-5 pt-0">
                      {item.description}
                    </p>
                  </Accordion.Menu>
                </div>
              </Accordion>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQs
