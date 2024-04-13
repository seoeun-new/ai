import { useState } from 'react'
import TabContext from './tab.context'
import { Tab } from './tab.style'

const _ = ({ children, className, tabChange, ...rest }: any) => {
	const [index, updateIndex] = useState(rest.index)
	const setIndex = (idx: number) => {
		updateIndex(idx)
		tabChange(idx)
	}
	return (
		<TabContext.Provider value={{ index, setIndex }}>
			<Tab className={className}>{children}</Tab>
		</TabContext.Provider>
	)
}

export default _
