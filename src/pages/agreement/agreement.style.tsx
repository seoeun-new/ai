import styled from 'styled-components'
import { MX, COLOR, TxtGuide, FormWrap } from 'shared/index'

export const Contents = styled.div`

	${TxtGuide}
	${FormWrap}

	.certify-wrap{padding-top:2.4rem;}

	.agree-checks-wrap{padding-top:2.4rem;
		.visual{height:20rem;background: ${MX.src('/images/bg-agree-checks.jpg')} no-repeat 50% 0;background-size:auto 100%;}
		.txt-welcome{font-size:2rem; color:#111;text-align:center;}
	}
	.agree-checks{margin-top:2.4rem;
		.visual{height:15.4rem;background:#FA00FF;}
		.check-all{ color:#111;
			.t{font-weight:700;font-size:1.6rem;}
		}
		.check-box{border-top:1px solid #eee;margin-top:1.6rem;padding:1.6rem 0;
			.check-tit{font-size:1.6rem; color:#111;display:block;margin-bottom:1rem;font-weight:700;}
			ul{
				li{position:relative;
					~ li{margin-top:1rem;}
					.btn-detail{position:absolute;top:50%;right:0;width:3rem;height:3rem;background:url("data:image/svg+xml,%3Csvg width='7' height='12' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L1 11' stroke='%23AAAAAA' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;transform:translateY(-50%);}
					.inp-check .t{font-size:1.4rem; color:#505050;margin-left:0.8rem;position:relative;top:0.2rem}
				}
			}
		}
	}

	.rule-wrap{padding-top:2.4rem;
		h1{font-size:1.8rem; color:#111;font-weight:700;}
		h2{margin-top:1.6rem;font-size:1.6rem; color:#111;font-weight:700;}
		.text{margin-top:1.6rem;font-size:1.4rem; color:#767676;}
	}

	.join-complete-wrap{padding-top:4.8rem;text-align:center;
		.visual{height:15.4rem;background:${MX.src('/images/bg-visual-join-complete.jpg')} no-repeat 50% 0;background-size:auto 100%;}
		.tit{font-weight:700; color:#111;font-size:2rem;display:block;margin-top:2rem;text-align:center;}
		.text{margin-top:1.6rem;font-size:1.4rem; color:#60637B;text-align:center;}
		[class*=btn-type]{margin-top:3.2rem;width:100%;}
	}

	.login-wrap{padding-top:2.4rem;
		.visual{height:26rem;background:${MX.src('/images/bg-visual-login.jpg')} no-repeat 50% 0;background-size:auto 100%;}
		.btn-wrap{margin-top:1.6rem;}
		.idpw-find{margin-top:2.4rem;text-align:center; color:#666;
			a{border-bottom:1px solid #666;margin-left:0.5rem;line-height:1.2;}
		}
		.text-join{padding-top:2.4rem;margin-top:2.4rem;border-top:0.1rem solid #eee;
			.txt{font-weight:700; color:#666;text-align:center; color:#383838;}
			.link{margin-top:1.6rem;text-align:center;
				a{border-bottom:1px solid ${ COLOR.primary }; color:${ COLOR.primary };line-height:1.2;}
			}
		}
		.input{
			padding-left:4.3rem;background-repeat:no-repeat;background-position:1.4rem 50%;background-size:auto 2rem;
			&.id{background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='6.5' r='3' stroke='%23767676'/%3E%3Cpath d='M3 16.6667C4.24309 13.9076 6.91027 12 10 12C13.0897 12 15.7569 13.9076 17 16.6667' stroke='%23767676' stroke-linecap='round'/%3E%3C/svg%3E%0A");}
			&.pw{background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 11V13' stroke='%23767676'/%3E%3Crect x='3.5' y='7.5' width='13' height='9' rx='0.5' stroke='%23767676'/%3E%3Cpath d='M13 8V6C13 4.34315 11.6569 3 10 3V3C8.34315 3 7 4.34315 7 6V8' stroke='%23767676'/%3E%3C/svg%3E%0A");}
			input{padding-left:0;}
		}
		
	}

	.idpw-find-wrap{padding-top:2.4rem;}

	.request-access-wrap{padding-top:2.4rem;
		.text {font-size:1.8rem;font-weight:700;margin-bottom:4rem; color:#111;}
		.access-box{
			~ .access-box {margin-top:2.4rem;padding-top:2.4rem;border-top:1px solid #eee;}

			.tit {font-weight:500;font-size:1.8rem; color:#111;display:block;}
			.txt {margin-top:0.8rem; color:#505050;letter-spacing: -0.03em; color:#60637B;}
			.list {margin-top:2.4rem;
				li{display:flex;flex-direction:row;align-items:center;
					~ li{margin-top:1.6rem;}
					.icon {display:flex;justify-content:center;align-items:center;width:4.3rem;height:4.3rem;background:#F5F6FA;border-radius:1rem;margin-right:1.2rem;}
					.desc {flex:1;overflow:hidden;
						b {font-weight:500; color:#111;font-size:1.6rem;}
						p { color:#999;}
					}
					.icon [class*=ico-access]{width:3.2rem;height:3.2rem;background-size:auto 100%;background-repeat:no-repeat;background-position:0 0;}
				}
			}
		}
	}

	.id-check-wrap{padding-top:2.4rem;
		.id-check{
			.member-id{display:flex;justify-content:center;align-items:center;height:7rem;background:#F5F6FA; color:#111;font-weight:700;font-size:2rem;}
			.txt{text-align:center; color:#505050;font-size:1.4rem;margin-top:1.8rem;}
		}
	}
}
`
export default Contents