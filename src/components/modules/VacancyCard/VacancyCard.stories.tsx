import type { Meta, StoryObj } from '@storybook/react'
import Button from '@/components/elements/Button'
import VacancyCard from './index'

const meta: Meta<typeof VacancyCard> = {
  component: VacancyCard,
  args: {
    className: 'w-fit',
    vacancy: {
      jobVacancyCode: 'KVCCRP000692',
      positionName: 'ADMIN HRD',
      corporateId: 'CRP000235',
      corporateName: 'Move Forward',
      status: 'Karyawan Kontrak',
      descriptions:
        '\u003Cul\u003E\n\u003Cli\u003EMelakukan proses penerimaan karyawan dari proses Screening sampai Recruiting\u003C/li\u003E\n\u003Cli\u003EMemperbaharui dan memelihara database, catatan, dan laporan SDM dengan data karyawan yang akurat\u003C/li\u003E\n\u003Cli\u003EMempersiapkan kontrak kerja untuk karyawan baru perusahaan\u003C/li\u003E\n\u003Cli\u003EMelakukan penyusunan absensi atau daftar hadit karyawan perusahaan\u003C/li\u003E\n\u003Cli\u003EMemperisapkan berbagai macam internal letter dan outgoing letter\u003C/li\u003E\n\u003Cli\u003EMempersiapkan segala kebutuhan karyawan\u003C/li\u003E\n\u003Cli\u003EMelakukan sosialisasi dan koordinasi terhadap seluruh karyawan\u003C/li\u003E\n\u003C/ul\u003E',
      corporateLogo:
        'https://filesdev.klob.id/public/mco01/kzsb9qzp/2022-02-18_175846.jpg',
      applied: null,
      salaryFrom: null,
      salaryTo: null,
      postedDate: '2022-02-01',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof VacancyCard>

export const Default: Story = {
  render: (args) => (
    <VacancyCard {...args}>
      <Button theme="success" className="w-full">
        KIRIM LAMARAN
      </Button>
    </VacancyCard>
  ),
}
