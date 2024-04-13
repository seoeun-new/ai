import { Calendar } from 'react-calendar';
import moment from 'moment';
import { CalendarWrap } from './calendar.style'

const _ = ({ children, className, value, selected, mark, attend, select, activeStartDate, onChange, setActiveStartDate }: any) => {
	
  return (
    <CalendarWrap className={className}>
      <Calendar
        calendarType="gregory"
        onChange={(v)=> {
          onChange(v)
        }}
        onClickDecade={(value, event) => console.log('Clicked decade: ', value)}
        formatDay={(locale, date) => moment(date).format("DD")}
        value={value}
        showNavigation={false}
        tileContent={({ date, view }) => {
          if (mark && mark.find((x:any) => x === moment(date).format("YYYY-MM-DD"))) {
            return children
          }
        }}
       activeStartDate={activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) =>
        setActiveStartDate && setActiveStartDate(activeStartDate)
        }

        tileClassName={({ activeStartDate, date, view }) => {
          let name = ''
          if(view === 'month' && moment(date).format("YYYY-MM-DD") === moment(selected).format("YYYY-MM-DD")) name += ' selected'
          if (attend && attend.find((x:any) => x === moment(date).format("YYYY-MM-DD"))) {
            name += ' attend'
          }
          if(moment(date).format("YYYY-MM-DD") === moment(new Date()).format("YYYY-MM-DD")) name += ' today'
          return name
        }}
      />
    </CalendarWrap>
  ) 
}

export default _
