import { sliceState } from '@/interface/state'
import React, { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@/components/elements/Button'
import VacancyCard from '@/components/modules/VacancyCard'
import { cancelApplication } from '@/store/vacancy'
import { Vacancy } from '@/interface/vacancy'
import { showToast } from '@/store/toast'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { cn } from '@/utils'

const ApplicationSents = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const dispatch: Dispatch<any> = useDispatch()
  const vacancies = useSelector((state: sliceState) => state.vacancy.data)

  const handleCancelApplication = (vacancy: Vacancy) => {
    dispatch(cancelApplication(vacancy.jobVacancyCode))

    dispatch(
      showToast({
        message: 'Berhasil mengirim lamaran',
        type: 'success',
      })
    )
  }

  return (
    <>
      {vacancies.filter((vacancy) => vacancy.applied).length > 0 && (
        <div
          className={cn('grid grid-cols-fill-14 items-start gap-5', className)}
          {...props}
          ref={ref}
        >
          {vacancies
            .filter((vacancy) => vacancy.applied)
            .map((vacancy) => (
              <VacancyCard
                key={vacancy.jobVacancyCode}
                vacancy={vacancy}
                className="justify-self-center"
              >
                <Button
                  theme="warning"
                  className="w-full"
                  onClick={() => handleCancelApplication(vacancy)}
                >
                  BATALKAN LAMARAN
                </Button>
              </VacancyCard>
            ))}
        </div>
      )}
      {vacancies.filter((vacancy) => vacancy.applied).length === 0 && (
        <div className={cn('flex flex-col items-center gap-2', className)}>
          <h4>Belum ada lamaran yang terkirim</h4>
          <Link
            href="/"
            className="flex w-52 items-center justify-center rounded bg-info px-2 py-1 text-center text-xs text-white hover:opacity-80 lg:px-4 lg:py-2 lg:text-sm"
          >
            <ArrowLeftIcon className="mr-3 w-4" />
            Kembali ke Home
          </Link>
        </div>
      )}
    </>
  )
})
ApplicationSents.displayName = 'ApplicationSents'

export { ApplicationSents }
