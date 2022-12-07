import React, { FC, ReactElement } from 'react'

interface ChildProps {
	buttonText?: string
	handleClick: () => void;
	disabled?: boolean
}

const Button: FC<ChildProps> = ({
	buttonText = 'Add',
	handleClick,
	disabled = false,
}): ReactElement => {
	const onButtonClick = () =>{
		if(disabled) return;
		handleClick();
	}
	return (
		<button
			onClick={onButtonClick}
			disabled={disabled}
			className='button'
		>
			{buttonText}
		</button>
	)
}

export default Button
