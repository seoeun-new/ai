import { useState, useEffect } from 'react'
import { Popup } from './popup.style'

const _ = ({ children, open, title, close }: any) => {
	const [animate, setAnimate] = useState(false)
	const [visible, setVisible] = useState(open)
	useEffect(() => {
		setVisible(open)
		if (visible && !open) {
			setAnimate(true)
			setTimeout(() => setAnimate(false), 200)
		}
		return () => {
			setVisible(false)
		}
	}, [visible, open])

	if (!animate && !visible) return null

	return (
		<Popup className={open ? 'popwrap open' : 'modal close'}>
			<div className='dim' onClick={close}></div>
			<div className='popup'>
				{children}
			</div>
		</Popup>
	)
}

export default _
