import { useState, useEffect } from 'react'
import { globalStore } from '@/shared'

import { Button, Icon, CalendarSection, Calendar } from '@/entities'
import PopSelectClass from '@/features/popup/selectclass/popup.selectclass'
import PopSelectList from '@/features/popup/selectlist/popup.selectlist'
import { MenuBar } from '@/widgets'

// import moment from 'moment';

import Contents from './home.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'main', title: '', menu: true
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
	const attendHandler = (data:any) =>{ setAttend(data) }


	//반선택 팝업
	const classList = [
		{name:'전체', total:20},
		{name:'아리스토텔레스반', total:8},
		{name:'가가반', total:12},
		{name:'나나반', total:5},
		{name:'노노반', total:10}
	]
	const [selecedClass, setSelectedClass] = useState(classList[0])
	const [popClass, setPopClass] = useState(false)
  const popOpenClass = () => { setPopClass(true) }
  const popCloseClass = () => { setPopClass(false) }

	//필터 팝업
	const filterList = [
		{name:'전체'},
		{name:'필수공지'},
		{name:'일정'},
		{name:'귀가동의'},
		{name:'투약의뢰'}
	]
	const [selecedFilter, setSelectedFilter] = useState(filterList[0])
	const [popFilter, setPopFilter] = useState(false)
  const popOpenFilter = () => { setPopFilter(true) }
  const popCloseFilter = () => { setPopFilter(false) }


	useEffect(() => {
		markHandler(['2024-03-17', '2024-03-20', '2024-03-25', '2024-04-02', '2024-05-02', '2024-06-02', '2024-07-02', '2024-08-02'])
		attendHandler(['2024-03-31', '2024-05-17', '2024-05-20', '2024-05-25', '2024-04-02', '2024-04-03', '2024-04-15', '2024-04-17', '2024-04-20', '2024-05-02','2024-06-02','2024-07-02','2024-08-02']);
	}, [])

	return (
		<>
			<Contents>
				<div className='main-notice-area'>
					<div className='noti-alarm good'>
						<i></i>
						<div className='txt'>안심하세요. 우리 AI가 함께하고 있어요</div>
					</div>
					<div className='noti-alarm bad'>
						<i></i>
						<div className='txt'>어린이집 이탈 인 아이가 있어요!</div>
					</div>
					<div className='user-desc'>
						<div className='img'>
							<img src={process.env.PUBLIC_URL +'/images/temp/temp-profile.png'} alt='' />
						</div>
						<div className='desc'>
							<span>안녕하세요. </span>
							<b><em>이미숙원장</em><span>님</span></b>
						</div>
						<div className='reset'>
							<button></button>
						</div>
					</div>
					<div className='belong'>
						<div className='select'>
							<button className={selecedClass.name === '전체' ? 'total' : 'class-name'} onClick={popOpenClass}><span>{selecedClass.name}({selecedClass.total})</span><span className='arr'></span></button>
						</div>
						<span className='class-name'><span className='name'>풀잎반</span></span>
					</div>
					<div className='character'>
						<div className='body'></div>
						<div className='hand'></div>
					</div>
				</div>

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
								<div className='dot required'></div>
								<div className='dot integrated'></div>
								<div className='dot regist'></div>
								<div className='dot homecoming'></div>
								<div className='dot dosage'></div>
							</div> 
						</Calendar>

						<div className='legend'>
							<span className='required'><i></i><span className='txt'>필수공지</span></span>
							<span className='integrated'><i></i><span className='txt'>보육통합</span></span>
							<span className='regist'><i></i><span className='txt'>직접등록</span></span>
							<span className='homecoming'><i></i><span className='txt'>귀가</span></span>
							<span className='dosage'><i></i><span className='txt'>투약</span></span>
						</div>
						<div className='info-wrap'>
							<div className='left'>
								<span className='info'>
									<Icon type='attend' />
									<span className='txt'>출석</span>
									<b className='num'>49</b>
									<span className='unit'>명</span>
								</span>
							</div>
							<div className='right'>
								<span className='info'>
									<Icon type='caution' />
									<span className='txt'>행동 주의 아동</span>
									<b className='num'>3</b>
									<span className='unit'>명</span>
								</span>
							</div>
						</div>
					</CalendarSection>

					<div className='dashboard-wrap'>
						<div className='recent-time'>
							<span className='label'>최근 접속 시간</span>
							<span className='time'>2024.02.28  17:00</span>
						</div>
						<div className='dashboard-box'>
							<ul>
								<li>
									<em>귀가동의서</em>
									<b>47</b>
									<span>+40</span>
								</li>
								<li>
									<em>투약의뢰서</em>
									<b>11</b>
									<span>+118</span>
								</li>
								<li>
									<em>알림장</em>
									<b>6</b>
									<span>+6</span>
								</li>
								<li>
									<em>공지</em>
									<b>1</b>
									<span>+15</span>
								</li>
							</ul>
						</div>
						
						<div className='schedule-wrap'>
							<div className='header-area'>
								<ul className='menu'>
									<li><Button to='/'><Icon type='calendar' /><span>일정</span></Button></li>
									<li><Button to='/'><Icon type='bob' /><span>식단</span></Button></li>
								</ul>							
								<div className='selected-date'>
									<div className='year'>2024 </div>
									<div className='date'>02.28</div>
									<span className='day'>목요일</span>
								</div>
								<div className='right'>
								<button className='btn-filter' onClick={popOpenFilter}>필터</button>
							</div>
							</div>
							<div className='schedule-list'>
								<div className='box-set'>
									<div className='box'>
										<span className='icon required'><i></i></span>
										<div className='desc'>
											<em>필수공지</em>
											<span>건강검진</span>
										</div>
									</div>
									<div className='box'>
										<span className='icon noti'><i></i></span>
										<div className='desc'>
											<em>보육통합</em>
											<span>누리등록 마감일</span>
										</div>
									</div>
									<div className='box'>
										<span className='icon noti'><i></i></span>
										<div className='desc'>
											<em>어린이집</em>
											<span>어울놀이 현장학습</span>
										</div>
									</div>
								</div>
								<div className='box-set'>
									<div className='box'>
										<span className='icon dosage'><i></i></span>
										<div className='desc'>
											<em>투약의뢰서</em>
											<span>조인성</span>
										</div>
										<span className='time'><span>10:00</span></span>
									</div>
									<div className='box'>
										<span className='icon homecoming'><i></i></span>
										<div className='desc'>
											<em>귀가동의서</em>
											<span>이이경</span>
										</div>
										<span className='time'><span>08:43</span></span>
									</div>
								</div>
							</div>
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

			<PopSelectList
				title='목록 필터'
				value={selecedFilter}
				data={filterList}
				open={popFilter}
				close={popCloseFilter}
				onChange={setSelectedFilter}
			/>

			<MenuBar menu='home' />
		</>
	)
}

export default _
