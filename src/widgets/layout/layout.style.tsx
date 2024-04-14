import styled from 'styled-components'
import { MX, FloatingMenu } from '@/shared'

export const Outerwrap = styled.div`
width: 915px;display:flex;justify-content: space-between;margin:0 auto;
  .has-footer{padding-bottom:7.6rem;
    &.full-btn{padding-bottom:5.6rem;}
  }
  .has-menubar{padding-bottom:6.4rem;}
  .has-reple{padding-bottom:5.6rem;}

  .wrap{display: flex;}

  ${MX.media(
    ``,
    `
      width:100%;justify-content:center;
      .aside-area{display:none;}
    `,
  )}  

  ${MX.media2(
    `
      &.open-gnb .wrap{overflow:hidden;}
      .wrap{min-height:100vh;box-shadow: 0 0 0 1px #ddd;flex-direction: column;}    
    `,
    `
    .wrap{width:100vw;}
    `,
  )}  
`

export const Wrap = styled.div`
  ${FloatingMenu}
	position:relative;max-width: 475px;width:475px;min-height: 100vh;
  ${MX.media(
    ``,
    `
			min-height:100vh;box-shadow: 0 0 0 1px #ddd;
    `,
  )}  
`
