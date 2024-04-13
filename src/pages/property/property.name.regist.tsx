import { Button, Input, Popup } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect, useState, useRef } from 'react'
import Contents from './property.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title:'속성 등록',
			back: true,
			close:true
		})
	}, [])

    
  const [name, setName] = useState('');

 //입력 정보  팝업
	const [popInputInfo, setPopInputInfo] = useState(true);

 //아동선택  팝업
	const [popChildren, setPopChildren] = useState(true);
	const childrenList = useRef<HTMLDivElement>(null);
	const selectChildren = (e:any) =>{
      if(childrenList.current){
        childrenList.current.querySelectorAll('button').forEach((el: HTMLButtonElement) => {
          el.classList.remove('on');
        });
        e.target.classList.add('on');
      }
	}

	return (
		<>
			<Contents>
        <div className='name-regist-wrap'>
          <div className='property-box name-regist'>
            <b>이름을 등록해주세요.</b>
            <div className='txt'>
              아동 정보 보호를 위해 어린이집 등록 여부를 확인하고 있어요.
              <br />어린이집에서 확인 가능한 <em>실명을 입력해 주세요.</em>
            </div>
            <Input type='text' value={ name } placeholder='실명 입력' del={ true } onChange={(e:any) => {setName(e.target.value)}} />
            <div className='iput-txt'>성함이 외국어로 등록되어 있으신 분은 <em>영문으로 입력해주세요.</em></div>
          </div>
          <div className='btn-wrap btn-step-wrap'>
            <div className='right'><Button className='btn-next'>다음</Button></div>
          </div>
        </div>
			</Contents>


      <Popup open={popInputInfo} close={()=>{setPopInputInfo(false)}}>
        <div className='pop-header'>
          <b className='title'>입력 정보를 다시 한 번 확인해주세요.</b>
        </div>      
        <div className='pop-body'>
          <div className='text c-red'>어린이집에 등록되어  있지 않은 정보에요.
            <br />원장 선생님께 등록을 요청해주세요.</div>
            <div className='text'>
              학부모님의 경우, 대표 학부모님 한 분만 등록이 가능해요.
            </div>
        </div>
        <div className='pop-footer'>
          <div className='btn-wrap'>
            <Button className='btn-type1 st1' onClick={()=>{setPopInputInfo(false)}}><span>확인</span></Button>
          </div>
        </div>
    </Popup>    
    
    <Popup open={popChildren} close={()=>{setPopChildren(false)}}>
        <div className='pop-header'>
          <b className='title'>먼저 등록할 아동을 선택해주세요.</b>
        </div>
					<div className='pop-body'>
            <div className='text'>걱정마세요. 지금 등록하지 않는 아동은 메뉴의 
                <br />아동 정보에서 등록할 수 있어요.</div>
                
            <div className='banner-profile-wrap' ref={childrenList}>
              <div className='banner-profile align-c'>
                <button onClick={selectChildren}>
                  <span className='cls-name'>아리스토텔레스반</span>
                  <span className='name'>홍길동</span>
                </button>
              </div>
              <div className='banner-profile align-c'>
                <button onClick={selectChildren}>
                  <span className='cls-name'>아리스토텔레스반</span>
                  <span className='name'>홍길동</span>
                </button>
              </div>
            </div>           
					</div>
          <div className='pop-footer'>
            <div className='btn-wrap'>
							<Button className='btn-type1 st1' onClick={()=>{setPopChildren(false)}}><span>확인</span></Button>
						</div>
          </div>
			</Popup>         
		</>
	)
}

export default _
