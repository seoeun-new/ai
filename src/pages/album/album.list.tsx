import { Button } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import { MenuBar } from '@/widgets'
import PopBoard from '@/features/popup/board/popup.board'
import PopSelectClass from '@/features/popup/selectclass/popup.selectclass'

import Contents from './album.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title:'앨범',
			back: true,
			menu:true
		})
	}, [])

  
	//반선택 팝업
	const classList = [
		{name:'전체', total:20, taacher:''},
		{name:'아리스토텔레스반', total:8, taacher:'김이순신'},
		{name:'가가반', total:12, taacher:'을지문덕'},
		{name:'나나반', total:5, taacher:'홍길동'},
		{name:'노노반', total:10, taacher:'강감찬'}
	]
	const [selecedClass, setSelectedClass] = useState(classList[0])
	const [popClass, setPopClass] = useState(false)
  const popOpenClass = () => { setPopClass(true) }
  const popCloseClass = () => { setPopClass(false) }



	//게시물 img 팝업
	const [popIng, setPopIng] = useState(false)
  // const popOpenIng = () => { setPopIng(true) }
  const popCloseIng = () => { setPopIng(false) }

	return (
		<>
			<Contents>
				<div className="album-list-wrap">
					<div className="page-top-area">
					<Button className="btn-select" onClick={popOpenClass}><span>{selecedClass.name}</span><em>({selecedClass.total})</em></Button>
					</div>
					<div className="days-album-wrap">
						<div className="date-text">
							<div className="year">2024 </div>
							<div className="date">02.28</div>
							<span className="day">목요일</span>
						</div>
						<div className="photo-list-box">
							<div className="info">
								<div className="class-name">풀잎반</div>
								<div className="teacher-name">이미현<span>선생님</span></div>
							</div>
							<ul>
								<li>
									<Button className="link">
										<div className="thumb"><img src={process.env.PUBLIC_URL +'/images/temp/temp-notice.jpg'} alt="" /></div>
										<div className="text">풀잎반 아이들 이번주 활동사진 입니다^^</div>
									</Button>
								</li>
								<li>
									<Button className="link">
										<div className="thumb"><img src={process.env.PUBLIC_URL +'/images/temp/temp-notice.jpg'} alt="" /></div>
										<div className="text">풀잎반 아이들 이번주 활동사진 입니다^^</div>
									</Button>
								</li>
							</ul>
						</div>
						<div className="photo-list-box">
							<div className="info">
								<div className="class-name">풀잎반</div>
								<div className="teacher-name">이미현<span>선생님</span></div>
							</div>
							<ul>
								<li>
									<Button className="link">
										<div className="thumb"><img src={process.env.PUBLIC_URL +'/images/temp/temp-notice.jpg'} alt="" /></div>
										<div className="text">풀잎반 아이들 이번주 활동사진 입니다^^</div>
									</Button>
								</li>
								<li>
									<Button className="link">
										<div className="thumb"><img src={process.env.PUBLIC_URL +'/images/temp/temp-notice.jpg'} alt="" /></div>
										<div className="text">풀잎반 아이들 이번주 활동사진 입니다^^</div>
									</Button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Contents>

			<PopSelectClass
				value={selecedClass}
				data={classList}
				open={popClass} 
				close={popCloseClass}
				onChange={setSelectedClass}
			/>
    <PopBoard
        type='ing'
        title='작성 중인 게시물이 있어요.'
				data={{name:'파일명파일명'}}
				open={popIng} 
				close={popCloseIng}
			/>

    <MenuBar menu="album" />	
		</>
	)
}

export default _
