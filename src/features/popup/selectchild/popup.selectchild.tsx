import { Button, Popup } from '@/entities'
import{ useRef, useState } from 'react';


const _ = ({data, type, title, value, open, close, onChange}:any) => {


  const [seleced, setSelected] = useState();
  const clsList = useRef<HTMLDivElement>(null);
  const selectChild = (idx:any) =>{
    if(clsList.current) clsList.current.classList.add('on');
    setSelected(idx);
    onChange(data[idx]);
  }
  
const Child = ({ item }:any) => {
  return (
    <span className='child'>
      <span className='thumb'><img src={process.env.PUBLIC_URL +item.src} alt='' /></span>
      <span className='class-name'>{item.clsName}</span>
      <span className='name'>{item.name}</span>
      {type === 'del' ? <button className='btn-del'></button> : null}
    </span>
  )}

	return (
		<Popup open={open} close={close} className='tit-left'>
        <div className='pop-header'>
          <b className='title align-l'>{title}</b>
          { type ==='del' ? <button className='btn-add'><i className='ico-plus'></i><span>아동추가</span></button> : null}
        </div>      
        <div className='pop-body'>
          <div className='select-list' ref={clsList}>
            <ul>
              {data.map((d:any, idx:any) => {
                return (
                  <li key={`selectChild`+idx}>
                    { type ==='checked' ? <button onClick={(e)=>{selectChild(idx)}} className={`link ${seleced === idx ? 'on' : ''}`}>
                      <Child item={d} />
                    </button>
                    : <Child item={d} /> }
                  </li>
                )
              })}                
            </ul>
          </div>
        </div>
        <div className='pop-footer'>
          <div className='btn-wrap'>
            <Button className='btn-type1 st1' onClick={close}><span>확인</span></Button>
          </div>
        </div>
    </Popup>
	)
}

export default _
