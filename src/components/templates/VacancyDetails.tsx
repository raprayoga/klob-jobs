import React from 'react'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import Details from '@/components/modules/Details'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function VacancyDetails() {
  return (
    <DefaultLayout>
      <Link
        href="/"
        className="mb-2 hidden w-fit gap-1 font-semibold text-blue-500 lg:flex"
      >
        <ArrowLeftIcon className="w-4" />
        <span>home</span>
      </Link>
      <h3 className="mb-5 text-lg font-semibold lg:text-3xl">
        Detail Lowongan Pekerjaan:
      </h3>
      <Details />
    </DefaultLayout>
  )
}
