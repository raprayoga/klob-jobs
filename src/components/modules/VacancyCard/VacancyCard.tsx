import React from 'react'
import Card from '@/components/elements/Card'
import Image from 'next/image'
import Badge from '@/components/elements/Badge'
import Link from 'next/link'
import { Vacancy } from '@/interface/vacancy'
import { cn, getTimeAgo } from '@/utils'

const salary = (salaryFrom: number | null, salaryTo: number | null) => {
  if (!salaryFrom && !salaryTo) {
    return (
      <Badge className="text-[10px] font-semibold lg:text-[10px]">
        Gaji tidak ditampilkan
      </Badge>
    )
  } else {
    return (
      <Badge className="text-[10px] font-semibold lg:text-[10px]">
        {salaryFrom &&
          'IDR ' + new Intl.NumberFormat('id-ID').format(salaryFrom)}
        {salaryTo &&
          ' - IDR ' + new Intl.NumberFormat('id-ID').format(salaryTo)}
      </Badge>
    )
  }
}

interface VacancyProps extends React.HTMLAttributes<HTMLDivElement> {
  vacancy: Vacancy
  children: React.ReactNode
}

const VacancyCard = React.forwardRef<HTMLDivElement, VacancyProps>(
  ({ vacancy, children, ...props }, ref) => {
    return (
      <Card {...props} ref={ref} className={cn('w-full', props.className)}>
        <Image
          src={vacancy.corporateLogo}
          alt="corporate logo"
          width={80}
          height={40}
          className="m-auto mb-4"
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
          Gaji: {salary(vacancy.salaryFrom, vacancy.salaryTo)}
        </p>
        <p className="mt-3 text-end text-xs">
          {vacancy.postedDate != null ? getTimeAgo(vacancy.postedDate) : ''}
        </p>
        <Link
          href={`/detail-lowongan-perkerjaan/${'jobVacancyCode'}`}
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
