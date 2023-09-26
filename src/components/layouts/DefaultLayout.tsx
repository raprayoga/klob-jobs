import React from 'react'
import Header from '@/components/modules/Header'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-20">{children}</main>
    </>
  )
}
