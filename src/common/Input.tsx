/**
 * Generic Input component
 */
import { FC, ReactElement, ChangeEvent, FocusEvent } from 'react'
import { InputValueType } from '../types'

interface ChildProps {
	type?: string
	disabled?: Boolean
	value: InputValueType
	placeholder?: string
	handleChange: (value: InputValueType) => void
	handleBlur: (value: InputValueType) => void
	error: boolean
}

const Input: FC<ChildProps> = ({
	type = 'text',
	disabled = false,
	value = '',
	placeholder,
	handleChange,
	handleBlur,
	error
}): ReactElement => {
	
	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleChange(e.target.value)
	}
	const onInputBlur = (e: FocusEvent<HTMLInputElement>) => {
		handleBlur(e.target.value)
	}

	const hasError = error && !value ;
	const inputClass = ['input-wrapper', disabled ? 'disabled' : '', hasError ? 'invalid' : '',type]
	return (
		<div className={inputClass.join(' ')}>
			<input
				value={value||''}
				placeholder={placeholder}
				type={type}
				onChange={onInputChange}
				onBlur={onInputBlur}
				min={type==='number'?1:Infinity}
			></input>
			{hasError ? <span className="error">Invalid value</span> : null}
		</div>
	)
}

export default Input
