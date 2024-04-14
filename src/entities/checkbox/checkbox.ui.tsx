import { Checkbox } from './checkbox.style'

const _ = ({ children, className, disabled, checked, onChange }: any) => {
	return (
		<Checkbox className={className === 'inp-range' ? 'inp-range' :`inp-check `+ className}>
			<input
				type='Checkbox'
				disabled={disabled}
				checked={checked}
				onChange={e => {
					onChange(e.target.checked)
				}}
			/>
			<i className='ic'></i>
			{children ? <em className='t'>{children}</em> : null}
		</Checkbox>
	)
}

export default _
