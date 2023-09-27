import React, { useEffect, useState } from 'react'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import CreateVacancyForm from '@/components/modules/CreateVacancyForm'

export default function CreateVacancy() {
  const [firstLoad, setFirstLoad] = useState(false)
  useEffect(() => {
    setFirstLoad(true)
  }, [])

  return (
    <DefaultLayout>
      <Link
        href="/"
        className="mb-2 hidden w-fit gap-1 font-semibold text-blue-500 lg:flex"
      >
        <ArrowLeftIcon className="w-4" />
        <span>home</span>
      </Link>
      <h3 className="mb-5 text-lg font-semibold lg:text-3xl">Buat Lowongan:</h3>
      {firstLoad && (
        <CreateVacancyForm className="mx-auto mb-10 lg:max-w-[800px]" />
      )}
    </DefaultLayout>
  )
}
