'use client'
import { FormInput } from '@/components'
import { useForm } from 'react-hook-form'

const EmailInput = () => {
  const { control } = useForm()
  return (
    <FormInput
      control={control}
      fullWidth
      type="email"
      name="Email"
      placeholder="Your Email"
      containerClassName="flex gap-3"
      className="inline-block text-sm border border-slate-300 focus:ring-0 rounded shadow-lg sm:shadow-none bg-white w-full py-3 "
    />
  )
}

export default EmailInput
