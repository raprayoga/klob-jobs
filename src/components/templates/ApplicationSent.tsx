import React from 'react'
import ApplicationSents from '../modules/ApplicationSents'
import DefaultLayout from '../layouts/DefaultLayout'

export default function ApplicationSent() {
  return (
    <DefaultLayout>
      <h3 className="mb-5 text-lg font-semibold lg:text-3xl">
        Lamaran Terkirim:
      </h3>
      <ApplicationSents />
    </DefaultLayout>
  )
}
