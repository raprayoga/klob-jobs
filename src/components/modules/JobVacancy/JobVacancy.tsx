import { sliceState } from '@/interface/state'
import React from 'react'
import { useSelector } from 'react-redux'
import Button from '@/components/elements/Button'
import VacancyCard from '@/components/modules/VacancyCard'

const JobVacancy = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  const vacancies = useSelector((state: sliceState) => state.vacancy.data)

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
