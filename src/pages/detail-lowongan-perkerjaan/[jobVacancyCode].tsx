import { Dispatch } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import db from '@/assets/db/db.json'
import { overwrite } from '@/store/vacancy'
import VacancyDetails from '@/components/templates/VacancyDetails'

export default function DetailLowonganPage() {
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    const initVacancies = db.fakeJob
    dispatch(overwrite(initVacancies))
  }, [dispatch])
  return <VacancyDetails />
}
