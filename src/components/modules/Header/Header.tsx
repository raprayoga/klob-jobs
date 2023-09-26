import React from 'react'
import { cn } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import LogoImage from '@/assets/images/logo.png'

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return (
    <header
      className={cn('fixed top-0 w-screen bg-shadows py-3', props.className)}
      ref={ref}
      data-testid="header-element"
    >
      <div className="container m-auto flex justify-between">
        <Link href="/">
          <Image src={LogoImage} alt="logo" width={80} height={45} />
        </Link>
        <div className="flex gap-2">
          <Link
            className="flex items-center justify-center rounded bg-primary px-2 py-1 text-xs text-white hover:opacity-80 lg:px-4 lg:py-2 lg:text-sm"
            href="/buat-lowongan"
          >
            Buat Lowongan
          </Link>
          <Link
            className="transition-300 flex items-center justify-center rounded border border-info px-2 py-1 text-xs text-info transition-colors hover:bg-info hover:text-white lg:px-4 lg:py-2 lg:text-sm"
            href="/lamaran-terkirim"
          >
            Lamaran Terkirim
          </Link>
        </div>
      </div>
    </header>
  )
})
Header.displayName = 'Header'

export { Header }
