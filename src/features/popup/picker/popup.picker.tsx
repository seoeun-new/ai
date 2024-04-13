import { Button, Popup, SelectPicker } from '@/entities'


const _ = ({data, value, open, close, onChange}:any) => {
	return (
		<Popup open={open} close={close}>
        <div className="pop-header">
          <b className="title">시간을 선택해 주세요</b>
        </div>            
        <div className="pop-body">
          <SelectPicker data={data} value={value} onChange={onChange} />
        </div>
        <div className="pop-footer">
          <div className="btn-wrap">
            <Button className="btn-type1 st1" onClick={close}><span>확인</span></Button>
          </div>
        </div>
    </Popup>
	)
}

export default _
