import { useDialog } from './dialog.use'
import { Dialog } from './dialog.style'
import { Button } from '@/entities'

const _ = () => {
	const { close, dialogs }: any = useDialog()
	return (
    <>
      {dialogs.map((dialog:any) => {
        let msg = typeof dialog.message == 'string' ? dialog.message : dialog.message.txt;
        return (
          <Dialog key={dialog.id} id={dialog.id} className={dialog.show ? "on" : ''}>
            <div className="dim"></div>
            <div className="popup">
              <div className="pop-body">
                {dialog.message.tit ?  <div className="dialog-tit">{dialog.message.tit}</div> : null}
                <div className="dialog-txt">
                  {msg.split('\n').map((line:any, idx:any) => {
                    return (<span key={`alertinner`+idx}>{line}<br/></span>)
                  })}
                </div>
              </div>
              <div className="pop-footer">
                <div className="btn-wrap">
                  {dialog.cancle ? <Button className="st2" onClick={()=>{dialog.cancle();close(dialog.id)}}>취소</Button> : null}
                  {dialog.confirm ? <Button className="st1" onClick={()=>{dialog.confirm();close(dialog.id)}}>확인</Button> : null}
                </div>
              </div>
            </div>
          </Dialog>
        );
      })}
    </>
	)
}

export default _
