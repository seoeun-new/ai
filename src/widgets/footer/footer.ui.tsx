import { globalStore } from '@/shared'
import { useEffect } from 'react'
import { Footer } from './footer.style'

const _ = ({ children, className }: any) => {
	const { setFooter } = globalStore()
	useEffect(() => {
		setFooter({ fixed: true, class:className})
	}, [])

	return <Footer className={`footer ` + className}>{children}</Footer>
}

export default _
