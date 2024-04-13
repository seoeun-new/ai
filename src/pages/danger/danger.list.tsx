import { Icon, CalendarSection, Calendar } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './danger.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title:'AI 위험 알림 목록',
			back: true
		})
	}, [])

	
	//달력
	const [selectDay, setSelectDay] = useState(new Date()); 
	const [date, setDate] = useState(new Date());
	const [activeStartDate, setActiveStartDate] = useState(undefined);
	const [mark, setMark] = useState([]);

	const selectDayHandler = (d:any) =>{ setSelectDay(d); }
	const activeStartDateHandler = (date:any) =>{ 
		const dateToSet = new Date(date);
		dateToSet.setMonth(dateToSet.getMonth());
		const beginOfMonth: any = new Date(dateToSet.getFullYear(), dateToSet.getMonth(), 1)

		setActiveStartDate(beginOfMonth);
		setDate(dateToSet)
	}
	const markHandler = (data:any) =>{ setMark(data) }

	useEffect(()=>{
		markHandler(['2024-03-17', '2024-03-20', '2024-03-25', '2024-04-02', '2024-05-02','2024-06-02','2024-07-02','2024-08-02']);
	});

  
	return (
		<>
			<Contents>
			<div className='danger-list-wrap'>
        <CalendarSection className='calendar-wrap' date={date} 
          setActiveStartDate={setActiveStartDate} 
          activeStartDateHandler={activeStartDateHandler}
          selectDayHandler={selectDayHandler}
        >
          <Calendar value={date} selected={selectDay} mark={mark}
            onChange={(v:any)=>{
              activeStartDateHandler(v);
              selectDayHandler(v);
            }}
            activeStartDate={activeStartDate}
            onActiveStartDateChange={setActiveStartDate}
          >
            <div className='mark'>
              <div className='caution'></div>
            </div> 
          </Calendar>
        </CalendarSection>        
        <div className='dashboard-box st2'>
          <ul>
            <li>
              <em><Icon type='dashboard-warning' /><span>위험감지</span></em>
              <b>5</b>
            </li>
            <li>
              <em><Icon type='dashboard-solve' /><span>해결</span></em>
              <b>5</b>
            </li>
            <li>
              <em><Icon type='dashboard-report' /><span>보고서</span></em>
              <b>3</b>
            </li>
          </ul>
        </div>
        <div className='data-type1'>
          <table>
              <colgroup>
                  <col style={{width:'25%'}} />
                  <col style={{width:'25%'}} />
                  <col style={{width:'25%'}} />
                  <col style={{width:'25%'}} />
              </colgroup>
              <thead>
                  <tr>
                      <th>번호</th>
                      <th>발생시각</th>
                      <th>해결시각</th>
                      <th>리포트</th>
                  </tr>
              </thead>
              <tbody>
                    <tr>
                      <td>01</td>
                      <td>08:23</td>
                      <td>08:25</td>
                      <td>등록</td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>08:23</td>
                      <td><span className='c-red'>미결</span></td>
                      <td>등록</td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>08:23</td>
                      <td>08:25</td>
                      <td>등록</td>
                    </tr>                    
              </tbody>
          </table>
        </div>
      </div>
			</Contents>
		</>
	)
}

export default _
