import { gnbOpen } from '@/shared'
import { Button, Icon } from '@/entities'
import { Header } from './header.style'

const _ = ({ title, back, close, menu, trash, dotmenu }: any) => {
  let backBtn = back ? <Button className="btn-back"> <Icon type="back"></Icon> </Button> : ''
  let closeBtn = close ? <Button className="btn-close"> <Icon type="close"></Icon> </Button> : ''
  let menuBtn = menu ? <Button className="btn-menu" onClick={gnbOpen}><Icon type="menu" /></Button> : ''
  let deleteBtn = trash ? <Button className="btn-delete"><Icon type="trash" /></Button> : ''
  let dotMenuBtn = dotmenu ? <Button className="btn-dot-menu"><Icon type="dot-menu" /></Button> : ''

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
			{ dotMenuBtn }
		</div>
		</Header>
	)
}

export default _
