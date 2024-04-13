import { Button } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect } from 'react'
import Contents from './privacy.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title:'Open licence',
			back: true
		})
	}, [])
  
	
	return (
		<>
			<Contents>
        <div className='open-license-wrap'>
          <ul className='license-list'>
            <li><Button to='/'><b>#라이센스명</b> <span>#관련 표기 정보</span></Button></li>
            <li><Button to='/'><b>#라이센스명</b> <span>#관련 표기 정보</span></Button></li>
            <li><Button><b>#라이센스명</b> <span>#관련 표기 정보</span></Button></li>
            <li><Button><b>#라이센스명</b> <span>#관련 표기 정보</span></Button></li>
          </ul>
        </div>
			</Contents>
		</>
	)
}

export default _
