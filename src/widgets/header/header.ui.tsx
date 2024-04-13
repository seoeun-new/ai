import { Header } from './header.style'
import { Button, Icon } from '@/entities'

const _ = () => {
	const gnbOpen = (): void => {
		document.body.scrollTop = 0
		document.body.classList.add('open-gnb')
		;(document.querySelector('.outer-wrap') as any).classList.add('open-gnb')
		;(document.querySelector('.gnb-wrap') as any).style.display = 'block'
		;(document.querySelector('.gnb-wrap .gnb-content') as any).scrollTop = 0

		const gnbWrap: any = document.querySelector('.gnb-wrap')
		gnbWrap.style.transition = 'right 300ms ease-in-out'
		gnbWrap.style.right = '0'
	}

	return (
		<Header className='header header-main'>
			<h1 className='name'>
				<Icon type='home' />
				<span>을지로푸르니하나금융어린이집</span>
			</h1>
			<div className='menu'>
				<Button className='btn-menu' onClick={gnbOpen}>
					<Icon type='menu' />
				</Button>
			</div>
		</Header>
	)
}

export default _
