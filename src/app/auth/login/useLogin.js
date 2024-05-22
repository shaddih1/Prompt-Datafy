'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { toast } from 'react-toastify'

export default function useLogin() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const loginFormSchema = yup.object({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    password: yup.string().required('Please enter your password'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: 'user@demo.com',
      password: 'password',
    },
  })

  const login = handleSubmit(async (values) => {
    setLoading(true)
    signIn('credentials', {
      redirect: false,
      email: values?.email,
      password: values?.password,
    }).then((res) => {
      if (res?.ok) {
        router.push('/')
        toast('Success')
      } else {
        toast(res?.error, { type: 'error' })
      }
    })
    setLoading(false)
  })

  return { loading, login, control }
}
