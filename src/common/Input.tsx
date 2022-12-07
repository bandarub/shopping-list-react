/**
 * Generic Input component
 */
import { FC, ReactElement, ChangeEvent, FocusEvent } from 'react'

interface ChildProps {
	type?: string
	disabled?: Boolean
	value: string | number
	placeholder?: string
	handleChange: (value: string | number) => void
	handleBlur: (value: string | number) => void
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
	const inputClass = ['input-wrapper', disabled ? 'disabled' : '', hasError ? 'invalid' : '']
	return (
		<div className={inputClass.join(' ')}>
			<input
				value={value}
				placeholder={placeholder}
				type={type}
				onChange={onInputChange}
				onBlur={onInputBlur}
			></input>
			{hasError ? <span className="error">Enter valid Input</span> : null}
		</div>
	)
}

export default Input
