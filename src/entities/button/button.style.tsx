import styled from 'styled-components'
import { Link } from "react-router-dom";
import { COLOR } from 'shared'

const ButtonStyle = `
  display:inline-flex;text-align:center;align-items:center;justify-content:center;white-space:nowrap;
  &:disabled,
  &.disabled {
    background:#eee !important;border-color: #eee !important;color: #999999 !important;
  }
  &.st1{border:0.1rem solid ${ COLOR.primary };color:#fff;background:${ COLOR.primary };}
  &.st2{border:0.1rem solid ${ COLOR.primary };;color:${ COLOR.primary };;background:#fff;}
  &.st3{border:0.1rem solid #C64040;color:#fff;background:#C64040;}
  &.st4{border:0.1rem solid #ECEEF5;color:#383838;background:#ECEEF5;}


  .ico-plus {margin-right:0.4rem; width:2.4rem;height:2.4rem;}
  &.st1 .ico-plus {background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 6V18' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M18 12L6 12' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");}
  &.st2 .ico-plus {background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 5V19' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='round'/%3E%3Cpath d='M5 12H19' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='round'/%3E%3C/svg%3E%0A");}


  &.btn-type1{height:5rem;line-height:4.8rem;padding:0 1rem;text-align:center;font-size:1.6rem;border-radius:0.8rem;font-weight:500 ;}
  &.btn-type2{height:4.8rem;line-height:4.6rem;padding:0 1rem;text-align:center;font-size:1.6rem;border-radius:0.8rem;font-weight:500 ;
    span{display:block;line-height:2.5rem;height:2.4rem;}
  }

  &.btn-next{color:${ COLOR.primary };height:4rem; font-size:1.6rem;font-weight:700;padding-right:2.8rem;background:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 7L15 12L10 17' stroke='%234252E2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat 100% 50%;background-size:auto 2.4rem;}

  &[class*=btn-type] i:first-of-type{margin-right:0.6rem;}
  &[class*=btn-type] i:last-child{margin-left:0.6rem;}  

  &.btn-more {margin-top:1.5rem;height:4rem;width:100%; line-height:3.8rem;padding:0 1rem;text-align:center;font-size:1.4rem;border-radius:0.5rem;font-weight:500 ;background:#EBEDF3; color:#999;}

  &.btn-select {display:flex;justify-content: flex-start; align-items:center;height:4.8rem;border-radius:1rem;font-size:1.6rem;padding:0 1.4rem;width:100%;background:#F5F6FA url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.00098 6L10.001 13L17.001 6' stroke='%23878AA1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat right 1.4rem top 50%;background-size:auto 2rem;
    em { color:${COLOR.primary}}
  }

  &.btn-selc { color:#D4D6E3;display:inline-flex;align-items:center;height:2.7rem;}
  &.btn-selc:disabled{color:#D4D6E3 !important;}
  &.btn-selc.on {  color:${COLOR.primary};}
  &.btn-selc.on:before{content:'';display:block;width:1.6rem;height:1.6rem;margin-right:0.8rem; background:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.99961 14.8996C4.19961 14.8996 1.09961 11.7996 1.09961 7.99961C1.09961 4.19961 4.19961 1.09961 7.99961 1.09961C11.7996 1.09961 14.8996 4.18961 14.8996 7.99961C14.8996 11.8096 11.8096 14.8996 7.99961 14.8996ZM7.99961 2.59961C5.01961 2.59961 2.59961 5.01961 2.59961 7.99961C2.59961 10.9796 5.01961 13.3996 7.99961 13.3996C10.9796 13.3996 13.3996 10.9796 13.3996 7.99961C13.3996 5.01961 10.9796 2.59961 7.99961 2.59961Z' fill='%234252E2'/%3E%3Cpath d='M5.2793 6.92992L7.6193 9.87992L10.8393 5.66992' stroke='%234252E2' stroke-width='1.5' stroke-miterlimit='10'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;}	

  &.btn-dot-menu {width:4rem;height:4rem;background:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='6' r='2' fill='%23666666'/%3E%3Ccircle cx='12' cy='12' r='2' fill='%23666666'/%3E%3Ccircle cx='12' cy='18' r='2' fill='%23666666'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 2.4rem;}
  &.btn-dot-menu2 {width:4rem;height:4rem;background:url("data:image/svg+xml,%3Csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='12.9481' r='2' transform='rotate(-90 6 12.9481)' fill='%23666666'/%3E%3Ccircle cx='12' cy='12.9481' r='2' transform='rotate(-90 12 12.9481)' fill='%23666666'/%3E%3Ccircle cx='18' cy='12.9481' r='2' transform='rotate(-90 18 12.9481)' fill='%23666666'/%3E%3C/svg%3E%0A") no-repeat 50% 50%;background-size:auto 2.4rem;}

  @supports (-webkit-touch-callout: none) {}
`

export const ButtonDefault = styled.button`
	${ButtonStyle};
`

export const ButtonLink = styled(Link)`
	${ButtonStyle}
`
