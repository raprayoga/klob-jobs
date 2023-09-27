import React, { useEffect } from 'react'
import Card from '@/components/elements/Card'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'
import { sliceState } from '@/interface/state'
import { Vacancy } from '@/interface/vacancy'
import { sendApplication } from '@/store/vacancy'
import { showToast } from '@/store/toast'
import Button from '@/components/elements/Button'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { cn, getTimeAgo } from '@/utils'
import Salary from '@/components/modules/Salary'
import Badge from '@/components/elements/Badge'

const Details = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const dispatch: Dispatch<any> = useDispatch()
  const vacancies = useSelector((state: sliceState) => state.vacancy.data)
  const router = useRouter()
  const jobVacancyCode = router.query.jobVacancyCode

  const handleSendApplication = (vacancy?: Vacancy) => {
    if (vacancy && !vacancy.applied) {
      dispatch(sendApplication(vacancy.jobVacancyCode))

      dispatch(
        showToast({
          message: 'Berhasil mengirim lamaran',
          type: 'success',
        })
      )
    }
  }
  let vacancy = vacancies.find(
    (vacancy) => '' + vacancy.jobVacancyCode === '' + jobVacancyCode
  )

  useEffect(() => {
    if (!vacancy) router.push('/')
  }, [router, vacancy])

  return (
    vacancy && (
      <Card
        {...props}
        ref={ref}
        className={cn('mx-auto w-full lg:w-8/12 lg:px-10', className)}
      >
        <Image
          src={vacancy.corporateLogo}
          alt="corporate logo"
          width={120}
          height={40}
          className="m-auto mb-4"
        />
        <h4 className="text-lg font-semibold">{vacancy.corporateName}</h4>
        <div
          dangerouslySetInnerHTML={{ __html: vacancy.descriptions }}
          className="my-10 text-sm"
        />

        <p className="text-sm leading-8">{vacancy.positionName}</p>
        <p className="my-1 text-sm">
          Status:{' '}
          <Badge className="text-[10px] font-semibold lg:text-[10px]">
            {vacancy.status}
          </Badge>
        </p>
        <p className="text-sm">
          Gaji: {Salary(vacancy.salaryFrom, vacancy.salaryTo)}
        </p>
        <p className="my-3 text-end text-sm">
          {vacancy.postedDate != null ? getTimeAgo(vacancy.postedDate) : ''}
        </p>
        <Button
          theme="success"
          className="w-full"
          isDisabled={!!vacancy.applied}
          onClick={() => handleSendApplication(vacancy)}
        >
          KIRIM LAMARAN
        </Button>
      </Card>
    )
  )
})
Details.displayName = 'Details'

export { Details }
