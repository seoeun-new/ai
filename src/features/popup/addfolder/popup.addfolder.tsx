import { Button, Icon, Input, Popup } from '@/entities'
import{ useState  } from 'react';


const _ = ({open, close}:any) => {
  const [folder, setFolder] = useState('');
	return (
		<Popup open={open} close={close}>
        <div className='pop-header'><b className='title'>폴더명을 입력해주세요.</b></div>
        <div className='pop-body'>
        <Input type='text' value={ folder } className='folder' placeholder='폴더명 (필수)' del={ true } onChange={(e:any) => {setFolder(e.target.value)}} />
        </div>
        <div className='pop-footer'>
          <div className='btn-wrap'>
            <Button className='btn-type1 st1' onClick={close}><Icon type='plus' /><span>추가</span></Button>
          </div>
        </div>
    </Popup>
	)
}

export default _
