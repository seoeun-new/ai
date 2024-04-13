import styled from 'styled-components'
import { MX } from '@/shared'

export const Aside = styled.div`
	width: 400px;
	background: #f3f3f3;
	.aside-content {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		max-width: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #f3f3f3;
	}
	${MX.media(``, `display:none`)}
`
