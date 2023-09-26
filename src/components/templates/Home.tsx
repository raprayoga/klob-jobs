import React from 'react'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import JobVacancy from '@/components/modules/JobVacancy'

export default function Home() {
  return (
    <DefaultLayout>
      <JobVacancy />
    </DefaultLayout>
  )
}
