import { parseISO, formatDistanceToNow } from 'date-fns'
import { nanoid } from '@reduxjs/toolkit'

export const orderByMostRecent = (array) => {
    return array.slice().sort((a, b) => b.date.localeCompare(a.date))
}

export const getTimePeriod = (timestamp) => {
    const date = parseISO(timestamp)
    return formatDistanceToNow(date)
}

export const getCurrentTimestamp = () => {return new Date().toISOString()}

export const getRandomId = () => {return nanoid()}