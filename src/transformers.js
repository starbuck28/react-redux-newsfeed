import { parseISO, formatDistanceToNow } from 'date-fns'

export const orderByMostRecent = (array) => {
    return array.slice().sort((a, b) => b.date.localeCompare(a.date))
}

export const getTimePeriod = (timestamp) => {
    const date = parseISO(timestamp)
    return formatDistanceToNow(date)
}