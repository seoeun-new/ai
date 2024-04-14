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
		markHandler(['2024-03-17', '2024-03-20', '2024-03-25', '2024-04-02', '2024-04-12', '2024-05-02','2024-06-02','2024-07-02','2024-08-02']);
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

        <div className='date-danger-list'>
          <div className='date-text'>
            <div className='year'>2024 </div>
            <div className='date'>02.28</div>
            <span className='day'>목요일</span>
          </div>
          <div className='data-table-list'>
            <div className='list-header'>
              <div className='row'>
                <div className='cell' style={{width:'18%'}}>번호</div>
                <div className='cell' style={{width:'25%'}}>발생시각</div>
                <div className='cell' style={{width:'30%'}}>해결시각</div>
                <div className='cell auto'>리포트</div>
              </div>
            </div>
            <div className='list-body'>
              <div className='row'>
                  <div className='cell' style={{width:'18%'}}>01</div>
                  <div className='cell' style={{width:'25%'}}>08:23</div>
                  <div className='cell' style={{width:'30%'}}>02.20 08:25</div>
                  <div className='cell auto'>등록</div>
              </div>
              <div className='row'>
                  <div className='cell' style={{width:'18%'}}>01</div>
                  <div className='cell' style={{width:'25%'}}>08:23</div>
                  <div className='cell' style={{width:'30%'}}><span className='c-red'>미결</span></div>
                  <div className='cell auto'>등록</div>
              </div>
              <div className='row'>
                <div className='cell' style={{width:'18%'}}>01</div>
                <div className='cell' style={{width:'25%'}}>08:23</div>
                <div className='cell' style={{width:'30%'}}>02.20 08:25</div>
                <div className='cell auto'>등록</div>
            </div>
            </div>
          </div>
        </div>      
      </div>
			</Contents>
		</>
	)
}

export default _
