export const orderByMostRecent = (array) => {
    return array.slice().sort((a, b) => b.date.localeCompare(a.date))
}