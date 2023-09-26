import { Inter } from 'next/font/google'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <DefaultLayout>
      <p>INDEX</p>
    </DefaultLayout>
  )
}
