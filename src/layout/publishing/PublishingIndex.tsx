import { Link } from "react-router-dom";
import styled from 'styled-components'
// import Styles from './publish.style'

// const Title = Styles.Title
// const Table = Styles.Table
// const TableHead = Styles.TableHead
// const TableDiv = Styles.TableDiv
// const Text = Styles.Text

const Title = styled.h1`
	color: #000;
	font-size: 22px;
	font-weight: bold;
`

const Table = styled.table`
	width: 100%;
	font-size: 12px;
	border-collapse: collapse;
	border: 0px solid #666;
	margin-top: 10px;
`

const TableHead = styled.th`
	padding: 6px;
	border: 1px solid #fff;
	color: #fff;
	font-size: 110%;
	background-color: #1F5DBE;
`

const TableDiv = styled.td`
	height: 24px;
	padding: 4px;
	border: 1px solid #666;
`

const Text = styled.a`
	text-decoration: underline;
	color: #009;
`


interface MenuProps {
	category: string
	title?: boolean
	depth1: string
	depth2: string
	depth3: string
	path: string
	memo: string
}

const PublishingMenuList: Array<MenuProps> = [
	{ category: '00.공통', title: true, depth1: '', depth2: '', depth3: '', path: '', memo: '' },
	{ category: 'Toast', depth1: '', depth2: '', depth3: '', path: '/test/toast', memo: '' },
	{ category: 'Alert', depth1: '', depth2: '', depth3: '', path: '/test/dialog', memo: '' },

	{ category: '01.메인', title: true, depth1: '', depth2: '', depth3: '', path: '', memo: '' },
	{ category: '스플래시', depth1: '', depth2: '', depth3: '', path: '/publish/splash', memo: '' },
	{ category: '메인', depth1: '', depth2: '', depth3: '', path: '/publish/home', memo: '' },

	{ category: '02.회원가입', title: true, depth1: '', depth2: '', depth3: '', path: '', memo: '' },
	{ category: '약관동의', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/rule/agree', memo: '' },
	{ category: '이용약관', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/rule', memo: '' },
	{ category: '휴대폰번호입력', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/certify', memo: '' },
	{ category: '아이디등록', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/id/register', memo: '' },
	{ category: '비밀번호 설정', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/password', memo: '' },
	{ category: '회원가입완료', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/join/complete', memo: '' },

	{ category: '03.로그인', title: true, depth1: '', depth2: '', depth3: '', path: '', memo: '' },
	{ category: '로그인', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/login', memo: '' },
	{ category: '접근권한요청', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/request/access', memo: '' },
	{ category: '아이디/비밀번호찾기', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/pw/find', memo: '' },
	{ category: '아이디확인', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/id/check', memo: '' },
	{ category: '비밀번호변경', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/pw/change', memo: '' },

	{ category: '04.속성 선택', title: true, depth1: '', depth2: '', depth3: '', path: '', memo: '' },
	{ category: '서비스선택 ', depth1: '', depth2: '', depth3: '', path: '/publish/property/service/choice', memo: '' },
	{ category: '어린이집 검색', depth1: '', depth2: '', depth3: '', path: '/publish/property/center/search', memo: '' },
	{ category: '등록하기', depth1: '', depth2: '', depth3: '', path: '/publish/property/regist', memo: '' },
	{ category: '이름등록', depth1: '', depth2: '', depth3: '', path: '/publish/property/name/regist', memo: '' },
	{ category: '프로필설정', depth1: '', depth2: '', depth3: '', path: '/publish/property/profile/regist', memo: '' },
	{ category: '등록완료', depth1: '', depth2: '', depth3: '', path: '/publish/property/complete', memo: '' },

  { category: '06. 공지사항', title: true, depth1: '', depth2: '', depth3: '', path: '', memo: '' },
  { category: '목록 ', depth1: '', depth2: '', depth3: '', path: '/publish/notice/list', memo: '' },
  { category: '작성', depth1: '', depth2: '', depth3: '', path: '/publish/notice/write', memo: '' },
  { category: '', depth1: '의무공지작성', depth2: '', depth3: '', path: '/publish/notice/write2', memo: '' },
  { category: '미리보기', depth1: '', depth2: '', depth3: '', path: '/publish/notice/preview', memo: '' },
  { category: '상세', depth1: '', depth2: '', depth3: '', path: '/publish/notice/detail', memo: '' },	

  { category: '07. 알림장', title: true, depth1: '', depth2: '', depth3: '', path: '', memo: '' },
  { category: '목록 ', depth1: '', depth2: '', depth3: '', path: '/publish/report/list', memo: '' },
  { category: '작성', depth1: '', depth2: '', depth3: '', path: '/publish/report/write', memo: '' },
  { category: '미리보기', depth1: '', depth2: '', depth3: '', path: '/publish/report/preview', memo: '' },
  { category: '상세', depth1: '', depth2: '', depth3: '', path: '/publish/report/detail', memo: '' },	
	
  { category: '08. 앨범', title: true, depth1: '', depth2: '', depth3: '', path: '', memo: '' },
  { category: '목록 ', depth1: '', depth2: '', depth3: '', path: '/publish/album/list', memo: '' },
  { category: '작성', depth1: '', depth2: '', depth3: '', path: '/publish/album/write', memo: '' },
  { category: '미리보기', depth1: '', depth2: '', depth3: '', path: '/publish/album/preview', memo: '' },
  { category: '상세', depth1: '', depth2: '', depth3: '', path: '/publish/album/detail', memo: '' },

  { category: '17. 클라우드 사진 업로드', title: true, depth1: '', depth2: '', depth3: '', path: '', memo: '' },
  { category: '클라우드기본 ', depth1: '', depth2: '', depth3: '', path: '/publish/cloud/home', memo: '' },
  { category: '클라우드폴더기본', depth1: '', depth2: '', depth3: '', path: '/publish/cloud/folder', memo: '' },
  { category: 'hold', depth1: '', depth2: '', depth3: '', path: '/publish/cloud/hold', memo: '' },

  { category: '18. AI 위험감지', title: true, depth1: '', depth2: '', depth3: '', path: '', memo: '' },
  { category: 'AI 위험 알림 목록 ', depth1: '', depth2: '', depth3: '', path: '/publish/danger/list', memo: '' },
  { category: 'AI 위험 알림 상세', depth1: '', depth2: '', depth3: '', path: '/publish/danger/detail', memo: '' },
  { category: 'AI 위험 알림 해결', depth1: '', depth2: '', depth3: '', path: '/publish/danger/solve', memo: '' },

  { category: '24. 개인정보 설정', title: true, depth1: '', depth2: '', depth3: '', path: '', memo: '' },
  { category: '기본정보 ', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/mypage', memo: '' },
  { category: '연락처관리', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/phone', memo: '' },
  { category: '비밀번호관리', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/pw', memo: '' },
  { category: '알림설정', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/alarm', memo: '' },
  { category: '앱정보', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/appinfo', memo: '' },
  { category: '오픈라이센스', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/license', memo: '' },
  { category: '회원탈퇴', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/withdrawal', memo: '' },
]

const _ = () => {
	return (
		<>
			<Title>Publishing Work Sheet &nbsp;&nbsp;</Title>
			<Table>
				<colgroup>
					<col style={{ width: '140px' }} />
					<col style={{ width: '140px' }} />
					<col style={{ width: '160px' }} />
					<col style={{ width: '140px' }} />
					<col style={{ width: '300px' }} />
					<col style={{ width: 'auto' }} />
				</colgroup>
				<thead>
					<tr>
						<TableHead>Category</TableHead>
						<TableHead>1Depth</TableHead>
						<TableHead>2Depth</TableHead>
						<TableHead>3Depth</TableHead>
						<TableHead>FileName/Link</TableHead>
						<TableHead>Memo</TableHead>
					</tr>
				</thead>
				<tbody>
					{PublishingMenuList.map((item, index) => {
						return (
							<tr key={index} style={item.title ? { background: '#eee' } : {}}>
								<TableDiv>{item.category}</TableDiv>
								<TableDiv>{item.depth1}</TableDiv>
								<TableDiv>{item.depth2}</TableDiv>
								<TableDiv>{item.depth3}</TableDiv>
								<TableDiv>
									<Link to={item.path} target='_blank' title='새창열림' >
										<Text>
											{item.path}
										</Text>
									</Link>
								</TableDiv>
								<TableDiv>{item.memo}</TableDiv>
							</tr>
						)
					})}
				</tbody>
			</Table>
		</>
	)
}

export default _
