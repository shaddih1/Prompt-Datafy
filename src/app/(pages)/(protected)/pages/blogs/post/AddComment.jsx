'use client'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FormInput, FormTextArea } from '@/components'

const AddComment = () => {
  /*
form validation schema
*/
  const schemaResolver = yup.object().shape({
    name: yup.string().required('Please enter Name'),
    email: yup
      .string()
      .required('Please enter Email')
      .email('Please enter valid Email'),
    subject: yup.string().required('Please enter Subject'),
    message: yup.string().required('Please enter Message'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schemaResolver),
  })

  return (
    <div className="mt-14">
      <div className="border bg-white rounded p-6">
        <h1>Post a comment</h1>
        <form
          onSubmit={handleSubmit(() => {
            null
          })}
        >
          <div className="flex flex-col gap-5 mt-5">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <FormInput
                type="text"
                name="name"
                className="rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm"
                placeholder="Name"
                control={control}
              />
              <FormInput
                type="email"
                name="email"
                className="rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm"
                placeholder="Email"
                control={control}
              />
            </div>
            <FormInput
              type="text"
              name="subject"
              className="rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm"
              placeholder="Subject"
              containerClassName="w-full"
              control={control}
            />
            <FormTextArea
              name="message"
              className="rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm"
              placeholder="Message"
              rows={5}
              control={control}
            />

            <button className="flex" type="submit">
              <span className="bg-black/70 text-white rounded-md text-sm font-semibold flex-none shadow shadow-black hover:shadow-lg hover:shadow-black/30 focus:shadow-none focus:outline focus:outline-black/50 px-5 py-3">
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddComment
