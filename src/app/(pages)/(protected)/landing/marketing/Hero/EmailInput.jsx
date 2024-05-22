'use client'
import { FormInput } from '@/components'
import { useForm } from 'react-hook-form'

const EmailInput = () => {
  const { control } = useForm()
  return (
    <>
      <FormInput
        control={control}
        fullWidth
        type="email"
        name="Email"
        className="w-full text-sm border-gray-300 focus:border-gray-200 focus:ring-0 rounded-md bg-white py-3"
        placeholder="Enter Your Email"
        containerClassName="flex sm:flex-row flex-col gap-2"
      />
      <button className="bg-primary text-white rounded-md text-sm font-semibold flex-none shadow-lg shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-8 py-3">
        Start Free Trial
      </button>
    </>
  )
}

export default EmailInput
