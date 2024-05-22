'use client'
import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'
import { FieldPath, FieldValues, Controller, PathValue } from 'react-hook-form'
import { LuAlertCircle, LuEye, LuEyeOff } from 'react-icons/lu'
import { cn } from '@/helpers/cn'
import { FormInputProps } from './FormInput'

const FormPassword = ({
  control,
  name,
  className,
  label,
  labelClassName,
  containerClassName,
  ...other
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Controller
      control={control}
      defaultValue={''}
      render={({ field, fieldState }) => (
        <div className={containerClassName ?? ''}>
          {label && (
            <label className={labelClassName ?? ''} htmlFor={name}>
              {label}
            </label>
          )}
          <div className="flex">
            <div className="w-full relative">
              <input
                {...other}
                {...field}
                type={showPassword ? 'text' : 'password'}
                className={cn(className, {
                  'border-red-500 focus:border-red-500': fieldState.error,
                })}
              />
              {fieldState.error?.message && (
                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                  <LuAlertCircle size={20} className="text-red-500" />
                </div>
              )}
            </div>
            <span
              className="inline-flex items-center justify-center px-4 border rounded-e-md -ms-px cursor-pointer"
              onClick={() => {
                setShowPassword(!showPassword)
              }}
            >
              {showPassword ? <LuEye size={20} /> : <LuEyeOff size={20} />}
            </span>
          </div>
          {fieldState.error?.message && (
            <p className="text-xs text-red-600 mt-2">
              {fieldState.error?.message}
            </p>
          )}
        </div>
      )}
      name={name}
    />
  )
}

export default FormPassword
