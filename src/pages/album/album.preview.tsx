import { zeroFill } from '@/shared/utils/ui'
import { Button, Radio, RadioGroup } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import PopSelectClass from '@/features/popup/selectclass/popup.selectclass'
import PopPicker from '@/features/popup/picker/popup.picker'

import Contents from './album.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title:'앨범 미리보기',
			back: true
		})
	}, [])

  
	//반선택 팝업
	const classList = [
		{name:'전체', total:20, taacher:''},
		{name:'아리스토텔레스반', total:8, taacher:''},
		{name:'가가반', total:12, taacher:''},
		{name:'나나반', total:5, taacher:''},
		{name:'노노반', total:10, taacher:'강감찬'}
	]
	const [selecedClass, setSelectedClass] = useState(classList[0])
	const [popClass, setPopClass] = useState(false)
  const popOpenClass = () => { setPopClass(true) }
  const popCloseClass = () => { setPopClass(false) }


  //공지시간
  const [notiTime, setNotiTime] = useState('1');
  const notiTimeOption = [
    { value: '1', label: '바로 등록' },
    { value: '2', label: '1시간 뒤' },
    { value: '3', label: '2시간 뒤' },
    { value: '4', label: '일과 후' },
    { value: 'custom', label: '지정 시간' }
  ];

  //날자선택팝업
  const [popPicker, setPopPicker] = useState(false)
  const popOpenPicker = () => { setPopPicker(true) }
  const popClosePicker = () => { setPopPicker(false) }

  const dateData = {
    days: ['03-01(월)', '03-02(화)', '03-03(수)', '03-04(목)', '03-05(금)', '03-06(토)', '03-07(일)', '03-08(월)', '03-09(화)', '03-10(수)', '03-11(목)', '03-12(금)', '03-13(토)', '03-14(일)'],
  }
  const [dateValue, setDateValue] = useState([])
  
	return (
		<>
			<Contents>
      <div className='album-detail-wrap'>
        <div className='view-detail'>
            <Button className='btn-select' onClick={popOpenClass}><span>{selecedClass.name}</span><em>({selecedClass.total})</em></Button>
            <div className='view-desc'>
              <Button className='btn-dot-menu'></Button>
              <b className='tit'>풀잎반 아이들 이번주 활동사진 입니다^^ <br />즐거운 한 주를 보냈습니다~</b>
              <div className='info'>
                <div className='left'>
                  <span className='date'>작성날짜 : 2024.03.06  07:10:01</span>
                  <span className='date'>수정날짜 : 2024.03.06  07:10:01</span>
                </div>
                <div className='right'>
                  <span className='writer'>이유리 선생님</span>
                </div>
              </div>
            </div>
            <div className='album-view'>
              <ul className='album-list'>
                <li><div className='img'><img src={process.env.PUBLIC_URL +'/images/temp/temp-album.jpg'} alt='' /></div></li>
                <li><div className='img'><img src={process.env.PUBLIC_URL +'/images/temp/temp-album.jpg'} alt='' /></div></li>
                <li><div className='img'><img src={process.env.PUBLIC_URL +'/images/temp/temp-album.jpg'} alt='' /></div></li>
                <li><div className='img'><img src={process.env.PUBLIC_URL +'/images/temp/temp-album.jpg'} alt='' /></div></li>
              </ul>
              <div className='text'>
                우리아이들 이번주도 신나게 뛰어놀고 많은 성장을
                하였어요. 이번주말에도 가족들과 즐거운 시간 보내
                세요~ 다음주에 보아요^^
              </div>
            </div>
            
          </div>
          <div className='album-regist-set'>
              <div className='select-box'>
                  <b className='tit'>등록시간 설정</b>
                  {dateValue}
                  <ul>
                    <RadioGroup label='notiTime' value={notiTime} onChange={setNotiTime}>
                      {notiTimeOption.map((item, idx) => (
                          <li key={`radio`+idx}>
                            <Radio key={item.value} value={item.value}>{item.label}</Radio>
                            {item.value === 'custom' && notiTime === 'custom' ? 
                              <button className='btn-time' onClick={popOpenPicker}>
                                { dateValue.length > 0 ? <>
                                <span className='date'>{dateValue[0]}</span>
                                <span className='ampm'>{dateValue[1]}</span>
                                <span className='time'>{zeroFill(dateValue[2], 2)} : {zeroFill(dateValue[3], 2)}</span>
                                </>
                                : '시간을 선택해 주세요'}
                              </button>
                            : null}
                          </li>
                        ))}     
                    </RadioGroup> 
                  </ul>
              </div>
          
          <div className='btn-wrap'>
            <Button className='btn-type2 st1'>등록</Button>
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

    <PopPicker open={popPicker} close={popClosePicker} data={dateData} value={dateValue} onChange={setDateValue} />
		</>
	)
}

export default _
