import { Button, Input, CalendarSection, Calendar, Tabs, TabList, TabPanel, Checkbox, RadioGroup } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import { MenuBar } from '@/widgets'
import PopSelectClass from '@/features/popup/selectclass/popup.selectclass'

import Contents from './report.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title:'알림장',
			back: true,
			menu:true
		})
	}, [])


	//달력
	const [selectDay, setSelectDay] = useState(new Date()); 
	const [date, setDate] = useState(new Date());
	const [activeStartDate, setActiveStartDate] = useState(undefined);
	const [mark, setMark] = useState([]);
	const [attend, setAttend] = useState([]);

	const selectDayHandler = (d:any) =>{ setSelectDay(d); }
	const activeStartDateHandler = (date:any) =>{ 
		const dateToSet = new Date(date);
		dateToSet.setMonth(dateToSet.getMonth());
		const beginOfMonth: any = new Date(dateToSet.getFullYear(), dateToSet.getMonth(), 1)

		setActiveStartDate(beginOfMonth);
		setDate(dateToSet)
	}
	const markHandler = (data:any) =>{ setMark(data) }


	//반선택 팝업
	const classList = [
		{name:'전체', total:20, taacher:''},
		{name:'아리스토텔레스반', total:8, taacher:'김이순신'},
		{name:'가가반', total:12, taacher:'을지문덕'},
		{name:'나나반', total:5, taacher:'홍길동'},
		{name:'노노반', total:10, taacher:'강감찬'}
	]
	const [selecedClass, setSelectedClass] = useState(classList[0])
	const [popClass, setPopClass] = useState(false)
  const popOpenClass = () => { setPopClass(true) }
  const popCloseClass = () => { setPopClass(false) }

	
  const [tabIndex, setTabIndex] = useState(0);
	const tabIndexChange = (idx:any) => {
		setTabIndex(idx);
	};

// 필수 동의 항목
const allCheckdata = [
	{ value: 1, name: '홍길동' },
	{ value: 2, name: '을지문덕' },
	{ value: 3, name: '이황' }
]

// 단일선택
const [checkItems, setCheckItems] = useState<any>([])
const handleSingleCheck = (checked: any, id: any) => {
	if (checked) {
		setCheckItems((prev: any) => [...prev, id])
	} else {
		setCheckItems(checkItems.filter((el: any) => el !== id))
	}
}
// 전체 선택
const handleAllCheck = (checked: any) => {
	if (checked) {
		let idArray: any = []
		allCheckdata.forEach(d => idArray.push(d.value))
		setCheckItems(idArray)
	} else {
		setCheckItems([])
	}
}

useEffect(() => {
	markHandler(['2024-03-17', '2024-03-20', '2024-03-25', '2024-04-02', '2024-04-12', '2024-05-02', '2024-06-02', '2024-07-02', '2024-08-02'])
}, [])


	return (
		<>
			<Contents>
				<div className='report-list-wrap'>
					<div className='page-top-area'>
						<Button className='btn-select' onClick={popOpenClass}><span>{selecedClass.name}</span><em>({selecedClass.total})</em></Button>
						<CalendarSection className='calendar-wrap' date={date}
								setActiveStartDate={setActiveStartDate}
								activeStartDateHandler={activeStartDateHandler}
								selectDayHandler={selectDayHandler}
							>
								<Calendar value={date} selected={selectDay} mark={mark} attend={attend}
									onChange={(v:any)=>{
										activeStartDateHandler(v);
										selectDayHandler(v);
									}}
									activeStartDate={activeStartDate}
									onActiveStartDateChange={setActiveStartDate}
								>
									<div className='mark'>
										<div className='dot report'></div>
									</div>
								</Calendar>
							</CalendarSection>
					</div>
					<div className='report-list-section'>
						<div className='date-text'>
							<div className='year'>2024 </div>
							<div className='date'>02.28</div>
							<span className='day'>목요일</span>
						</div>
						<Tabs index={ tabIndex } className='tab-type1' tabChange={tabIndexChange}>
							<TabList>
								<Button>전체</Button>
								<Button>작성완료</Button>
								<Button>미작성</Button>
							</TabList>
							<TabPanel>
								<div className='tab-content'>
									<div className='child-info-list'>
										<div className='menu'>
											<Checkbox name='check-all' onChange={handleAllCheck} checked={checkItems.length === allCheckdata.length}>
												전체
											</Checkbox>
										</div>
										<ul>
											{allCheckdata?.map((data, key) => (
												<li key={key}>
													<div className='box'>
														<Checkbox key={key} name={`check-${data.value}`} onChange={(e: any) => handleSingleCheck(e, data.value)} checked={checkItems.includes(data.value)} />
														<div className='thumb'><img src={process.env.PUBLIC_URL +'/images/temp/temp-album.jpg'} alt='' /></div>
														<div className='desc'>
															<div className='info'><span>풀입반</span><span>{data.name}</span></div>
															<div className='teacher'>이순신 선생님</div>
														</div>
													</div>
												</li>
											))}
										</ul>
									</div>
					
								</div>
								<div className='tab-content'>
									<div className='child-info-list'>
										<ul>
											{allCheckdata?.map((data, key) => (
												<li key={key}>
													<div className='box'>
														<div className='thumb'><img src={process.env.PUBLIC_URL +'/images/temp/temp-album.jpg'} alt='' /></div>
														<div className='desc'>
															<div className='info'><span>풀입반</span><span>{data.name}</span></div>
															<div className='teacher'>이순신 선생님</div>
														</div>
														<div className='time'>10:00</div>
													</div>
												</li>
											))}
										</ul>
									</div>
								</div>
							</TabPanel>
						</Tabs>
						<div className='btn-wrap'><Button className='btn-type1 st1'>알림장 작성</Button></div>
					</div>
				</div>
			</Contents>

			<PopSelectClass
				value={selecedClass}
				data={classList}
				open={popClass} 
				close={popCloseClass}
				onChange={setSelectedClass}
			/>
			<MenuBar menu='alarm' />	
		</>
	)
}

export default _
