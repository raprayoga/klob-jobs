import React, { useState } from 'react'
import Card from '@/components/elements/Card'
import Image from 'next/image'
import Badge from '@/components/elements/Badge'
import Link from 'next/link'
import { Vacancy } from '@/interface/vacancy'
import { cn, getTimeAgo } from '@/utils'
import Salary from '@/components/modules/Salary'
import LogoImage from '@/assets/images/logo.png'

interface VacancyProps extends React.HTMLAttributes<HTMLDivElement> {
  vacancy: Vacancy
  children: React.ReactNode
}

const VacancyCard = React.forwardRef<HTMLDivElement, VacancyProps>(
  ({ vacancy, children, className, ...props }, ref) => {
    const [src, setSrc] = useState<
      string | typeof LogoImage | null | undefined
    >(vacancy.corporateLogo)

    return (
      <Card {...props} ref={ref} className={cn('w-full', className)}>
        <Image
          src={src || ''}
          alt="corporate logo"
          width={80}
          height={40}
          className="m-auto mb-4"
          onError={() => setSrc(LogoImage)}
        />
        <p className="font-semibold">{vacancy.corporateName}</p>
        <p className="text-xs leading-8">{vacancy.positionName}</p>
        <p className="my-1 text-xs">
          Status:{' '}
          <Badge className="text-[10px] font-semibold lg:text-[10px]">
            {vacancy.status}
          </Badge>
        </p>
        <p className="text-xs">
          Gaji: {Salary(vacancy.salaryFrom, vacancy.salaryTo)}
        </p>
        <p className="mt-3 text-end text-xs">
          {vacancy.postedDate != null ? getTimeAgo(vacancy.postedDate) : ''}
        </p>
        <Link
          href={`/detail-lowongan-perkerjaan/${vacancy.jobVacancyCode}`}
          className="text-xs leading-8 text-blue-600 underline"
        >
          Baca Detail
        </Link>
        {children}
      </Card>
    )
  }
)
VacancyCard.displayName = 'VacancyCard'

export { VacancyCard }
