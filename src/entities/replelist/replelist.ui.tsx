import { Button } from '@/entities'
import { RepleList } from './replelist.style'

const _ = ({ data, onPop }: any) => {

	return (
		<RepleList className="reple-wrap">
      <div className="tit"><b>댓글</b><em>{data.length}</em></div>
      <ul className="reple-list">
        {data.map((item:any, idx:any) => (
          <li key={`reple`+idx}>
            <div className="reple">
              <Button className="btn-dot-menu2" onClick={onPop && onPop[0]}></Button>
              <div className="desc">
                <div className="thumb"><img src={item.src} alt="" /></div>
                <div className="info"><b>{item.user}</b><span className="date"><span>{item.date}</span><span>{item.time}</span></span></div>
              </div>
              <div className="text">{item.to ? <em>@{item.to}</em> : null}{item.reple}</div>
            </div>
          </li>
        ))}   
      </ul>
    </RepleList>
	)
}

export default _
