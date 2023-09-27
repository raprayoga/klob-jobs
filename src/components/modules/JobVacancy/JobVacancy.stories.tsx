import { useEffect } from 'react'
import type { Meta } from '@storybook/react'
import JobVacancy from './index'
import store from '@/store/store'
import { Provider, useDispatch } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'
import db from '@/assets/db/db.json'
import { overwrite } from '@/store/vacancy'

const meta: Meta<typeof JobVacancy> = {
  component: JobVacancy,
  args: {
    className: 'w-[500px]',
  },
  tags: ['autodocs'],
}

export default meta

function Component() {
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    const initVacancies = db.fakeJob
    dispatch(overwrite(initVacancies))
  }, [dispatch])

  return <JobVacancy />
}

export const Default = () => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  )
}
