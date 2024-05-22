'use client'
import Link from 'next/link'
import * as yup from 'yup'
import AuthLayout from '../AuthLayout'
import { FormInput } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const BottomLink = () => {
  return (
    <div className="w-full text-center">
      <p className="text-gray-500 leading-6 text-base">
        Back to
        <Link href="/auth/login" className="text-primary font-semibold ms-1">
          Log In
        </Link>
      </p>
    </div>
  )
}

const ForgotPassword = () => {
  const forgotPasswordSchema = yup.object().shape({
    email: yup.string().required('Please enter email'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: 'user@demo.com',
    },
  })

  return (
    <AuthLayout
      authTitle="Reset Password"
      helpText="Enter your email address and we'll send you an email with instructions to reset your password."
      bottomLinks={<BottomLink />}
    >
      <form onSubmit={handleSubmit(() => null)}>
        <FormInput
          name="email"
          label="Email"
          containerClassName="mb-4"
          labelClassName="block text-sm font-medium mb-1 text-gray-600"
          className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
          placeholder="Email"
          control={control}
        />
        <div className="pt-4 text-center">
          <button
            className="w-full bg-primary text-white font-medium leading-6 text-center align-middle select-none py-2 px-4 text-base rounded-md transition-all hover:shadow-lg hover:shadow-primary/30"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </AuthLayout>
  )
}

export default ForgotPassword
