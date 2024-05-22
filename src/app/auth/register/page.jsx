'use client'
import Link from 'next/link'
import AuthLayout from '../AuthLayout'
import { FormInput, FormInputPassword } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'

const BottomLink = () => {
  return (
    <div className="w-full text-center">
      <p className="text-gray-500 leading-6 text-base">
        Already have an account?
        <Link href="/auth/login" className="text-primary font-semibold ms-1">
          Log In
        </Link>
      </p>
    </div>
  )
}

const Register = () => {
  const registerSchema = yup.object().shape({
    fullname: yup.string().required('Please enter Fullname'),
    email: yup
      .string()
      .required('Please enter Email')
      .email('Please enter valid Email'),
    password: yup.string().required('Please enter Password'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      fullname: 'Prompt Tailwind Next',
      email: 'user@demo.com',
      password: 'password',
    },
  })

  return (
    <>
      <AuthLayout
        authTitle="Create Your Account"
        helpText="Don't have an account? Create your account, it takes less than a minute."
        bottomLinks={<BottomLink />}
        displayShowcase
        hasThirdPartyAuth
      >
        <form onSubmit={handleSubmit(() => null)}>
          <FormInput
            name="fullname"
            type="text"
            label="Your Name"
            labelClassName="block text-sm font-medium mb-1 text-gray-600"
            className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
            containerClassName="mb-4"
            placeholder="Your Name"
            control={control}
          />
          <FormInput
            name="email"
            type="email"
            label="Email"
            labelClassName="block text-sm font-medium mb-1 text-gray-600"
            className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
            containerClassName="mb-4"
            placeholder="Your Email"
            control={control}
          />
          <FormInputPassword
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            className="py-2 px-4 leading-6 block w-full border-gray-300 rounded rounded-e-none text-sm focus:border-gray-300 focus:ring-0"
            containerClassName="mb-4"
            labelClassName="block text-sm font-medium mb-1 text-gray-600"
            control={control}
          />
          <div className="mb-0 text-center">
            <button
              className="w-full bg-primary text-white font-medium leading-6 text-center align-middle select-none py-2 px-4 text-base rounded-md transition-all hover:shadow-lg hover:shadow-primary/30"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}

export default Register
