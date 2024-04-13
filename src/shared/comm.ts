
// import styled from 'styled-components'
import { COLOR } from '@/shared'

export const BtnWrap = `
	.btn-wrap{
		display:flex;align-items:center;justify-content:center;margin-top:3.5rem;flex-wrap: wrap;
		[class*=btn-type] ~ [class*=btn-type]{margin-left:0.8rem;}
		> [class*=btn-type]{flex:1;}
		> [class*=btn-type]:only-child{width:100%;}
		&.column{flex-direction: column;
			> [class*=btn-type]{width:100%;}
			> * ~ *{margin-top:1.6rem;margin-left:0 !important;}    
		}
		&.btn-step-wrap{margin-top:1.7rem !important;}
		
		.full{width:100%;}
		.right{margin-left:auto;display:flex;align-items:center;}
	}
`
export const TxtGuide = `
.txt-guide{ color:#111111;font-size:1.8rem;
	letter-spacing:-0.03em;
	+ *{margin-top:2.4rem;}
	~ .txt-guide{margin-top:4.8rem;}
	b{vertical-align:baseline;}
}
`

export const FormWrap = `
.form-wrap{
  > * ~ *{margin-top:1.6rem;}
  .input-wrap{display:flex;align-items:center;flex-wrap:wrap;
    .input{flex:1;overflow:hidden;}
    .btn-certify{display:flex;justify-content:center;align-items:center; height:4.8rem; line-height:4.5rem; border-radius:1rem;border:1px solid ${COLOR.primary};width:8.4rem; color:${COLOR.primary};font-size:1.6rem;font-weight:500;margin-left:0.8rem;
      &:disabled{border-color: #D4D6E3; color:#D4D6E3;}
    }	
  }
  .txt-inp-error{width:100%; color:${ COLOR.red };font-size:1.2rem;margin-top:0.8rem;}
}
`

export const DateText = `
	.date-text{
		display:flex;align-items:flex-end;
		.year {font-size:1.4rem;margin-right:0.3rem;}
		.date {font-weight:700;font-size:1.8rem;}
		.day {margin-left:0.8rem;font-size:1.6rem;}
	}
`;

export const Thumb = `
	position:relative;
	img {position:absolute;top:50%;left:50%; object-fit: contain;max-width: 100%;max-height: 100%;transform:translate(-50%, -50%);}
	.btn-del{position:absolute;top:0.5rem;right:0.5rem;width:2rem;height:2rem;border-radius:100%; box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.3); background:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z' fill='%23505050' stroke='white'/%3E%3Cpath d='M13 7L7 13' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M13 13L7 7' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;z-index: 1;}
`;

export const FileList = `
.file-list{
	ul {margin-top: 0.8rem;
		li { display: flex; align-items: center; min-height: 3rem; padding:0.5rem 0; border: 1px solid #D9D9D9; border-radius: 1rem; color: #767676; font-size: 1.4rem;
			~ li { margin-top: 0.8rem; }
			.ico-clip{margin-left: 1.6rem; 
				+ .filename {margin-left:0.5rem}
			}
			.filename { display: flex; align-items: center; margin: 0 1.6rem; word-break:break-all;}
			.byte {white-space:nowrap;}
			.right { margin-left: auto; display: flex; align-items: center;
				.btn-del { width: 4rem; height: 3rem; background: url("data:image/svg+xml,%3Csvg width='9' height='10' viewBox='0 0 9 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.58114 1L0.581177 8.94467' stroke='%23505050'/%3E%3Cpath d='M8.58118 9.00122L0.581217 1.00122' stroke='%23505050'/%3E%3C/svg%3E%0A") no-repeat 50% 50%; background-size: auto 0.8rem; }
			}
		}
	}
	.total-byte { font-size: 1.4rem; margin-top: 0.7rem; text-align: right; }
	}
`;


export const SelectBox = `
	.select-box{
		background: #fff; border: 0.1rem solid #EEEEEE; padding: 2rem 1.6rem; border-radius: 1rem;
		.tit { display: block; font-size: 1.8rem; font-weight: 700; }
		ul { margin-top: 2rem;

			li { 
				display:flex;align-items:center;
				~ li { margin-top: 2.5rem; }
				.inp-radio .t { font-size: 1.6rem; padding-left: 1.5rem; }
				.btn-time{margin-left:auto;margin-right:-0.5rem; letter-spacing:-0.02em; font-size:1.4rem;color:${COLOR.primary};padding-right:2.5rem;background:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 7L15 12L10 17' stroke='%234252E2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 100% 50%;background-size:auto 2.4rem; 
					> * ~ *{padding-left:0.5rem;}
					.ampm{font-size:1.2rem;
						+ .time{padding-left:0.2rem;}
					}
					
				}
			}
		}
	}
`;

export const DashboardBox = `
	.dashboard-box{
		margin-top: 1rem;
		ul { display: flex; align-items: center; background: ${ COLOR.primary }; border-radius: 1rem; box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.2); color: #fff; padding: 1.3rem 0;
			li { flex: 1; position: relative; display: flex; justify-content: center; align-items: center; flex-direction: column; justify-content: space-between;
				~ li:before { content: ''; display: block; position: absolute; top: 50%; left: 0; height: 3rem; width: 0.1rem; background: rgba(255, 255, 255, 0.2); transform: translateY(-50%); }
				em { font-weight: 700; font-size: 1.2rem; 
					[class*=ico-dashboard]{ width: 1.6rem; height: 1.6rem; margin-right: 0.4rem;vertical-align: middle;}
				}
				b { font-weight: 700; font-size: 2rem; }
				span {
					font-weight: 500;
					font-size: 1.4rem;
					color: rgba(255, 255, 255, 0.4);
				}
			}
		}

		&.st2{
			ul{padding:1.5rem 0;
				li ~ li:before{top:initial;bottom:0.5rem;transform:translateY(0);height:2.8rem;}
				li b{margin-top:1rem;line-height:1;margin-bottom:1rem;}
			}
		}
	}
`;


export const DataTable = `
	.data-type1{border-radius:1rem;border:1px solid #ECEEF5;padding:0 1.5rem;background:#fff;}
	.data-type1 table {width:100%;}
	.data-type1 table th,
	.data-type1 table td{height:5.5rem;text-align:center;vertical-align: middle;}
	.data-type1 table th {font-size:1.6rem; color:#999999;}
	.data-type1 table td {border-top:1px solid #ECEEF5;font-size:1.6rem;font-weight:500; color:#383838;}
	.data-type1 table td .c-red { color:#DC0000;}
`;

export const ListBox = `
	.list-box{
		border: 1px solid #E9EAED; border-radius: 1rem; background: #fff;
		ul {
			font-size: 1.6rem;

			li { display: flex; align-items: center; height: 5.6rem; padding: 0 1.6rem;
				~ li { border-top: 1px solid #EEEEEE; }
				.right { margin-left: auto;}
				.teacher{font-size:1.4rem;
					b{font-size:1.6rem;margin-right:0.3rem; font-weight: 500; vertical-align:baseline;}
				}
			}
		}
	}
`;


export const BannerProfile = `
	.banner-profile-wrap .banner-profile ~ .banner-profile{margin-top:0.8rem;}
	.banner-profile{
		&.align-c > *{justify-content: center;}
	> *{background:#f5f6fa;border-radius:1rem;padding:0 2.7rem;height:5.6rem; font-size:1.6rem; display:flex;align-items:center;width:100%;border:1px solid transparent;
		&.on,
		&:focus{border-color: ${ COLOR.primary };}
	}

		.cls-default {display:inline-block;width:2.4rem;height:2.4rem;margin-right:0.8rem; background:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.23 22C5.71536 22 1.22998 17.5146 1.22998 12C1.22998 6.48538 5.71536 2 11.23 2C16.7446 2 21.23 6.48538 21.23 12C21.23 17.5146 16.7446 22 11.23 22ZM11.23 3.62514C6.6146 3.62514 2.85512 7.38462 2.85512 12C2.85512 16.6154 6.6146 20.3749 11.23 20.3749C15.8454 20.3749 19.6049 16.6154 19.6049 12C19.6049 7.38462 15.8454 3.62514 11.23 3.62514Z' fill='%23383838'/%3E%3Cpath d='M11.425 17.8071C9.99484 17.8071 8.7164 17.3088 7.9905 16.8537C7.6113 16.6154 7.49213 16.117 7.73048 15.7378C7.96884 15.3586 8.46721 15.2394 8.84641 15.4778C8.97642 15.5645 11.7067 17.1788 13.9927 15.2503C14.3394 14.9686 14.8486 15.0011 15.1411 15.3478C15.4336 15.6945 15.3903 16.2037 15.0436 16.4962C13.8843 17.4713 12.6059 17.8071 11.4358 17.8071H11.425Z' fill='%23383838'/%3E%3Cpath d='M13.6244 10.7541H8.359C7.06972 10.7541 6.0188 9.70318 6.0188 8.4139V3.62517L7.64394 3.33264V8.40307C7.64394 8.7931 7.95813 9.11813 8.359 9.11813H13.6244C14.0145 9.11813 14.3395 8.7931 14.3395 8.40307V3.33264H15.9646V8.40307C15.9646 9.69235 14.9137 10.7433 13.6244 10.7433V10.7541Z' fill='%23383838'/%3E%3Cg opacity='0.2'%3E%3Cpath d='M8.57566 20.6673L2.57349 16.0411L2.69266 8.08878L8.57566 3.34338V20.6673Z' fill='%23383838'/%3E%3C/g%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;}
		.img {width:4rem;height:4rem;position:relative;margin-right:1rem;display:flex;justify-content:center;align-items:center;
			img {position:absolute;top:50%;left:50%; object-fit: contain;max-width: 100%;max-height: 100%;transform:translate(-50%, -50%);}
		}
		.name {font-weight:500;padding-left:1.6rem;margin-left:1.6rem;position:relative;
			&:before{content:'';display:block;position:absolute;top:50%;left:0; width:0.1rem;height:1.3rem;background:#D9D9D9;transform:translateY(-50%);}
		}

		&.st2 > *{background:#fff;}	
	}
`;

export const TeacherList = `
	.teacher-list{
		.tit { font-size: 1.6rem; margin-bottom: 1.8rem; display: flex;
			align-items: center;
			.ico-teacher { margin-right: 0.8rem; }
		}

		ul li { height: 5.6rem; display: flex; align-items: center; padding: 0 1.6rem; font-size: 1.6rem; background: #fff; border: 1px solid #EEEEEE;border-radius:1rem;
			~ li { margin-top: 0.8rem; }
			.name { margin-left: auto; 
				em { font-size: 1.4rem; margin-left: 0.1rem; vertical-align:baseline;}
			}
		}
	}
`;
export const NoticeBox = `
.notice-box{
  background: #fff; border: 0.1rem solid #EEEEEE; padding: 2rem 1.6rem; border-radius: 1rem;

  .tit {position: relative; display: block; font-size: 1.8rem; font-weight: 700; display: flex; align-items: center; margin-bottom: 1rem;
    &:before { content: ''; display: inline-block; margin-right: 0.4rem; width: 1.6rem; height: 1.6rem; background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_176_15707)'%3E%3Cpath d='M7.87986 2.48999C4.82986 2.48999 2.35986 4.95999 2.35986 8.00999C2.35986 11.06 4.82986 13.53 7.87986 13.53C10.9299 13.53 13.3999 11.06 13.3999 8.00999C13.3999 4.95999 10.9299 2.48999 7.87986 2.48999ZM7.87986 11.25C7.46986 11.25 7.12986 10.91 7.12986 10.5C7.12986 10.09 7.46986 9.74999 7.87986 9.74999C8.28986 9.74999 8.62986 10.09 8.62986 10.5C8.62986 10.91 8.28986 11.25 7.87986 11.25ZM8.62986 9.10999H7.12986V4.75999H8.62986V9.10999Z' fill='%23666666'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_176_15707'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
  }

  .text p { color: #666; font-size: 1.4rem;
    ~ p { margin-top: 1rem; }
  }
}
`;


export const ViewDetail = `
.view-detail { margin-bottom: 2.4rem; background: #fff; width: calc(100% + 3.2rem); margin-left: -1.6rem; padding: 2.4rem 1.6rem;
	* ~ .banner-profile{margin-top:1.6rem;}
	* ~ .view-desc{margin-top:2.4rem;}
	.view-desc { position: relative; border-bottom: 0.1rem solid #eee; padding-bottom: 1.6rem;
		.btn-dot-menu { position: absolute; top: -0.8rem; right: 0; }
		.tit { display: block; font-size: 1.8rem; font-weight: 700; min-height: 5.6rem; padding-right: 6.7rem; margin-bottom:1.6rem;}
		.info { display: flex; align-items: flex-start;
			.right { margin-left: auto; }

			.date { font-size: 1.2rem; color: #999; display: block;
				~ .date { margin-top: 0.5rem; }
			}

			.writer { font-size: 1.4rem; color: #767676; }
		}
	}

	.content-view { padding-top: 2.4rem; color: #505050;
		ul li { padding-left: 2rem; position: relative;
			&:before { content: ''; display: block; width: 0.3rem; height: 0.3rem; background: #505050; border-radius: 100%; position: absolute; top: 0.8rem; left: 1rem; }
		}

		img { max-width: 100%; }
	}
}
`;

export const LinkMenuList = `
	.link-menu-list{
		li ~ li{margin-top:0.8rem;}
		li button,
		li a {width:100%; height:5.6rem;padding:0 1.6rem;display:flex;align-items:center;border-radius:1rem;border:0.1rem solid #ECEEF5;font-size:1.6rem; background:#fff url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 4L17 12L9 20' stroke='%23BDC0D2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat right 1.6rem top 50%;background-size:auto 2.4rem;}
	}
`;
