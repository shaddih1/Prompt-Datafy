'use client'
import FormInput from '@/components/form/FormInput'
import { useForm } from 'react-hook-form'

const SubscribeInput = () => {
  const { control } = useForm()
  return (
    <FormInput
      control={control}
      noValidate
      type="email"
      name="Email"
      className="border-0 w-full text-sm focus:ring-0 bg-white ps-3"
      placeholder="Your email"
      containerClassName="flex items-center"
    />
  )
}

export default SubscribeInput
