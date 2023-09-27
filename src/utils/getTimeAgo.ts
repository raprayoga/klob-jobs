import TimeAgo from 'javascript-time-ago'
import id from 'javascript-time-ago/locale/id'

export function getTimeAgo(date: string | number | Date): string {
  TimeAgo.addLocale(id)
  const timeAgo = new TimeAgo('id-ID')
  const dateRestructured = restrctureDate(date)
  return timeAgo.format(
    Date.now() - (Date.now() - new Date(dateRestructured).getTime())
  )
}

const restrctureDate = (date: string | number | Date) => {
  const dateParse = `${date}`.split('/')
  dateParse.reverse()
  return dateParse.join('-')
}
