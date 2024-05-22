'use client'
import { useState } from 'react'
import { FAQContent, FUCollapse as Accordion } from '@/components'
import { FaAngleDown } from 'react-icons/fa6'

const FAQs = () => {
  const [basicAccordion, setBasicAccordion] = useState(0)

  const handleBasicAccordion = (index) => () => {
    if (index === basicAccordion) setBasicAccordion(null)
    else setBasicAccordion(index)
  }
  return (
    <>
      <h4 className="text-base mt-24">Frequently Asked Questions</h4>
      <p className="text-slate-400 mt-1">
        Here are some of the basic types of questions for our customers
      </p>
      <div className="mt-10 lg:me-36">
        <div>
          {(FAQContent ?? []).map((item, idx) => {
            return (
              <Accordion
                key={idx}
                open={basicAccordion == idx}
                toggleCollapse={handleBasicAccordion(idx)}
              >
                <div className={`rounded border ${idx === 0 ? '' : 'mt-2'}`}>
                  <Accordion.Toggle
                    openClass="[&>svg]:rotate-180"
                    className="sm:text-base p-5 inline-flex items-center gap-x-3 w-full font-medium text-gray-800 transition hover:text-gray-500"
                  >
                    {item.title}
                    <FaAngleDown className="ms-auto transition-transform duration-300" />
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
    </>
  )
}

export default FAQs
