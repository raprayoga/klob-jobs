import React from 'react'
import ApplicationSents from '@/components/modules/ApplicationSents'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function ApplicationSent() {
  return (
    <DefaultLayout>
      <Link
        href="/"
        className="mb-2 hidden w-fit gap-1 font-semibold text-blue-500 lg:flex"
      >
        <ArrowLeftIcon className="w-4" />
        <span>back</span>
      </Link>
      <h3 className="mb-5 text-lg font-semibold lg:text-3xl">
        Lamaran Terkirim:
      </h3>
      <ApplicationSents />
    </DefaultLayout>
  )
}
