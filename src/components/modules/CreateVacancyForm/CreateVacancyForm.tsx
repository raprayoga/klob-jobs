import React, { useCallback, useEffect, useState } from 'react'
import Button from '@/components/elements/Button'
import { Input, InputGroup } from '@/components/elements/InputGroup'
import { VacancyForm } from '@/interface/vacancy'
import { showToast } from '@/store/toast'
import { createVacancy } from '@/store/vacancy'
import { cn } from '@/utils'
import { formRules, getVariant } from '@/utils/form-rules'
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { Dispatch } from '@reduxjs/toolkit'
import { useRouter } from 'next/router'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const CreateVacancyForm = React.forwardRef<
  HTMLFormElement,
  React.HTMLAttributes<HTMLFormElement>
>(({ className, ...props }, ref) => {
  const router = useRouter()
  const dispatch: Dispatch<any> = useDispatch()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VacancyForm>({
    mode: 'onChange',
  })
  const onSubmit: SubmitHandler<VacancyForm> = (data) => {
    dispatch(createVacancy(data))

    dispatch(
      showToast({
        message: 'Berhasil membuat lowongan',
        type: 'success',
      })
    )

    router.push('/')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      {...props}
      ref={ref}
      className={cn('', className)}
    >
      <Controller
        control={control}
        rules={{ required: formRules.required, pattern: formRules.url }}
        defaultValue=""
        render={({
          field: { onChange, onBlur, value },
          fieldState: { isDirty, error },
        }) => (
          <div className="my-2">
            <label htmlFor="corporateLogo">Logo Perusahaan</label>
            <InputGroup className="mt-1 w-full">
              <Input
                id="corporateLogo"
                placeholder="masukkan Link"
                className="pr-6"
                theme={getVariant(isDirty, !!error)}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
              {getVariant(isDirty, !!error) === 'success' && (
                <CheckIcon className="absolute left-auto right-2 w-4 stroke-4 text-success" />
              )}
              {getVariant(isDirty, !!error) === 'danger' && (
                <ExclamationCircleIcon className="absolute left-auto right-2 w-4 stroke-2 text-danger" />
              )}
            </InputGroup>
            <span className="text-[10px] text-primary">
              &nbsp;{errors.corporateLogo ? errors.corporateLogo.message : ''}
            </span>
          </div>
        )}
        name="corporateLogo"
      />

      <Controller
        control={control}
        rules={{ required: formRules.required }}
        defaultValue=""
        render={({
          field: { onChange, onBlur, value },
          fieldState: { isDirty, error },
        }) => (
          <div className="my-2">
            <label htmlFor="corporateName">Nama Perusahaan</label>
            <InputGroup className="mt-2 w-full">
              <Input
                id="corporateName"
                placeholder="masukkan nama perusahaan"
                className="pr-6"
                theme={getVariant(isDirty, !!error)}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
              {getVariant(isDirty, !!error) === 'success' && (
                <CheckIcon className="absolute left-auto right-2 w-4 stroke-4 text-success" />
              )}
              {getVariant(isDirty, !!error) === 'danger' && (
                <ExclamationCircleIcon className="absolute left-auto right-2 w-4 stroke-2 text-danger" />
              )}
            </InputGroup>
            <span className="text-[10px] text-primary">
              &nbsp;{errors.corporateName ? errors.corporateName.message : ''}
            </span>
          </div>
        )}
        name="corporateName"
      />

      <Controller
        control={control}
        rules={{ required: formRules.required }}
        defaultValue=""
        render={({
          field: { onChange, onBlur, value },
          fieldState: { isDirty, error },
        }) => (
          <div className="my-2">
            <label htmlFor="positionName">Nama Lowongan</label>
            <InputGroup className="mt-2 w-full">
              <Input
                id="positionName"
                placeholder="masukkan nama lowongan"
                className="pr-6"
                theme={getVariant(isDirty, !!error)}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
              {getVariant(isDirty, !!error) === 'success' && (
                <CheckIcon className="absolute left-auto right-2 w-4 stroke-4 text-success" />
              )}
              {getVariant(isDirty, !!error) === 'danger' && (
                <ExclamationCircleIcon className="absolute left-auto right-2 w-4 stroke-2 text-danger" />
              )}
            </InputGroup>
            <span className="text-[10px] text-primary">
              &nbsp;{errors.positionName ? errors.positionName.message : ''}
            </span>
          </div>
        )}
        name="positionName"
      />

      <Controller
        control={control}
        rules={{ required: formRules.required }}
        defaultValue=""
        render={({
          field: { onChange, onBlur, value },
          fieldState: { isDirty, error },
        }) => (
          <div className="my-2">
            <label htmlFor="status">Status Karyawan</label>
            <InputGroup className="mt-2 w-full">
              <Input
                id="status"
                placeholder="masukkan status karyawan"
                className="pr-6"
                theme={getVariant(isDirty, !!error)}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
              {getVariant(isDirty, !!error) === 'success' && (
                <CheckIcon className="absolute left-auto right-2 w-4 stroke-4 text-success" />
              )}
              {getVariant(isDirty, !!error) === 'danger' && (
                <ExclamationCircleIcon className="absolute left-auto right-2 w-4 stroke-2 text-danger" />
              )}
            </InputGroup>
            <span className="text-[10px] text-primary">
              &nbsp;{errors.status ? errors.status.message : ''}
            </span>
          </div>
        )}
        name="status"
      />

      <div className="flex flex-col items-center justify-between md:flex-row">
        <Controller
          control={control}
          defaultValue=""
          rules={{
            required: formRules.required,
            min: formRules.minNominal(1),
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <div className="my-2 w-full md:w-5/12">
              <label htmlFor="salaryFrom">Kisaran Gaji Karyawan</label>
              <InputGroup className="mt-2 w-full">
                <Input
                  id="salaryFrom"
                  type="number"
                  placeholder="Start From"
                  className="pr-6"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
                {getVariant(isDirty, !!error) === 'success' && (
                  <CheckIcon className="absolute left-auto right-2 w-4 stroke-4 text-success" />
                )}
                {getVariant(isDirty, !!error) === 'danger' && (
                  <ExclamationCircleIcon className="absolute left-auto right-2 w-4 stroke-2 text-danger" />
                )}
              </InputGroup>
              <span className="text-[10px] text-primary">
                &nbsp;{errors.salaryFrom ? errors.salaryFrom.message : ''}
              </span>
            </div>
          )}
          name="salaryFrom"
        />
        <p>sampai dengan</p>
        <Controller
          control={control}
          rules={{
            required: formRules.required,
            min: formRules.minNominal(1),
          }}
          defaultValue=""
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isDirty, error },
          }) => (
            <div className="my-2 w-full md:w-5/12">
              <label htmlFor="salaryTo">&nbsp;</label>
              <InputGroup className="mt-2 w-full">
                <Input
                  id="salaryTo"
                  type="number"
                  placeholder="Start To"
                  className="pr-6"
                  theme={getVariant(isDirty, !!error)}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
                {getVariant(isDirty, !!error) === 'success' && (
                  <CheckIcon className="absolute left-auto right-2 w-4 stroke-4 text-success" />
                )}
                {getVariant(isDirty, !!error) === 'danger' && (
                  <ExclamationCircleIcon className="absolute left-auto right-2 w-4 stroke-2 text-danger" />
                )}
              </InputGroup>
              <span className="text-[10px] text-primary">
                &nbsp;{errors.salaryTo ? errors.salaryTo.message : ''}
              </span>
            </div>
          )}
          name="salaryTo"
        />
      </div>

      <Controller
        control={control}
        rules={{
          required: formRules.required,
        }}
        defaultValue=""
        render={({
          field: { onChange, onBlur, value },
          fieldState: { isDirty, error },
        }) => (
          <div className="my-2">
            <label htmlFor="postedDate">Tanggal Posting</label>
            <InputGroup className="mt-2 w-full">
              <Input
                id="postedDate"
                type="date"
                placeholder="masukkan tgl"
                className="pr-6"
                theme={getVariant(isDirty, !!error)}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
              {getVariant(isDirty, !!error) === 'success' && (
                <CheckIcon className="absolute left-auto right-2 w-4 stroke-4 text-success" />
              )}
              {getVariant(isDirty, !!error) === 'danger' && (
                <ExclamationCircleIcon className="absolute left-auto right-2 w-4 stroke-2 text-danger" />
              )}
            </InputGroup>
            <span className="text-[10px] text-primary">
              &nbsp;{errors.postedDate ? errors.postedDate.message : ''}
            </span>
          </div>
        )}
        name="postedDate"
      />

      <Button type="submit" theme="info" className="mt-8 w-full">
        Login
      </Button>
    </form>
  )
})
CreateVacancyForm.displayName = 'CreateVacancyForm'

export { CreateVacancyForm }
