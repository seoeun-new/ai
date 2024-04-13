'use client'

import { Button, useDialog } from '@/entities'

const DialogToast = () => {
	const { dialog } = useDialog();
	const confirm = () =>{
		alert('confirm')
	}
	const cancel = () =>{
		alert('cancel')
	}


	return (
		<div>
        <div className="btn-wrap column">
          <Button className="btn-type1 st1 full" onClick={()=>dialog('alert창 입니다.\n텍스텍스트 텍스트텍스트 텍스트텍스트.', confirm, null)}> alert보기(확인) </Button>
          <Button className="btn-type1 st1 full" onClick={()=>dialog('alert창 입니다.\n텍스텍스트 텍스트텍스트 텍스트텍스트.', null, cancel)}> alert보기(취소) </Button>
          <Button className="btn-type1 st1 full" onClick={()=>dialog('alert창 입니다.\n텍스텍스트 텍스트텍스트 텍스트텍스트.', confirm, cancel)}> alert보기(확인,취소) </Button>
          <Button className="btn-type1 st1 full" onClick={()=>dialog({tit:'타이틀', txt:'alert창 입니다.\n텍스텍스트 텍스트텍스트 텍스트텍스트.'}, confirm, cancel)}> alert보기(타이틀) </Button>
        </div>
    </div>
	)
}

export default DialogToast
