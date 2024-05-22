'use client'
import Link from 'next/link'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FormInput, FormTextArea } from '@/components'

const CTA = () => {
  const schemaResolver = yup.object().shape({
    name: yup.string().required('Please enter name'),
    subject: yup.string().required('Please enter subject'),
    email: yup
      .string()
      .required('Please enter email')
      .email('Please enter valid email'),
    message: yup.string().required('Please enter message'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schemaResolver),
  })

  return (
    <section className="pt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div data-aos="fade-up" data-aos-duration={600}>
            <h2 className="md:text-3xl text-xl font-semibold my-5">
              Just say hi.
            </h2>
            <p className="text-slate-700">
              I am open to discuss your next project, improve user experience of
              an existing one or help with your UX/UI design challenges.
            </p>
            <p className="text-slate-500 mt-12">Email me at</p>
            <h4>
              <Link href="" className="text-lg font-semibold text-slate-600">
                hello@coderthemes.com
              </Link>
            </h4>
            <div className="mt-12">
              <div className="flex flex-col gap-3">
                <h5 className="text-slate-400">Social</h5>
                <div className="flex gap-5">
                  <div>
                    <Link href="">
                      <svg
                        className="w-7 h-7 text-slate-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Link href="">
                      <svg
                        className="w-7 h-7 text-slate-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Link href="">
                      <svg
                        className="w-7 h-7 text-slate-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Link href="">
                      <svg
                        className="w-7 h-7 text-slate-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x={2} y={9} width={4} height={12} />
                        <circle cx={4} cy={4} r={2} />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <Link href="">
                      <svg
                        className="w-7 h-7 text-slate-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x={2}
                          y={2}
                          width={20}
                          height={20}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration={900}>
            <form onSubmit={handleSubmit(() => {})}>
              <FormInput
                control={control}
                type="text"
                name="name"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight focus:outline-none"
                containerClassName="mb-4"
                placeholder="Your name"
              />
              <FormInput
                control={control}
                type="email"
                name="email"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight focus:outline-none"
                placeholder="Your email where we can reach"
                containerClassName="mb-4"
              />
              <FormInput
                control={control}
                type="text"
                name="subject"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight focus:outline-none"
                placeholder="Subject"
                containerClassName="mb-4"
              />
              <FormTextArea
                control={control}
                name="message"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight focus:outline-none"
                placeholder="Write your message here. Keep it simple, concise and intriguing!"
                rows={5}
                containerClassName="mb-4"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="py-3 px-6 rounded border border-red-500 font-semibold text-white bg-red-500 hover:shadow-lg hover:shadow-red-500/50 focus:outline focus:outline-red-500/50 transition-all duration-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr className="mt-10" />
      </div>
    </section>
  )
}

export default CTA
