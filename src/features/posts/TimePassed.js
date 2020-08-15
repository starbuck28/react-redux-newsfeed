import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'
import styled from 'styled-components'

const TimePassed = ({ timestamp }) => {
    let timePassed = ''
    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timePassed = `${timePeriod} ago`
    }
    return (
        <StyledTime>{timePassed}</StyledTime>
    )
}

const StyledTime = styled.span`
    font-size: 10px;
    color: #8494AB; 
    `

export default TimePassed