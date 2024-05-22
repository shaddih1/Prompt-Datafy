'use client'
import Link from 'next/link'
import AuthLayout from '../AuthLayout'

const BottomLink = () => {
  return (
    <div className="w-full text-center">
      <p className="text-gray-500 leading-6 text-base">
        Back to
        <Link
          href="/pages/account/login"
          className="text-primary font-semibold ms-1"
        >
          Log In
        </Link>
      </p>
    </div>
  )
}
const page = () => {
  return (
    <AuthLayout
      authTitle="Please check your inbox"
      bottomLinks={<BottomLink />}
      pageImage
    >
      <p className="text-gray-500 text-sm font-medium mb-6">
        We sent a confirmation link to you at&nbsp;
        <span className="text-gray-800 fw-medium">youremail@domain.com</span>
      </p>
      <p className="text-gray-500 text-sm font-medium">
        Simply click on the link available in the email to confirm your account.
      </p>
    </AuthLayout>
  )
}

export default page
