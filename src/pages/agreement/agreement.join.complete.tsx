import { Button } from '@/entities'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect } from 'react'
import Contents from './agreement.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title:'',
			back: true
		})
	}, [])

	return (
		<>
			<Contents>
				<div className='join-complete-wrap'>
					<div className='visual'></div>

					<strong className='tit'>회원가입이 완료되었어요!</strong>
					<div className='text'>
						텍스트텍스트텍스트텍스트텍스트텍스트
						<br />
						텍스트텍스트텍스트텍스트텍스트텍스트
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1'>
						<span>로그인하기</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
