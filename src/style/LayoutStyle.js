import styled from "@emotion/styled/macro";

import * as s from "./common";

export const Splish = styled.div`
  .visual{position:absolute;top:50%;left:0; height:38.7rem;width:100%; background:${s.mx.src('images/splash.svg')} no-repeat 50% 50%;background-size:auto 100%;transform:translateY(-50%);}
  .copyright{ color:#aaaaaa;font-size:1rem;position:absolute;bottom:1.5rem;width:100%;text-align:center;}
`;

export const Aside = styled.div`
  width:400px;background:#f3f3f3;
  .aside-content{position:fixed;top:0;width:100%;height:100%;max-width: 400px;display: flex;align-items: center;justify-content: center;background:#f3f3f3;}
  ${ 
    s.mx.media(
      ``,
      `display:none`
    )
   }
`;

export const Outerwrap = styled.div`
  width: 915px;display:flex;justify-content: space-between;margin:0 auto;
  .has-footer{padding-bottom:7.6rem;}
  .has-menubar{padding-bottom:6.4rem;}
  .has-reple{padding-bottom:5.6rem;}

  .wrap{display: flex;}

  ${s.mx.media(
    ``,
    `
      width:100%;justify-content:center;
      .aside-area{display:none;}
    `,
  )}  

  ${s.mx.media2(
    `
      &.open-gnb .wrap{overflow:hidden;}
      .wrap{min-height:100vh;box-shadow: 0 0 0 1px #ddd;flex-direction: column;}    
    `,
    `
    .wrap{width:100vw;}
    `,
  )}  
`;

export const Wrap = styled.div`
  position:relative;max-width: 475px;width:475px;min-height: 100vh;
  ${s.mx.media(
    ``, ``,
    `
    min-height:100vh;box-shadow: 0 0 0 1px #ddd;
    `,
  )}    
`;

export const Header = styled.header`
   position:fixed;width:100%;max-width:475px;top:0;height:5.6rem;background:#fff;display:flex;justify-content:center;align-items:center;z-index: 9;transition: top 0.5s ease;
  .left{position:absolute;top:0;left:0;height:100%;}
  .right{position:absolute;top:0;right:0;height:100%;display:flex;align-items:center;}
  .logo{position:absolute;top:50%;left:0;width:7.4rem;height:3.2rem;background:${s.mx.src('images/logo.svg')} no-repeat 0 0;margin-left :2rem;;transform:translateY(-50%);background-size:auto 100%;}

  .name{padding-left:1.6rem;font-size:1.6rem;font-weight:700;display:flex;align-items:center;
    .ico-home{width:1.6rem;height:1.6rem;margin-right:0.6rem; background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.51979 6.40126C2.20979 6.68126 2.02979 7.08126 2.02979 7.50126V12.6313C2.02979 13.4513 2.68978 14.1113 3.50978 14.1113H12.4898C13.3098 14.1113 13.9698 13.4513 13.9698 12.6313V7.44126C13.9698 7.02126 13.7898 6.62126 13.4698 6.34126L8.98978 2.37126C8.42978 1.87126 7.57979 1.88126 7.02979 2.37126L2.51979 6.40126Z' stroke='%23383838' stroke-width='1.5' stroke-miterlimit='10'/%3E%3Cpath d='M4.65979 11.1113H11.3398' stroke='%23383838' stroke-width='1.5' stroke-miterlimit='10'/%3E%3C/svg%3E%0A");}
  }

  .title{font-weight:500;font-size:1.6rem; color:#fff;max-width: calc(100% - 12rem);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;
    > *{vertical-align: baseline;}
  }
  [class*=btn-]{width:3.5rem;display:flex;justify-content:center;align-items:center;height:100%;
    &:last-child{margin-right:1.5rem;}
    &:only-child{width:5rem;margin-right:0;}
  }

  .menu{margin-left:auto;}
  
  .ico-back{width:1rem;height:1.6rem;background-image: url("data:image/svg+xml,%3Csvg width='11' height='20' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 2L1 10L9 18' stroke='%23111111' stroke-width='2' stroke-linecap='square' stroke-linejoin='round'/%3E%3C/svg%3E%0A");}
  .ico-menu{width:2.4rem;height:2.4rem;background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_57_10753)'%3E%3Cpath d='M1 3.64355H20.7491' stroke='%23111111' stroke-width='2' stroke-miterlimit='10' stroke-linecap='square'/%3E%3Cpath d='M1 11.6484H15.4918' stroke='%23111111' stroke-width='2' stroke-miterlimit='10' stroke-linecap='square'/%3E%3Cpath d='M1 20.3564H21' stroke='%23111111' stroke-width='2' stroke-miterlimit='10' stroke-linecap='square'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_57_10753'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");}

  &.header-main{justify-content: flex-start;height:5.3rem;}

  &.header-sub{
    background:#fff;border-bottom:1px solid #F7F7F7;
    .title{ color:#2A2A2A;}
    .ico-back{background-image: url("data:image/svg+xml,%3Csvg width='12' height='20' viewBox='0 0 12 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.31 1L1.95 9.36C1.6 9.71 1.6 10.28 1.95 10.63L10.31 19' stroke='%23383838' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round'/%3E%3C/svg%3E%0A");}
  }

  + div{padding:5.6rem 1.6rem 2.4rem;flex:1;overflow:hidden;}  
`;

export const Footer = styled.div`
  overflow:hidden;min-height:7.6rem;position:fixed;bottom:0;width:100%;background:#fff;z-index: 10;max-width: 475px;background:linear-gradient(180deg, rgba(254,255,254,0) 0%, rgba(255,255,255,1) 18%, rgba(254,255,254,1) 100%);
  .btn-wrap{padding:1rem 2rem;margin-top:0;display:flex;
    &.col{flex-direction:column;}
    [class*=btn-type]{flex:1;}
  } 
`;

export const Menubar = styled.div`

  height: 6.4rem; position: fixed; bottom: 0; width: 100%; background: #fff; z-index: 10; max-width: 475px; background: #fff; transition: bottom 0.5s ease;

  ul {
    display: flex; align-items: center; padding: 0 1.6rem; height: 100%; border-top: 1px solid #eee;
    li {
      flex: 1; padding: 0 0.8rem; display: flex; justify-content: center; align-items: center; height: 100%;
      a {
        display: flex; justify-content: center; align-items: center; width: 5.2rem; height: 5.2rem; flex-direction: column;
        .icon {
          position: relative;
          &.new:after { content: ''; display: block; position: absolute; top: -0.1rem; right: -0.1rem; width: 0.6rem; height: 0.6rem; background: #DC0000; border-radius: 100%; }
        }
        .txt { white-space: nowrap; font-size: 1rem; }
      }

      [class*=ico-] { width: 2.4rem; height: 2.4rem; }

      [class*=ico-gnb] {
        background: ${s.mx.src('images/ico-gnb.svg')} no-repeat 0 0 !important;
        background-size: auto 12rem !important;
      }

      .ico-gnb-home{background-position-y:0!important;}
      .ico-gnb-noti{background-position-y:-2.4rem !important;}
      .ico-gnb-alarm{background-position-y:-4.8rem !important;}
      .ico-gnb-album{background-position-y:-7.2rem !important;}
      .ico-gnb-attend{background-position-y:-9.6rem !important;}

      &.on {
        [class*=ico-] {
          background-position-x: 100% !important;
        }
        span {
          color: ${ s.c.primary };
        }
      }
    }
  }
`;

export const GnbWrap = styled.div`
  position: absolute; display: none; top: 0; height: 100%; right:-100%;background: #fff; z-index: 15;width:100%; max-width: 475px; overflow-y: auto;transition: all 0.5s ease;
  
  .logo{display:inline-block;width:11.8rem;height:2.6rem;background:${s.mx.src('images/logo.svg')} no-repeat 0 0;background-size:auto 100%;}

  .gnb-header{position:absolute;display:flex;align-items:center;width:100%;padding-left:1.6rem;background:#fff;}
  .gnb-header .right{margin-left:auto;}
  .gnb-header .btn-close{width:5.6rem; height:5.6rem;display:flex;justify-content:center;align-items:center;}
  
  ${ 
    s.mx.media2(
      ``,
      `position: fixed; `
    )
   }

  .gnb-content{height:calc(100% - 5.6rem);overflow-y:auto;padding:8rem 1.6rem 2.4rem;
    .alarm-wrap {display:flex;align-items:center;gap:0.8rem;
      li {flex:1;
        a {height:9.7rem;background:#F5F6FA;display:flex;justify-content:center;align-items:center;border-radius:1rem;flex-direction: column;
          .txt {display:flex;flex-direction:row;align-items:center;margin-top:0.8rem;font-size:1.4rem; color:#000;font-weight:700;}
          .txt em { color:#4252E2;}
          .ico-alarm-unidentified {width:3.2rem;height:3.2rem;background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_794_7055)'%3E%3Cg opacity='0.2'%3E%3Cpath d='M12.28 6.28H5.96997V27.74H12.28V6.28Z' fill='%234252E2'/%3E%3C/g%3E%3Cpath d='M6.85002 27.77C5.82002 27.77 4.97002 26.93 4.97002 25.89V23.18H3.40002V22.68H4.97002V19.39H3.40002V18.89H4.97002V15.21H3.40002V14.71H4.97002V11.42H3.40002V10.92H4.97002V8.21C4.97002 7.18 5.81002 6.33 6.85002 6.33H17.45L17.6 6.18C18.82 4.92 20.45 4.22 22.2 4.22C25.73 4.22 28.61 7.1 28.61 10.63C28.61 12.58 27.73 14.4 26.21 15.62L26.02 15.77V25.89C26.02 26.92 25.18 27.77 24.14 27.77H6.85002ZM5.47002 25.9C5.47002 26.66 6.09002 27.28 6.85002 27.28H24.14C24.9 27.28 25.52 26.66 25.52 25.9V16.17L24.81 16.49C23.98 16.87 23.1 17.05 22.19 17.05C18.66 17.05 15.78 14.17 15.78 10.64C15.78 9.57 16.05 8.51 16.56 7.58L16.96 6.84H6.85002C6.09002 6.84 5.47002 7.46 5.47002 8.22V10.93H7.04002V11.43H5.47002V14.72H7.04002V15.22H5.47002V18.9H7.04002V19.4H5.47002V22.69H7.04002V23.19H5.47002V25.9ZM22.19 4.73C18.93 4.73 16.28 7.38 16.28 10.64C16.28 13.9 18.93 16.55 22.19 16.55C25.45 16.55 28.1 13.9 28.1 10.64C28.1 7.38 25.45 4.73 22.19 4.73Z' fill='%234252E2'/%3E%3Cpath d='M22.19 3.73C20.25 3.73 18.49 4.54 17.23 5.84H6.85002C5.54002 5.84 4.47002 6.91 4.47002 8.22V10.43H2.90002V11.93H4.47002V14.22H2.90002V15.72H4.47002V18.4H2.90002V19.9H4.47002V22.19H2.90002V23.69H4.47002V25.9C4.47002 27.21 5.54002 28.28 6.85002 28.28H24.14C25.45 28.28 26.52 27.21 26.52 25.9V16.02C28.1 14.75 29.11 12.81 29.11 10.64C29.11 6.83 26.01 3.73 22.2 3.73H22.19ZM22.19 16.05C19.21 16.05 16.78 13.62 16.78 10.64C16.78 7.66 19.21 5.23 22.19 5.23C25.17 5.23 27.6 7.66 27.6 10.64C27.6 13.62 25.17 16.05 22.19 16.05ZM16.13 7.34C15.59 8.32 15.29 9.45 15.29 10.64C15.29 14.45 18.39 17.55 22.2 17.55C23.21 17.55 24.16 17.33 25.02 16.94V25.9C25.02 26.38 24.63 26.78 24.14 26.78H6.85002C6.37002 26.78 5.97002 26.39 5.97002 25.9V23.69H7.54002V22.19H5.97002V19.9H7.54002V18.4H5.97002V15.72H7.54002V14.22H5.97002V11.93H7.54002V10.43H5.97002V8.22C5.97002 7.74 6.36002 7.34 6.85002 7.34H16.13Z' fill='%234252E2'/%3E%3Cpath d='M21.9999 12.24V11.91C21.9999 11.39 22.3399 11.06 22.8899 10.59C23.3999 10.16 23.9799 9.67 23.9799 8.86C23.9799 8.05 23.4499 7.21 22.2899 7.21C21.3399 7.21 20.8199 7.78 20.6499 8.41H20.1799C20.4199 7.59 21.2499 7.05 22.2899 7.05C23.5299 7.05 24.4699 7.83 24.4699 8.86C24.4699 9.73 23.9699 10.16 23.4299 10.61C22.9799 10.99 22.4599 11.43 22.4599 12.13V12.24H21.9999Z' fill='%234252E2'/%3E%3Cpath d='M22.29 6.55C20.76 6.55 19.61 7.55 19.61 8.86V8.91H21.1V8.86C21.1 8.31 21.44 7.71 22.29 7.71C23.14 7.71 23.48 8.31 23.48 8.86C23.48 10.08 21.5 10.4 21.5 11.91V12.74H22.96V12.13C22.96 11.04 24.96 10.8 24.96 8.86C24.96 7.51 23.78 6.55 22.28 6.55H22.29Z' fill='%234252E2'/%3E%3Cpath d='M22.45 13.79H21.99V14.28H22.45V13.79Z' fill='%234252E2'/%3E%3Cpath d='M22.95 13.29H21.49V14.78H22.95V13.29Z' fill='%234252E2'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_794_7055'%3E%3Crect width='32' height='32' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");}
          .ico-alarm-danger {width:3.2rem;height:3.2rem;background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.67004 28.54C9.55004 28.54 9.42004 28.5 9.31004 28.44C9.05004 28.29 8.91004 27.99 8.97004 27.69C9.10004 26.95 9.27004 25.99 9.41004 25.11L9.50004 24.53H7.76004C4.95004 24.53 2.67004 22.23 2.67004 19.4V11.39C2.67004 8.55999 4.96004 6.25999 7.77004 6.25999H18.34L18.49 6.09999C19.7 4.80999 21.32 4.09999 23.07 4.09999C26.53 4.09999 29.35 6.91999 29.35 10.38C29.35 12.57 28.23 14.56 26.35 15.72L26.11 15.87V19.4C26.11 22.23 23.82 24.53 21.01 24.53H14.83L10.13 28.37C10 28.48 9.84004 28.53 9.68004 28.53L9.67004 28.54ZM7.76004 6.75999C5.23004 6.75999 3.16004 8.83999 3.16004 11.39V19.4C3.16004 21.95 5.22004 24.03 7.75004 24.03H9.23004C9.44004 24.03 9.64004 24.12 9.78004 24.28C9.92004 24.44 9.98004 24.65 9.94004 24.86C9.83004 25.56 9.70004 26.34 9.58004 27.03L9.35004 28.35L14.44 24.19C14.57 24.09 14.73 24.03 14.89 24.03H20.99C23.52 24.03 25.59 21.95 25.59 19.4V16.16L24.94 16.37C24.33 16.57 23.69 16.66 23.05 16.66C19.59 16.66 16.77 13.84 16.77 10.38C16.77 9.36999 17.01 8.38999 17.48 7.48998L17.86 6.75999H7.76004ZM23.06 4.60999C19.87 4.60999 17.28 7.19999 17.28 10.39C17.28 13.58 19.87 16.17 23.06 16.17C23.83 16.17 24.59 16.02 25.3 15.72C27.45 14.81 28.84 12.72 28.84 10.39C28.84 7.19999 26.25 4.60999 23.06 4.60999Z' fill='%234252E2'/%3E%3Cpath d='M23.06 3.60999C21.11 3.60999 19.35 4.43999 18.12 5.76999H7.76003C4.67003 5.76999 2.16003 8.29999 2.16003 11.4V19.41C2.16003 22.51 4.67003 25.04 7.75003 25.04H8.90003C8.76003 25.92 8.59003 26.87 8.46003 27.61C8.37003 28.12 8.60003 28.62 9.04003 28.88C9.23003 28.99 9.45003 29.05 9.66003 29.05C9.93003 29.05 10.2 28.96 10.43 28.77L15 25.04H21C24.09 25.04 26.6 22.51 26.6 19.41V16.16C28.54 14.97 29.83 12.83 29.83 10.39C29.83 6.64999 26.79 3.60999 23.05 3.60999H23.06ZM23.06 15.66C20.15 15.66 17.78 13.29 17.78 10.38C17.78 7.46999 20.15 5.09999 23.06 5.09999C25.97 5.09999 28.34 7.46999 28.34 10.38C28.34 12.56 27.01 14.44 25.11 15.24C24.48 15.51 23.79 15.66 23.07 15.66H23.06ZM17.05 7.25999C16.56 8.19999 16.28 9.25999 16.28 10.38C16.28 14.12 19.32 17.16 23.06 17.16C23.77 17.16 24.46 17.05 25.1 16.84V19.4C25.1 21.68 23.26 23.53 21 23.53H14.9C14.62 23.53 14.35 23.63 14.13 23.8L10.08 27.11C10.2 26.41 10.33 25.63 10.44 24.93C10.49 24.58 10.39 24.22 10.16 23.95C9.93003 23.68 9.59003 23.52 9.23003 23.52H7.75003C5.49003 23.52 3.66003 21.67 3.66003 19.39V11.38C3.66003 9.09999 5.50003 7.24999 7.76003 7.24999H17.04L17.05 7.25999Z' fill='%234252E2'/%3E%3Cpath d='M23.3101 7.23998H22.8101V10.66H23.3101V7.23998Z' fill='%234252E2'/%3E%3Cpath d='M23.8101 6.73998H22.3101V11.16H23.8101V6.73998Z' fill='%234252E2'/%3E%3Cpath d='M23.3101 12.83H22.8101V13.53H23.3101V12.83Z' fill='%234252E2'/%3E%3Cpath d='M23.8101 12.33H22.3101V14.03H23.8101V12.33Z' fill='%234252E2'/%3E%3Cpath d='M10.37 14.15H9.87V16.32H10.37V14.15Z' fill='%234252E2'/%3E%3Cpath d='M10.87 13.65H9.37V16.81H10.87V13.65Z' fill='%234252E2'/%3E%3Cpath d='M15.73 14.15H15.23V16.32H15.73V14.15Z' fill='%234252E2'/%3E%3Cpath d='M16.23 13.65H14.73V16.81H16.23V13.65Z' fill='%234252E2'/%3E%3Cg opacity='0.2'%3E%3Cpath d='M9.49994 27.92C7.94994 27.92 10.8999 24.03 9.49994 24.33C6.69994 24.93 3.18994 23.54 3.18994 21.6V9.97002C3.18994 8.03002 4.75994 6.46002 6.69994 6.46002H9.49994V27.92Z' fill='%234252E2'/%3E%3C/g%3E%3C/svg%3E%0A");}
        }
      }
    }
    .menu-list {border-top:0.1rem solid #eee;margin-top:2rem;padding-top:1.5rem;
      li{
      &.line-t{border-top:0.1rem solid #eee;padding-top:1.7rem;margin-top:1.7rem;}
      a {display:flex;align-items:center;height:4.8rem;justify-content: flex-start;
          [class*=ico-]{margin-right:1.2rem;width:2.4rem;height:2.4rem;}
          [class*=ico-menu]{width:2.4rem;height:2.4rem;}
          .txt {font-size:1.6rem; color:#000;}
        }
      }
    }
  }

  &.open{
    left:0;
  }
`;