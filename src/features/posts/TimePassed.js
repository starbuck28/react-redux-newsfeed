import React from 'react'
import styled from 'styled-components'
import { getTimePeriod } from '../../transformers'

const TimePassed = ({ timestamp }) => {
    let timePassed = ''
    if (timestamp) {
        const timePeriod = getTimePeriod(timestamp)
        timePassed = `${timePeriod} ago`
    }
    return (
        <StyledTime data-testid="time-period">{timePassed}</StyledTime>
    )
}

const StyledTime = styled.span`
    font-size: 10px;
    color: #8494AB; 
    `

export default TimePassed