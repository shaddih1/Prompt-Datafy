'use client'
import { FormInput } from '@/components'
import { useForm } from 'react-hook-form'

const EmailInput = () => {
  const { control } = useForm()
  return (
    <FormInput
      control={control}
      name="Email"
      type="email"
      placeholder="Enter Your Email"
      className="form-input pe-10 text-sm font-medium focus:ring-0 focus:border-slate-500 rounded border-slate-400"
    />
  )
}

export default EmailInput
