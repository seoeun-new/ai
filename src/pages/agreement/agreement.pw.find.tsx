import { useEffect, useState } from 'react'
import { globalStore } from '@/shared'
import { Button, Input, Tabs, TabList, TabPanel } from '@/entities'
import { Footer } from '@/widgets'
import Contents from './agreement.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title:'아이디/비밀번호찾기',
			back: true
		})
	}, [])
	
	const [tabIndex, setTabIndex] = useState(0);
	const tabIndexChange = (idx:any) => {
		setTabIndex(idx);
	};

	const [id, setId] = useState('');
	const idChange = (e:any) => {
		setId(e.target.value);
	};

	const [phone, setPhone] = useState('');
	const phoneChange = (e:any) => {
		setPhone(e.target.value);
	};
	
	const [phoneSend, setPhoneSend] = useState(false);
	const onPhoneSend = (e:any) => {
		setPhoneSend(true);
	};

	return (
		<>
			<Contents>
			<div className='idpw-find-wrap'>
					<Tabs index={ tabIndex } className='tab-type1' tabChange={tabIndexChange}>
						<TabList>
							<Button>아이디찾기</Button>
							<Button>비밀번호찾기</Button>
						</TabList>
						<TabPanel>
							<div className='tab-content'>
								<div className='join-form'>
									<div className='txt-guide'>등록한 <b>휴대폰번호</b>를 입력해주세요.</div>
									<div className='form-wrap'>
										<Input type='text' value={ phone } placeholder='휴대폰번호 입력' del={ true } onChange={phoneChange} />
										{phoneSend ? <Input type='number' placeholder='인증번호 6자리 입력' del={ true }><span className='time'>03:00</span></Input> : null}
									</div>
								</div>
							</div>
							<div className='tab-content'>
							<div className='join-form'>
									<div className='txt-guide'><b>아이디</b>를 입력해주세요.</div> 
									<div className='form-wrap'>
										<Input type='text' value={ id } placeholder='아이디 입력' del={ true } onChange={idChange} />
									</div>
								</div>
							</div>
						</TabPanel>
					</Tabs>
        </div>
			</Contents>
			<Footer>
				{tabIndex === 0 ? <div className='btn-wrap'>
					{!phoneSend ? <Button className='btn-type1 st1' disabled={phone.length > 0 ? false : true} onClick={onPhoneSend}><span>번호인증</span></Button> 
					: <Button className='btn-type1 st1'><span>확인</span></Button> 
					}
				</div>
				:	<div className='btn-wrap'><Button className='btn-type1 st1'><span>아이디 확인</span></Button></div>
				}
			</Footer>
		</>
	)
}

export default _
