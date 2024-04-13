import { zeroFill, formatBytes } from '@/shared/utils/ui'
import { Button, Radio, RadioGroup, Icon } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import PopPicker from '@/features/popup/picker/popup.picker'

import Contents from './notice.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title:'미리보기',
			back: true
		})
	}, [])

  const [files, setFiles] = useState([
    {path:'오늘의 공지.jpg', size:4500000},
    {path:'오늘의 공지2.jpg', size: 250000},
  ])
  const handleDeleteFile = (id:any) => {
    setFiles(files.filter((_, index) => index !== id));
  };
  
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
  const [dateValue, setDateValue] = useState(['03-04(목)', 'PM', 9, 50])
  
	return (
		<>
			<Contents>
      <div className='notice-detail-wrap'>
        <div className='view-detail'>
            <div className='view-desc'>
              <Button className='btn-dot-menu'></Button>
              <b className='tit'>풀잎반 학부모님들께 안내드립니다.</b>
              <div className='info'>
                <div className='left'>
                  <span className='date'>작성날짜 : 2024.03.06  07:10:01</span>
                  <span className='date'>수정날짜 : 2024.03.06  07:10:01</span>
                </div>
                <div className='right'>
                  <span className='writer'>이유리</span>
                </div>
              </div>
            </div>
            <div className='content-view'>
              <p>풀잎반 수료 페스티벌</p>
              <ul>
                <li>일시: 2월 22일 </li>
              </ul>
              <br />
              <p>신입 재원, 오리엔테이션</p>
              <ul>
                <li>일시 : 2월 24일</li>
                <li>오전 10시 : 만 0세, 만 1세, 만 2세</li>
              </ul>
              <br />
              <img src={process.env.PUBLIC_URL +'/images/temp/temp-notice.jpg'} alt='' />
            </div>
            <div className='file-list' style={files.length <= 0 ? {display:'none'} : {display:'block'}}>
              <ul>
                {files.map((file, id) => (
                  <li key={id}>
                    <Icon type='clip' />
                    <span className='filename'>{file.path}</span>
                    <div className='right'>
                      <span className='byte'>{formatBytes(file.size)}</span>
                      <button type='button' className='btn-del' onClick={() => handleDeleteFile(id)}></button>
                    </div>
                  </li>
                ))}   
              </ul>
            </div>
          </div>
          <div className='notice-regist-set'>
              <div className='select-box'>
                  <b className='tit'>등록시간 설정</b>
                  <ul>
                    <RadioGroup label='notiTime' value={notiTime} onChange={setNotiTime}>
                      {notiTimeOption.map((item, idx) => (
                          <li key={`radio`+idx}>
                            <Radio key={item.value} value={item.value}>{item.label}</Radio>
                            {item.value === 'custom' && notiTime === 'custom' ? 
                              <button className='btn-time' onClick={popOpenPicker}>
                                <span className='date'>{dateValue[0]}</span>
                                <span className='ampm'>{dateValue[1]}</span>
                                <span className='time'>{zeroFill(dateValue[2], 2)} : {zeroFill(dateValue[3], 2)}</span>
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
      <PopPicker open={popPicker} close={popClosePicker} data={dateData} value={dateValue} onChange={setDateValue} />
		</>
	)
}

export default _
