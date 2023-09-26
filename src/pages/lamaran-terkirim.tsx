import React, { useEffect } from 'react'
import ApplicationSent from '@/components/templates/ApplicationSent'
import { Dispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import db from '@/assets/db/db.json'
import { overwrite } from '@/store/vacancy'

export default function ApplicationSentPage() {
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    const initVacancies = db.fakeJob
    dispatch(overwrite(initVacancies))
  }, [dispatch])
  return <ApplicationSent />
}
