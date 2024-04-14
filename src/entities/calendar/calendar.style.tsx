import styled from 'styled-components'
import { COLOR } from '@/shared'

export const CalendarSection: any = styled.div`
	padding: 2.4rem 0 1.5rem; background: #fff;
	.calendar-top { display: flex; align-items: center;
		.year-month { display: flex; align-items: center; height: 4rem;margin-left:-0.5rem;
			button{height:3rem;width:3rem;background-repeat:no-repeat;background-position:50% 50%;background-size:auto 1.5rem;}
			.prev{background-image: url("data:image/svg+xml,%3Csvg width='16' height='18' viewBox='0 0 16 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.77029 13.0921L5.86217 8.81623L9.77029 4.54037' stroke='%23666666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");}
			.next{background-image: url("data:image/svg+xml,%3Csvg width='17' height='18' viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.59766 13.0921L10.5058 8.81623L6.59766 4.54037' stroke='%23666666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");}
			.year { font-size: 1.4rem; font-weight: 500; margin-right: 1rem; }
			.month { display: flex; align-items: center; }
			b { font-weight: 700; font-size: 2.6rem; line-height: 1; }
			.unit { font-weight: 700; font-size: 1.8rem; line-height: 1; }
		}
		.right { margin-left: auto;
			.today { display: flex; justify-content: center; align-items: center; height: 4rem; color: #4252E2; font-weight: 700; padding:0 0.8rem;}
		}
	}

	.legend {margin-top:2rem; height: 4rem; background: #F5F6FA; border-radius: 1rem; padding: 0 1.6rem; display: flex; align-items: center; justify-content: space-between;
		i { display: inline-block; margin-right: 0.5rem; width: 0.9rem; height: 0.9rem; border-radius: 0.2rem; }

		.txt { font-size: 1.2rem; color: #999; }
		.required i { background: #F74D5A; }com
		.integrated i { background: #2F5ED7; }
		.regist i { background: #8CD560; }
		.homecoming i { background: #ECAB2C; }
		.dosage i { background: #3FAEEC; }
	}
	.info-wrap { margin-top: 1.2rem; display: flex; align-items: center; padding-bottom:1rem;
		.right { margin-left: auto; }
		.info { color: #666; font-size: 1.4rem; display: flex; align-items: center;
			[class*=ico-] { margin-right: 0.6rem; }
			.num { font-weight: 700; color: #383838; margin-left: 1.2rem; }
		}
	}

`

export const CalendarWrap: any = styled.div`
	font-size:1.6rem;font-weight:500;width: calc(100% + 2rem); margin: 0 -1rem;

	.react-calendar__navigation{
		> button:first-of-type,
		> button:last-child{display:none;}
		> button:nth-of-type(2),
		> button:nth-of-type(4){width:3rem;height:3rem;}
	}

	.react-calendar__month-view__weekdays{
		margin-top:1.2rem;
		abbr{text-decoration: none;display:flex;align-items:flex-start;justify-content:center;height:3rem}
		& > div:first-of-type,
		& > div:last-child{color:#DC0000}
	}
	.react-calendar__month-view__days{
		.react-calendar__tile{min-height:4.5rem;display:flex;align-items:center;justify-content:flex-start;;}
		> button{padding:0;display:flex;align-items:center;justify-content:center;flex-direction:column;}
		> button abbr{border-radius:100%;width:3.2rem;height:3.2rem;display:flex;align-items:center;justify-content:center;}
		> button:not([class*=--neighboringMonth]).today abbr{background:#00DDDD;color:#fff;}
		> button:not([class*=--neighboringMonth]).selected abbr{background:${COLOR.primary};color:#fff;line-height: 3;}
		> button:not([class*=--neighboringMonth]).attend abbr{border:0.1rem solid #D4D6E3;}
		> button:nth-of-type(7n),
		> button:nth-of-type(7n+1){color:#DC0000}

		[class*=--neighboringMonth]{color:#D9D9D9 !important;
			.mark{display:none;}
		}

		.mark{display:flex;align-items:center;gap:0.25rem;padding:0.1rem 0;margin-bottom:0.7rem;margin-top:0.2rem;
			.caution{border-radius:1.5px;width:4px;height:4px;background: #DC0000;}
						
			.dot{border-radius:1.5px;width:4px;height:4px;
				&.album { background: ${COLOR.primary}; }
				&.report { background: ${COLOR.primary}; }
				&.required { background: #F74D5A; }
				&.integrated { background: #2F5ED7; }
				&.regist { background: #8CD560; }
				&.homecoming { background: #ECAB2C; }
				&.dosage { background: #3FAEEC; }      
			}
		}
	}
`
