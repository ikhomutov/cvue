export function formatDate(isoDate) {
  if (!isoDate) return null
  const [year, month] = isoDate.split('-').map(Number)
  const date = new Date(year, (month || 1) - 1)
  return `${date.toLocaleString('en-US', { month: 'short' })}, ${year}`
}

export function formatDateRange(startDate, endDate) {
  const start = formatDate(startDate)
  const end = endDate ? formatDate(endDate) : 'Present'
  if (!start) return end
  return `${start} - ${end}`
}
