
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
	b{vertical-align:baseline;font-weight:700; }
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
		+ *{margin-top:1.6rem;}
		.year {font-size:1.4rem;margin-right:0.3rem;}
		.date {font-weight:700;font-size:1.8rem;}
		.day {margin-left:0.8rem;font-size:1.6rem;}
	}
`;

export const Thumb = `
	position:relative;overflow:hidden;
	img {position:absolute;top:50%;left:50%; object-fit: contain;max-width: 100%;max-height: 100%;transform:translate(-50%, -50%);}
	> .btn-del{position:absolute;top:0.5rem;right:0.5rem;width:2rem;height:2rem;border-radius:100%; box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.3); background:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z' fill='%23505050' stroke='white'/%3E%3Cpath d='M13 7L7 13' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M13 13L7 7' stroke='white' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;z-index: 1;}
`;

export const FileList = `
.file-list{
	ul {margin-top: 0.8rem;
		li { display: flex; align-items: center; min-height: 3rem; padding:0.5rem 0; border: 1px solid #D4D6E3; border-radius: 1rem; color: #767676; font-size: 1.4rem;
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
		.tit { display: block; font-size: 1.8rem; font-weight: 600; }
		ul { margin-top: 2rem;

			li { 
				display:flex;align-items:center;
				~ li { margin-top: 2.5rem; }
				.inp-radio .t { font-size: 1.6rem; padding-left: 1.5rem; }
				button.btn-time	{margin-right:-0.5rem; padding-right:2.5rem;background:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 7L15 12L10 17' stroke='%234252E2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 100% 50%;background-size:auto 2.4rem; }
				.btn-time{margin-left:auto;letter-spacing:-0.02em; font-size:1.4rem;color:${COLOR.primary};
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
					color: #fff;
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
	.data-type1 { border-radius: 1rem; border: 1px solid #ECEEF5; padding: 0 1.5rem; background: #fff;
		table {width: 100%;
			th, 
			td { height: 5.5rem; text-align: center; vertical-align: middle; }
			th { font-size: 1.6rem; color: #999999; }
			td { border-top: 1px solid #ECEEF5; font-size: 1.6rem; font-weight: 500; color: #383838;}
		}
	}
`;

export const DataTableList = `
	.data-table-list {
		.row { display: flex; align-items: center; border-radius: 1rem; overflow: hidden;
			.cell { height: 100%; display: flex; justify-content: center; align-items: center; }
			.auto { flex: 1; }
		}

		.list-header .row { height: 4.8rem; background: #ECEEF5;
			.cell { height: 100%; font-size: 1.6rem; font-weight: 500; }
		}

		.list-body { margin-top: 1.2rem;
			.row { height: 5.6rem; background: #fff; border: 0.1rem solid #ECEEF5;
				~ .row { margin-top: 0.8rem; }
				.cell { font-size: 1.4rem; }
			}
		}
	}

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

export const NoticeBox = `
.notice-box{
  background: #fff; border: 0.1rem solid #EEEEEE; padding: 2rem 1.6rem; border-radius: 1rem;

  .tit {position: relative; display: block; font-size: 1.8rem; font-weight: 600; display: flex; align-items: center; margin-bottom: 1rem;
    &:before { content: ''; display: inline-block; margin-right: 0.4rem; width: 1.6rem; height: 1.6rem; background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_176_15707)'%3E%3Cpath d='M7.87986 2.48999C4.82986 2.48999 2.35986 4.95999 2.35986 8.00999C2.35986 11.06 4.82986 13.53 7.87986 13.53C10.9299 13.53 13.3999 11.06 13.3999 8.00999C13.3999 4.95999 10.9299 2.48999 7.87986 2.48999ZM7.87986 11.25C7.46986 11.25 7.12986 10.91 7.12986 10.5C7.12986 10.09 7.46986 9.74999 7.87986 9.74999C8.28986 9.74999 8.62986 10.09 8.62986 10.5C8.62986 10.91 8.28986 11.25 7.87986 11.25ZM8.62986 9.10999H7.12986V4.75999H8.62986V9.10999Z' fill='%23666666'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_176_15707'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
  }

  .text p { color: #666; font-size: 1.4rem;word-break:keep-all;
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
	
	.file-list ul li{background:#F5F6FA;  color:#878AA1;border:none;}

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
		li a {width:100%; height:5.6rem;padding:0 1.6rem;font-weight:500; display:flex;align-items:center;border-radius:1rem;border:0.1rem solid #ECEEF5;font-size:1.6rem; background:#fff url("data:image/svg+xml,%3Csvg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 4L17 12L9 20' stroke='%23BDC0D2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat right 1.6rem top 50%;background-size:auto 2.4rem;}
	}
`;

export const FloatingMenu = `
	.has-quick-menu .floating-menu,
	.has-footer .floating-menu{bottom:9rem;}
	.floating-menu{position:fixed;bottom:8rem;display:flex;flex-direction: column;width:100%;max-width: 475px;height:0;z-index: 6;transition: bottom 0.5s ease;;
		[class*=btn-]{position:absolute;bottom:0;right:2rem;width:5.6rem;height:5.6rem;border-radius:100%;
			~ [class*=btn-]{margin-top:0.8rem;}
		}
		.btn-plus{box-shadow: 0px 0.6rem 1rem rgba(0, 0, 0, 0.2); background:${COLOR.primary} url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 6.6665V25.3332' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M25.334 15.9998L6.66732 15.9998' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 3.2rem;}
		}
`;

export const ChildInfoList = `
	.child-info-list {
		.menu { margin-bottom: 0.8rem; }
		ul li {
			~ li { margin-top: 0.8rem; }
			.box { width: 100%; display: flex; align-items: center; border-radius: 1rem; background: #fff; border: 0.1rem solid #EEEEEE; height: 8rem; padding: 1.6rem;
				.inp-check { margin-right: 1.6rem; }
				.thumb {${Thumb};margin-right: 1.6rem; width: 4rem; height: 4rem; border-radius: 100%; overflow: hidden; }
				.desc { .info span { position: relative; font-weight: 500; font-size: 1.6rem; display: inline-block; position: relative;
						~ span { padding-left: 1.5rem; margin-left: 1.5rem;
							&:before { content: ''; display: block; position: absolute; top: 50%; left: 0; width: 0.1rem; height: 1.3rem; background: #D4D6E3; transform: translateY(-50%); }
						}
					}
					.teacher { margin-top: 0.4rem; color: #878AA1; font-size: 1.4rem; text-align: left; }
				}
				.time { margin-left: auto; font-size: 1.2rem; font-weight: 500; display: flex; align-items: center;
					&:before { content: ''; display: block; width: 1.6rem; height: 1.6rem; margin-right: 0.5rem; background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.9999 14.9998C4.14489 14.9998 1 11.8549 1 7.9999C1 4.14488 4.14489 1 7.9999 1C11.8549 1 14.9998 4.13474 14.9998 7.9999C14.9998 11.8651 11.8651 14.9998 7.9999 14.9998ZM7.9999 2.52172C4.97676 2.52172 2.52172 4.97676 2.52172 7.9999C2.52172 11.023 4.97676 13.4781 7.9999 13.4781C11.0231 13.4781 13.4781 11.023 13.4781 7.9999C13.4781 4.97676 11.0231 2.52172 7.9999 2.52172Z' fill='%23666666'/%3E%3Cpath d='M11.6017 9.25789H8.26405C7.58435 9.25789 7.03653 8.71008 7.03653 8.03037V4.31738H8.55825V7.73618H11.6118V9.25789H11.6017Z' fill='%23666666'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 100%; }
				}
			}
		}
	}

`;

export const SelectItemList = `
	.select-item-list-wrap .tit {
		font-size: 1.6rem; margin-bottom: 1.6rem;
		.label em { color: ${COLOR.primary}; vertical-align: baseline; }
	}
	.select-item-list {
		overflow: hidden; padding: 0 1.6rem; width: calc(100% + 3.2rem); margin-left: -1.6rem;
		.swiper-wrapper {
			.swiper-slide { position: relative; min-width: 9rem; width: 9rem;
				~ .swiper-slide { margin-left: 0.8rem; }
				.btn-del { position: absolute; top: 0; right: 0; width: 2.4rem; height: 2.4rem; background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.0009 9L9.00098 15' stroke='%23878AA1' stroke-linecap='round'/%3E%3Cpath d='M15 15.0009L9.00003 9.00098' stroke='%23878AA1' stroke-linecap='round'/%3E%3C/svg%3E%0A") no-repeat 0 0; background-size: auto 2.4rem; }
				.box { display: flex; justify-content: center; align-items: center; flex-direction: column; width: 100%; height: 10.4rem; border-radius: 1rem; border: 0.1rem solid #D4D6E3; background: #fff;
					.thumb { ${Thumb}; width: 4rem; height: 4rem; border-radius: 100%; overflow: hidden; overflow: hidden; }
					.cls { font-size: 1.2rem; color: #767676; margin-top: 0.5rem; }
					.name { font-size: 1.6rem; font-weight: 500; line-height: 1;
						b { font-weight: 500; line-height: 1; }
					}
					&.on { border-color: #4252E2; background: rgba(66, 82, 226, 0.1); }
				}
			}
			
		}
	}

`;

export const ToggleViewBox = `
	.toggle-view-box { padding: 1.6rem; background: #fff; border: 0.1rem solid #ECEEF5; border-radius: 1rem;
		.box-header { position: relative; width: 100%; text-align: left;
			b { font-weight: 500; font-size: 2rem; }
			&:after { content: ''; display: block; position: absolute; top: -0.8rem; right: -1rem; width: 4.4rem; height: 4.4rem; background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 9L12 16L19 9' stroke='%23505050' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 50% 50%; background-size: auto 2.4rem; }
		}
		&.on .box-header:after { transform: rotate(-180deg); }
		&.on .box-body{display:block;}

		.box-body {
			display:none;
			padding-top: 1.6rem;
			.total-text { font-size: 1.4rem; color: #878AA1; margin-bottom: 1.6rem; }
		}
	}
`;

export const gageBar = `
	.gage-wrap .gage-bar {
		display: flex;  align-items: center;
		&.today {
			.label { color: ${COLOR.primary}; }
			.gage .bar { background: ${COLOR.primary}; }
		}
		~ .gage-bar { margin-top: 0.8rem; }
		.label { display: inline-block; font-size: 1.4rem; font-weight: 500; color: #60637B; width: 6rem; }
		.gage { display: flex; align-items: center; border: 1px dashed #D4D6E3; background: #F4F6FA; height: 1rem; border-radius: 1rem; width: 17.6rem;
			.bar { display: block; height: 100%; border-radius: 1rem; background: #BDC0D2; }
		}
	}
`;

export const CheckStatusList = `
	.check-status-list {
		padding: 2.4rem 1.6rem; background: #fff; border: 0.1rem solid #ECEEF5; border-radius: 1rem;
		.row {
			~ .row { border-top: 0.1rem solid #ECEEF5; margin-top: 1.6rem; padding-top: 1.6rem; }
			.title { display: block; margin-bottom: 1.6rem;
				.tit { font-size: 1.8rem; }
				.txt { font-size: 1.4rem; color: #A0A4BE; margin-left: 1.6rem; }
			}

			.check-item { display: grid; grid-gap: 1.6rem 0; grid-template-columns: repeat(3, 1fr);
				&.item2 li:nth-child(even) { grid-column: 2 / span 2; }
			}
		}
	}

`;

export const AlbumList = `
	.album-list {
		display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 0.8rem;

		li .img {
			width: 100%; position: relative;
			&:after { display: block; content: ""; padding-bottom: 100%; }
			img { position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; border-radius: 0.8rem; transform:translate(-50%, -50%);}
		}
	}
`;
