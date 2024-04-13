import { Button, Icon } from '@/entities'
import { Gnb } from './gnb.style'

const _ = () => {
	const gnbClose = () => {
		const gnbWrap: any = document.querySelector('.gnb-wrap')
		gnbWrap.style.transition = 'right 300ms ease-in-out'
		gnbWrap.style.right = '-100%'

		setTimeout(function () {
			gnbWrap.style.display = 'none'
			document.documentElement.classList.remove('open-gnb')
			document.body.classList.remove('open-gnb')
			;(document.querySelector('.outer-wrap') as any).classList.remove('open-gnb')
		}, 300)
	}

	return (
		<Gnb className='gnb-wrap'>
			<div className='gnb-header'>
				<Button as='a' to='/' className='logo'></Button>
				<div className='right'>
					<Button className='btn-close' onClick={gnbClose}>
						<Icon type='close' />
					</Button>
				</div>
			</div>
			<div className='gnb-content'>
				<ul className='alarm-wrap'>
					<li>
						<Button as='a' to='/'>
							<Icon type='alarm-unidentified' />
							<span className='txt'>
								미확인 알림<em>(30)</em>
							</span>
						</Button>
					</li>
					<li>
						<Button as='a' to='/'>
							<Icon type='alarm-danger' />
							<span className='txt'>AI 위험 알림 관리</span>
						</Button>
					</li>
				</ul>
				<ul className='menu-list'>
					<li>
						<Button as='a' to='/'>
							{' '}
							<Icon type='menu-home' />
							<span className='txt'>원 정보</span>
						</Button>
					</li>
					<li>
						<Button as='a' to='/'>
							{' '}
							<Icon type='menu-teacher' />
							<span className='txt'>선생님 정보</span>
						</Button>
					</li>
					<li>
						<Button as='a' to='/'>
							{' '}
							<Icon type='menu-class' />
							<span className='txt'>반 정보</span>
						</Button>
					</li>
					<li>
						<Button as='a' to='/'>
							{' '}
							<Icon type='menu-child' />
							<span className='txt'>원아 정보</span>
						</Button>
					</li>
					<li>
						<Button as='a' to='/'>
							{' '}
							<Icon type='menu-attend' />
							<span className='txt'>전자출결 정보</span>
						</Button>
					</li>
					<li className='line-t'>
						<Button as='a' to='/'>
							{' '}
							<Icon type='menu-privacy' />
							<span className='txt'>개인정보 관리</span>
						</Button>
					</li>
				</ul>
			</div>
		</Gnb>
	)
}

export default _
