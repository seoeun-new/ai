import { gnbOpen } from '@/shared'
import { Button, Icon } from '@/entities'
import { Header } from './header.style'

const _ = ({ title, back, close, menu, trash }: any) => {
  let backBtn = back ? <Button className="btn-back"> <Icon type="back"></Icon> </Button> : ''
  let closeBtn = close ? <Button className="btn-close"> <Icon type="close"></Icon> </Button> : ''
  let menuBtn = menu ? <Button className="btn-menu" onClick={gnbOpen}><Icon type="menu" /></Button> : ''
  let deleteBtn = trash ? <Button className="btn-delete"><Icon type="trash" /></Button> : ''

	return (
		<Header className="header-sub">
		<div className="left">
			{ backBtn }
		</div>
		<h1 className="title">{ title }</h1>
		<div className="right">
			{ closeBtn }
			{ menuBtn }
			{ deleteBtn }
		</div>
		</Header>
	)
}

export default _
