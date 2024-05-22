'use client'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import {
  Control,
  FieldPath,
  FieldValues,
  Controller,
  PathValue,
} from 'react-hook-form'
import { LuAlertCircle } from 'react-icons/lu'
import { cn } from '@/helpers'

const FormInput = ({
  control,
  name,
  label,
  className,
  labelClassName,
  containerClassName,
  noValidate,
  fullWidth,
  ...other
}) => {
  return (
    <Controller
      control={control}
      defaultValue={''}
      render={({ field, fieldState }) => (
        <div
          className={cn(containerClassName, 'relative', fullWidth && 'w-full')}
        >
          {label && (
            <label className={cn(labelClassName)} htmlFor={name}>
              {label}
            </label>
          )}
          <div className={cn('relative', fullWidth && 'w-full')}>
            <input
              {...other}
              {...field}
              className={cn(className, {
                'border-red-500 focus:border-red-500':
                  !noValidate && fieldState.error?.message,
              })}
            />
            {!noValidate && fieldState.error?.message && (
              <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                <LuAlertCircle size={20} className="text-red-500" />
              </div>
            )}
          </div>
          {!noValidate && fieldState.error?.message && (
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
export default FormInput
