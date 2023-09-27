import React from 'react'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import JobVacancy from '@/components/modules/JobVacancy'

export default function Home() {
  return (
    <DefaultLayout>
      <h3 className="mb-5 text-lg font-semibold lg:text-3xl">
        Lowongan Pekerjaan:
      </h3>
      <JobVacancy />
    </DefaultLayout>
  )
}
