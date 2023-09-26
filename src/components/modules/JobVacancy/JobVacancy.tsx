import { sliceState } from '@/interface/state'
import React, { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@/components/elements/Button'
import VacancyCard from '@/components/modules/VacancyCard'
import { sendApplication } from '@/store/vacancy'
import { Vacancy } from '@/interface/vacancy'
import { showToast } from '@/store/toast'

const JobVacancy = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  const dispatch: Dispatch<any> = useDispatch()
  const vacancies = useSelector((state: sliceState) => state.vacancy.data)

  const handleSendApplication = (vacancy: Vacancy) => {
    if (!vacancy.applied) {
      dispatch(sendApplication(vacancy.jobVacancyCode))

      dispatch(
        showToast({
          message: 'Berhasil mengirim lamaran',
          type: 'success',
        })
      )
    }
  }

  return (
    <div
      className="grid grid-cols-fill-14 items-start gap-5"
      {...props}
      ref={ref}
    >
      {vacancies.length > 0 &&
        vacancies.map((vacancy) => (
          <VacancyCard
            key={vacancy.jobVacancyCode}
            vacancy={vacancy}
            className="justify-self-center"
          >
            <Button
              theme="success"
              className="w-full"
              isDisabled={!!vacancy.applied}
              onClick={() => handleSendApplication(vacancy)}
            >
              KIRIM LAMARAN
            </Button>
          </VacancyCard>
        ))}
    </div>
  )
})
JobVacancy.displayName = 'JobVacancy'

export { JobVacancy }
