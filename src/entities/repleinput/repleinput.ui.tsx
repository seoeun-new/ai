import { useEffect } from 'react';
import { globalStore } from '@/shared'
import { RepleInput } from './repleinput.style'

const _ = ({ children }: any) => {
	const { setFooter } = globalStore()
	useEffect(() => {
		setFooter({
			fixed: true,
			reple: true
		})
	}, [])

	return (
		<RepleInput className="reple-input-wrap">
         { children }
    </RepleInput>
	)
}

export default _
