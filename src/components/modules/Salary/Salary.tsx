import React from 'react'
import Badge from '@/components/elements/Badge'

export const Salary = (salaryFrom: number | null, salaryTo: number | null) => {
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
