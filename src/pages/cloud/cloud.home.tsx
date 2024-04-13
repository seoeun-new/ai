import { Button, Input, Checkbox, Icon } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import PopMenu from '@/features/popup/menu/popup.menu'
import PopAddFolder from '@/features/popup/addfolder/popup.addfolder'

import Contents from './cloud.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title:'클라우드',
			back: true
		})
	}, [])

  
  const [search, setSearch] = useState('');

  //메뉴팝업
  const dataMenu = [
		{name:'수정', fnc:()=>{setModifyHandler(true)}},
		{name:'삭제', fnc:()=>{alert('삭제')}},
	]
  const [popAddFolder, setPopAddFolder] = useState(false)
  const popOpenAddFolder = () => { setPopAddFolder(true) }
  const popCloseAddFolder = () => { setPopAddFolder(false) }

  // 폴더추가 팝업
  const [popMenu, setPopMenu] = useState(false)
  const popOpenMenu = () => { setPopMenu(true) }
  const popCloseMenu = () => { setPopMenu(false) }


  const [totalChk, setTotalChk] = useState(false);
  
  const [check, setCheck] = useState(false);
  const setCheckHandelar = () => { setCheck(!check) }

  const [modify, setModify] = useState(false);
  const setModifyHandler = (v:any) => { setModify(v) }
  
  const folderData = [
    { date: {year:'2024', date:'2.19', day:'월요일'}, files:[
      {id:'1', number:'25', title:'2.28일 오늘의 사진', chk:false, src:process.env.PUBLIC_URL +'/images/temp/temp-profile.png'},
      {id:'2', number:'25', title:'2.28일 오늘의 사진', chk:false, src:process.env.PUBLIC_URL +'/images/temp/temp-profile.png'}
    ]},
    { date: {year:'2024', date:'2.19', day:'월요일'}, chk:false, files:[
      {id:'1', number:'25', title:'2.28일 오늘의 사진', chk:false, src:process.env.PUBLIC_URL +'/images/temp/temp-profile.png'},
      {id:'2', number:'25', title:'2.28일 오늘의 사진', chk:false, src:process.env.PUBLIC_URL +'/images/temp/temp-profile.png'}
    ]}
  ];

	return (
		<>
			<Contents>
				<div className='cloud-home-wrap'>
        <div className='page-top-area'>
          <Input type='text' value={ search } className='search' placeholder='폴더 검색' del={ true } onChange={(e:any) => {setSearch(e.target.value)}} />
          <div className='btn-wrap'>
            <Button className='btn-type1 st2' onClick={popOpenAddFolder}><Icon type='plus'></Icon><span>폴더 추가</span></Button>
          </div>
        </div>
        <div className='cloud-view-wrap'>
          <div className='menus'>
            <div className='left'>
              {!totalChk ? <Button className='btn-selc' onClick={()=>{setTotalChk(true)}}>전체선택</Button> : <Button className='btn-selc on' onClick={()=>{setTotalChk(false)}}>전체삭제</Button> }
              
            </div>
            <div className='right'>
              <Button className={`btn-selc ` + (check ? 'on' : '')} disabled={!check}>선택폴더 삭제</Button>
            </div>
          </div>
          {folderData.map((item, idx) => (
            <div key={`folder` + idx} className='cloud-folder'>
              <div className='folder-date'><span className='year'>{item.date.year}</span><b>{item.date.date}</b><span className='days'>{item.date.day}</span></div>
              <ul>
              	{item.files.map((file, i) => (
                  <li key={`files`+ idx + i}>
                    <div className='menu'>
                      <Checkbox checked={check} onChange={setCheckHandelar} />
                      <div className='right'>
                        <span className='number'>{file.number}장</span>
                        <Button className='btn-dot-menu' onClick={popOpenMenu}></Button>
                      </div>
                    </div>
                    <Button className='link'>
                      <div className='thumb'><img src={process.env.PUBLIC_URL +'/images/temp/temp-profile.png'} alt='' /></div>
                      <div className='desc'>
                        {modify ? <Input type='text' value={file.title} del={ true } /> : <div className='txt'>{file.title}</div> }
                      </div>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}     
        </div>
      </div>
			</Contents>

			<PopMenu
				data={dataMenu}
				open={popMenu} 
				close={popCloseMenu}
			/>

    	<PopAddFolder
				open={popAddFolder} 
				close={popCloseAddFolder}
			/>
	
		</>
	)
}

export default _
