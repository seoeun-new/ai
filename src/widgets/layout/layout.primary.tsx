import { Outlet } from 'react-router-dom'
import { Toast, Dialog } from '@/entities'
import { globalStore } from '@/shared'
import Aside from '../aside'
import GnbMenu from '../gnb'
import { Header, HeaderSub } from '../header'
import { Outerwrap, Wrap } from './layout.style'

const _ = () => {
	// const { header, setHeader } = globalStore()	
	// const global = useRecoilValue(globalState)
	const global = globalStore()

	const headerClassName = ()=>{
		let cls ='wrap'
		if(global.footer.fixed) cls+= ' has-footer ';
		if(global.footer.reple) cls+= ' has-reple ';
		if(global.menubar.fixed) cls+= ' has-menubar ';
		cls += global.footer.class;
		return cls;
	}

	return (
		<Outerwrap className='outer-wrap'>
			<Aside />
			<Wrap className={headerClassName()}>
			{ global.header.type === 'main' ? <Header /> 
					: global.header.type === 'sub' ? 
					<HeaderSub title={ global.header.title } 
						back={ global.header.back } 
						close={ global.header.close } 
						menu={ global.header.menu } 
						trash={ global.header.trash } /> 
					: null } 
				<Outlet />
				{global.header.menu ? <GnbMenu /> : null}
				<Toast />
				<Dialog />
			</Wrap>
		</Outerwrap>
	)
}

export default _
