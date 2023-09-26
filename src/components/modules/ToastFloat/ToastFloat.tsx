import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideToast } from '@/store/toast'
import { sliceState } from '@/interface/state'
import { Dispatch } from '@reduxjs/toolkit'
import Toast from '@/components/elements/Toast'

export default function ToastFloat() {
  const dispatch: Dispatch<any> = useDispatch()
  const toast = useSelector((state: sliceState) => state.toast)
  const [timer, setTimer] = useState<any>(null)

  useEffect(() => {
    if (toast.isShow) {
      clearTimeout(timer)
      setTimer(
        setTimeout(() => {
          dispatch(hideToast())
        }, 3000)
      )
    }
  }, [dispatch, toast.isShow])

  return (
    <Toast
      onCLosed={() => dispatch(hideToast())}
      isShow={toast.isShow}
      theme={toast.type}
    >
      <p>{toast.message}</p>
    </Toast>
  )
}
