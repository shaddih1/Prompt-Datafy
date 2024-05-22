'use client'
import Link from 'next/link'
import { LuLogIn } from 'react-icons/lu'
import AuthLayout from '../AuthLayout'
import useLogin from './useLogin'

// styles
import 'react-toastify/dist/ReactToastify.min.css'
import { FormInput, FormInputPassword } from '@/components'

const BottomLink = () => {
  return (
    <p className="text-gray-500 text-center">
      Don&apos;t have an account ?
      <Link className="text-primary ms-1" href="/auth/register">
        <b>Register</b>
      </Link>
    </p>
  )
}

const Login = () => {
  const { loading, login, control } = useLogin()

  return (
    <AuthLayout
      authTitle="Welcome back!"
      helpText="Enter your email address and password to access admin panel."
      bottomLinks={<BottomLink />}
      displayShowcase
      hasThirdPartyAuth
    >
      <form onSubmit={login}>
        <FormInput
          name="email"
          control={control}
          className="block w-full rounded py-2 px-4 border border-gray-200 focus:outline-none"
          type="email"
          placeholder="Enter your email"
          label="Email Address"
          labelClassName="block text-sm font-medium text-gray-600 mb-2"
          containerClassName="mb-4"
        />
        <FormInputPassword
          name="password"
          control={control}
          type="password"
          label="Password"
          placeholder="Enter your password"
          className="block w-full rounded rounded-e-none py-2 px-4 border border-gray-200 focus:ring-transparent focus:border-gray-200"
          labelClassName="block text-sm font-medium text-gray-600 mb-2"
          containerClassName="mb-4"
        />
        <div className="flex items-center justify-between mb-6 mt-3">
          <div className="flex items-center">
            <input
              className="text-primary focus:ring-transparent rounded"
              id="checkbox-signin"
              type="checkbox"
            />
            <label className="ms-2" htmlFor="checkbox-signin">
              Remember me
            </label>
          </div>
          <Link
            className="text-sm text-gray-500 border-b border-dashed border-gray-500"
            href="/auth/forgot-password"
          >
            Forget Password?
          </Link>
        </div>
        <div className="flex justify-center mb-6">
          <button
            type="submit"
            className="relative inline-flex items-center justify-center px-6 py-2 hover:bg-primary-600 rounded-md text-base bg-primary text-white capitalize transition-all w-full"
            disabled={loading}
          >
            <LuLogIn className="h-4 w-4 me-2" /> Log In
          </button>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Login
