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
	realpath: string
	memo: string
}

const PublishingMenuList: Array<MenuProps> = [
	{ category: '00.공통', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: 'Toast', depth1: '', depth2: '', depth3: '', path: '/test/toast', realpath: '', memo: '' },
	{ category: 'Alert', depth1: '', depth2: '', depth3: '', path: '/test/dialog', realpath: '', memo: '' },

	{ category: '01.메인', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '스플래시', depth1: '', depth2: '', depth3: '', path: '/publish/splash', realpath: '', memo: '' },
	{ category: '메인', depth1: '', depth2: '', depth3: '', path: '/publish/home', realpath: '', memo: '' },

	{ category: '02.회원가입', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '약관동의', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/rule/agree', realpath: '', memo: '' },
	{ category: '이용약관', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/rule', realpath: '', memo: '' },
	{ category: '휴대폰번호입력', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/certify', realpath: '', memo: '' },
	{ category: '아이디등록', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/id/register', realpath: '', memo: '' },
	{ category: '비밀번호 설정', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/password', realpath: '', memo: '' },
	{ category: '회원가입완료', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/join/complete', realpath: '', memo: '' },

	{ category: '03.로그인', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '로그인', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/login', realpath: '', memo: '' },
	{ category: '접근권한요청', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/request/access', realpath: '', memo: '' },
	{ category: '아이디/비밀번호찾기', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/pw/find', realpath: '', memo: '' },
	{ category: '아이디확인', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/id/check', realpath: '', memo: '' },
	{ category: '비밀번호변경', depth1: '', depth2: '', depth3: '', path: '/publish/agreement/pw/change', realpath: '', memo: '' },

	{ category: '04.속성 선택', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
	{ category: '서비스선택 ', depth1: '', depth2: '', depth3: '', path: '/publish/property/service/choice', realpath: '', memo: '' },
	{ category: '어린이집 검색', depth1: '', depth2: '', depth3: '', path: '/publish/property/center/search', realpath: '', memo: '' },
	{ category: '등록하기', depth1: '', depth2: '', depth3: '', path: '/publish/property/regist', realpath: '', memo: '' },
	{ category: '이름등록', depth1: '', depth2: '', depth3: '', path: '/publish/property/name/regist', realpath: '', memo: '' },
	{ category: '프로필설정', depth1: '', depth2: '', depth3: '', path: '/publish/property/profile/regist', realpath: '', memo: '' },
	{ category: '등록완료', depth1: '', depth2: '', depth3: '', path: '/publish/property/complete', realpath: '', memo: '' },

  { category: '06. 공지사항', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
  { category: '목록 ', depth1: '', depth2: '', depth3: '', path: '/publish/notice/list', realpath: '', memo: '' },
  { category: '작성', depth1: '', depth2: '', depth3: '', path: '/publish/notice/write', realpath: '', memo: '' },
  { category: '', depth1: '의무공지작성', depth2: '', depth3: '', path: '/publish/notice/write2', realpath: '', memo: '' },
  { category: '미리보기', depth1: '', depth2: '', depth3: '', path: '/publish/notice/preview', realpath: '', memo: '' },
  { category: '상세', depth1: '', depth2: '', depth3: '', path: '/publish/notice/detail', realpath: '', memo: '' },	
	
  { category: '08. 앨범', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
  { category: '목록 ', depth1: '', depth2: '', depth3: '', path: '/publish/album/list', realpath: '', memo: '' },
  { category: '작성', depth1: '', depth2: '', depth3: '', path: '/publish/album/write', realpath: '', memo: '' },
  { category: '미리보기', depth1: '', depth2: '', depth3: '', path: '/publish/album/preview', realpath: '', memo: '' },
  { category: '상세', depth1: '', depth2: '', depth3: '', path: '/publish/album/detail', realpath: '', memo: '' },

  { category: '17. 클라우드 사진 업로드', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
  { category: '클라우드기본 ', depth1: '', depth2: '', depth3: '', path: '/publish/cloud/home', realpath: '', memo: '' },
  { category: '클라우드폴더기본', depth1: '', depth2: '', depth3: '', path: '/publish/cloud/folder', realpath: '', memo: '' },
  { category: 'hold', depth1: '', depth2: '', depth3: '', path: '/publish/cloud/hold', realpath: '', memo: '' },

  { category: '18. AI 위험감지', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
  { category: 'AI 위험 알림 목록 ', depth1: '', depth2: '', depth3: '', path: '/publish/danger/list', realpath: '', memo: '' },
  { category: 'AI 위험 알림 상세', depth1: '', depth2: '', depth3: '', path: '/publish/danger/detail', realpath: '', memo: '' },
  { category: 'AI 위험 알림 해결', depth1: '', depth2: '', depth3: '', path: '/publish/danger/solve', realpath: '', memo: '' },

  { category: '24. 개인정보 설정', title: true, depth1: '', depth2: '', depth3: '', path: '', realpath: '', memo: '' },
  { category: '기본정보 ', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/mypage', realpath: '', memo: '' },
  { category: '연락처관리', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/phone', realpath: '', memo: '' },
  { category: '비밀번호관리', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/pw', realpath: '', memo: '' },
  { category: '알림설정', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/alarm', realpath: '', memo: '' },
  { category: '앱정보', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/appinfo', realpath: '', memo: '' },
  { category: '오픈라이센스', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/license', realpath: '', memo: '' },
  { category: '회원탈퇴', depth1: '', depth2: '', depth3: '', path: '/publish/privacy/withdrawal', realpath: '', memo: '' },
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
						<TableHead>RealLink</TableHead>
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
								<TableDiv>
									<Link to={item.path} target='_blank' title='새창열림' >
										<Text>
											{item.realpath}
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
