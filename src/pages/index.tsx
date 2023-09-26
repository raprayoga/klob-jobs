import Home from '@/components/templates/Home'
import { Vacancy } from '@/interface/vacancy'
import { Dispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import db from '@/assets/db/db.json'
import { useEffect } from 'react'
import { overwrite } from '@/store/vacancy'

export default function HomePage() {
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    const initVacancies = db.fakeJob
    dispatch(overwrite(initVacancies))
  }, [dispatch])

  return (
    <>
      <Home />
    </>
  )
}
