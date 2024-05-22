'use client'
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import { FieldPath, FieldValues, Controller, PathValue } from 'react-hook-form'
import { LuAlertCircle } from 'react-icons/lu'
import { cn } from '@/helpers'
import { FormInputProps } from './FormInput'

const FormTextArea = ({
  control,
  name,
  label,
  className,
  labelClassName,
  containerClassName,
  ...other
}) => {
  return (
    <Controller
      control={control}
      defaultValue={''}
      render={({ field, fieldState }) => (
        <div className={cn(containerClassName, 'relative')}>
          {label && (
            <label className={cn(labelClassName)} htmlFor={name}>
              {label}
            </label>
          )}
          <textarea
            {...other}
            {...field}
            className={cn(className, {
              'border-red-500 focus:border-red-500': fieldState.error,
            })}
          />
          {fieldState.error?.message && (
            <>
              <div className="absolute mt-1 inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                <LuAlertCircle size={20} className="text-red-500" />
              </div>
              <p className="text-xs text-red-600 mt-2">
                {fieldState.error?.message}
              </p>
            </>
          )}
        </div>
      )}
      name={name}
    />
  )
}
export default FormTextArea
