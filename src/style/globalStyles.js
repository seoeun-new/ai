// @mui
import { css } from '@emotion/react'
import { VALUE, MX, COLOR, BtnWrap } from '@/shared'

const FontsStyles = MX.font([
	{ font: 'Montserrat-Light', weight: 300, format: 'woff', unicode: 'U+0030-0039, U+0041-005A, U+0061-007A' },
	{ font: 'Montserrat-Regular', weight: 400, format: 'woff', unicode: 'U+0030-0039, U+0041-005A, U+0061-007A' },
	{ font: 'Montserrat-Medium', weight: 500, format: 'woff', unicode: 'U+0030-0039, U+0041-005A, U+0061-007A' },
	{ font: 'Montserrat-SemiBold', weight: 700, format: 'woff', unicode: 'U+0030-0039, U+0041-005A, U+0061-007A' },
	{ font: 'Montserrat-Bold', weight: 800, format: 'woff', unicode: 'U+0030-0039, U+0041-005A, U+0061-007A' },
	{ font: 'Pretendard-Light', weight: 300, format: 'woff' },
	{ font: 'Pretendard-Regular', weight: 400, format: 'woff' },
	{ font: 'Pretendard-Medium', weight: 500, format: 'woff' },
	{ font: 'Pretendard-SemiBold', weight: 600, format: 'woff' },
	{ font: 'Pretendard-Bold', weight: 700, format: 'woff' },
	{ font: 'Pretendard-Black', weight: 800, format: 'woff' },
])

const reset = `
  *{margin:0;padding:0;border:none;word-break:break-all;box-sizing:border-box;-webkit-box-sizing:border-box;-webkit-overflow-scrolling:touch;-webkit-hyphens:auto;hyphens:auto;vertical-align:baseline;font-size:inherit;line-height:inherit;color:inherit;font-family:inherit;font-weight:inherit;letter-spacing: inherit;}
  *:before, *:after{box-sizing:border-box;-webkit-box-sizing:border-box;}
  html{height:100%;font-size: 12px;}
  html, body{font-weight:400;min-width:280px;/*-webkit-tap-highlight-color:rgba(0, 0, 0, 0);*/-webkit-text-size-adjust:none;}
  body{display:flex;flex-direction:column;min-height:100%;font-family:${VALUE.bFont} !important;color:${VALUE.bColor};-webkit-text-size-adjust:none;word-break:keep-all;word-wrap:break-word;line-height:1.4;letter-spacing: -0.02rem;font-size:1.4rem;}
  body:after{content:'';display:block;height:calc(0px + env(safe-area-inset-bottom));}
  legend, caption, figcaption{display:none;}
  ul, ol{list-style-image:none;list-style-position:outside;list-style-type:none;border:0;}
  img, fieldset, frameset, frameborder, frame{border:0;}
  a, img, span, b, input, select, em, textarea, label, strong{vertical-align:middle;outline-style:none;color:inherit;font-family:inherit;}
  a{color:inherit;text-decoration:none;cursor:pointer;color:inherit;font-family:inherit;text-align:left;}
  a:hover{text-decoration:none;}
  b, strong{font-weight:700;}
  i, em{font-style:normal;}
  textarea{resize:none;}
  button{border:none;background:none;outline:none;cursor:pointer;}
  label, button{cursor:pointer;color:inherit;}
  br, hr{border:none;line-height:inherit;}
  .hidden{${MX.hide()}}
  ${MX.placeholder()}
  ${MX.mq()}
  ${MX.media('.pc-hide{display:none !important;}', '.mo-hide{display:none !important;}')}

`
const commonStyle = `
${BtnWrap}
  body.open-gnb{overflow:hidden;}
  .c-red{color:${COLOR.red} !important;}
  .c-primary{color:${COLOR.primary} !important;}
  .bg-white{background-color:#fff !important}

  .txt-caution {margin-top:2.7rem;color:#DC0000;font-size:1.4rem;
    &:before{content:'';display:inline-block;vertical-align: middle; margin-right:0.6rem;width:1.6rem;height:1.6rem;background:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0_109_13515' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='1' y='1' width='14' height='14'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.00004 1.33337C4.32004 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.32004 14.6667 8.00004 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 8.00004 1.33337ZM8.00004 8.66671C7.63337 8.66671 7.33337 8.36671 7.33337 8.00004V5.33337C7.33337 4.96671 7.63337 4.66671 8.00004 4.66671C8.36671 4.66671 8.66671 4.96671 8.66671 5.33337V8.00004C8.66671 8.36671 8.36671 8.66671 8.00004 8.66671ZM7.33337 10V11.3334H8.66671V10H7.33337Z' fill='black'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_109_13515)'%3E%3Crect width='16' height='16' fill='%23DC0000'/%3E%3C/g%3E%3C/svg%3E%0A") no-repeat 0 0;}
  }
  .iput-txt-error{margin-top:0.8rem; color:#DC0000;font-size:1.2rem;}
  .page-top-area{padding:2.4rem 1.6rem; background:#fff;width:calc(100% + 3.2rem);margin-left:-1.6rem;}
`

const GlobalStyles = css`
	${FontsStyles}
	${reset}
  ${commonStyle}
`

export default GlobalStyles
