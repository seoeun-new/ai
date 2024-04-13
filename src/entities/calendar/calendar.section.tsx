import React, { useState, useEffect } from 'react'
import { CalendarSection } from './calendar.style'

const _ = ({ children, className, date, setActiveStartDate, activeStartDateHandler, selectDayHandler }: any) => {
	const [year, setYear] = useState(date.getFullYear())
	const [month, setMonth] = useState(date.getMonth() + 1)

	const zeroPad = (d: number) => {
		return d < 10 ? '0' + d.toString() : d.toString()
	}
	const setYearMonth = (d: Date) => {
		setYear(d.getFullYear())
		setMonth(zeroPad(d.getMonth() + 1))
	}
	const prevMonth = () => {
		const prevDate = new Date(date.setMonth(date.getMonth() - 1))
		const month = new Date(prevDate.getFullYear(), prevDate.getMonth(), 1)
		setActiveStartDate(month)
		setYearMonth(prevDate)
	}
	const nextMonth = () => {
		const nextDate = new Date(date.setMonth(date.getMonth() + 1))
		const month = new Date(nextDate.getFullYear(), nextDate.getMonth(), 1)
		setActiveStartDate(month)
		setYearMonth(nextDate)
	}

	useEffect(() => {
		setYearMonth(date)
	})

	return (
		<CalendarSection className={className}>
			<div className='calendar-top'>
				<div className='year-month'>
					<button className='prev' onClick={prevMonth}></button>
					<span className='year'>{year}</span>
					<span className='month'>
						<b>{month}</b>
						<span className='unit'>월</span>
					</span>
					<button className='next' onClick={nextMonth}></button>
				</div>
				<div className='right'>
					<button
						className='today'
						onClick={() => {
							activeStartDateHandler(new Date())
							selectDayHandler(new Date())
						}}
					>
						오늘
					</button>
				</div>
			</div>
			{children}
		</CalendarSection>
	)
}

export default _
