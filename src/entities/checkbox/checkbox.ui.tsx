import { Checkbox } from './checkbox.style'

const _ = ({ children, className, disabled, checked, onChange }: any) => {
	console.log(className)
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
			<em className='t'>{children}</em>
		</Checkbox>
	)
}

export default _
