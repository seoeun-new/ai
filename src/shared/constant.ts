export const VALUE = {
	sPc: '915px',
	sMo: '914px',
	sPc2: '476px',
	sMo2: '475px',
	bFont: 'Montserrat, Pretendard, Sans-serif',
	bColor: '#383838',
}

export const COLOR = {
  primary : '#4252E2',
  secondary: '#4e47d6',
  black: '#000',
  red: '#DC0000',
  white: '#fff',
}

export const MX = {
	font: (f: any) => {
		return f.map((ft: any) => `@font-face { font-family: '${ft.font.split('-')[0]}';font-weight: ${ft.weight}; src: url(${process.env.PUBLIC_URL}/fonts/${ft.font}.${ft.format}) format(${ft.format}); ${ft.unicode ? 'unicode-range:' + ft.unicode : ''}}`)
	},
  src:(src:any) => {
    return `url(${process.env.PUBLIC_URL + src})`;
  },	
	mq: (s?: any) => {
		for (let i = 160; i < 321; i++) {
			let num = String(16 - 0.02499999 * i)
			let dott = num.indexOf('.')
			s += `@media screen and (max-width: ${600 - i}px) {
			html {
				font-size: ${num.substring(0, dott + 6)}px;
			}
        }`
		}
		return s
	},
  media: (pc?:any, mo?:any) => {
    return (
      `@media all and (min-width: ${ VALUE.sPc }){
        ${ pc }
      }
      @media all and (max-width: ${ VALUE.sMo }){ 
        ${ mo }
       }`
    );
  },	
  media2: (pc2?:any, mo2?:any) => {
    return (
      `
      @media all and (min-width: ${ VALUE.sPc2 }){ 
        ${ pc2 ? pc2 : '' }
       }
      @media all and (max-width: ${ VALUE.sMo2 }){
        ${ mo2 ? mo2 : '' }
      }`
    );
  },	
	prefix: (s: any) => {
		return `&:-webkit-${s};${s};`
	},
	bg: (name: any, positon = '0 0', size = 'auto 100%') => {
		return `background: url('/images/" + ${name}) ${positon} no-repeat;background-size: ${size};`
	},
	ell: (num = 1) => {
		if (num > 1) {
			return `overflow: hidden; white-space: normal; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: ${num}; -webkit-box-orient: vertical; word-wrap: break-word; word-break: break-all;`
		} else {
			return `overflow: hidden; white-space: nowrap; text-overflow: ellipsis; word-break: break-all;`
		}
	},
	hide: () => {
		return `border: 0 !important; clip: rect(1px, 1px, 1px, 1px) !important; -webkit-clip-path: inset(50%) !important; clip-path: inset(50%) !important; height: 1px !important; overflow: hidden !important; padding: 0 !important; position: absolute !important; width: 1px !important; white-space: nowrap !important;`
	},
	placeholder: (c = '#A0A4BE') => {
    if (c) {
      return (
        `&::placeholder { color: ${ c }; }` 
      );
    } else {
      return (
        `::-webkit-input-placeholder{color:${ c };vertical-align:middle;font-size:1.4rem;}
        :-webkit-input-placeholder{color:${ c };vertical-align:middle;font-size:1.4rem;}`
      );
    }
	},
}
