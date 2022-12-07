import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../common/Button'
import Input from '../common/Input'
import {
	InputValueType,
	ItemType,
	actionTypes,
	ItemActionType,
	ItemsState
} from '../types'

interface ItemProps {
	item?: ItemType
	action?: ItemActionType
}

const ShoppingItem: FC<ItemProps> = ({ item, action = 'add' }) => {
	const isAdd = action === 'add'
	const items = useSelector<ItemsState, ItemType[]>(state => state)
	const [name, setName] = useState<InputValueType>(item ? item.name : '')
	const [quantity, setQuantity] = useState<InputValueType>(
		item ? item.quantity : 0
	)
	const [nameError, setNameError] = useState(false)
	const [quanError, setQuanError] = useState(false)
	const dispatch = useDispatch()

	const onAddItem = () => {
		if (!name && !quantity) return
		dispatch({
			type: actionTypes.addItem,
			payload: { name, quantity, id: items.length + 1 }
		});
		setName('')
		setQuantity(0)
	}

	const removeItem = () => {
		dispatch({ type: actionTypes.removeItem, payload: item })
	}

	const clearFields = () => {
		setQuantity('')
		setName('')
	}

	const onInputBlur = (value: InputValueType, name: string) => {
		const isError = !Boolean(value)
		name === 'quantity'
			? setQuanError(isError)
			: setNameError(isError)
	}

	const onInputChange = (value: InputValueType, name: string) => {
		const isQuantity = name === 'quantity';
		if (isQuantity && value < 0) return;
		if (isAdd) {
			isQuantity ? setQuantity(value) : setName(value)
		}
		dispatch({
			type: actionTypes.updateItem,
			payload: { ...item, [name]: value }
		})
	}

	return (
		<div className="container">
			<div className="inputs-wrapper">
				<Input
					value={item ? item.name : name}
					handleChange={val => onInputChange(val, 'name')}
					placeholder={isAdd ? 'Enter Item' : 'Update Item'}
					error={nameError}
					handleBlur={val => onInputBlur(val, 'name')}
				/>
				<Input
					value={item ? item.quantity : quantity}
					handleChange={val => onInputChange(val, 'quantity')}
					type="number"
					placeholder={isAdd ? 'Enter Quantity' : 'Update Quantity'}
					error={quanError}
					handleBlur={val => onInputBlur(val, 'quantity')}
				/>
			</div>

			<div className="buttons-wrapper">
				{isAdd ? (
					<>
						<Button
							handleClick={onAddItem}
							buttonText="Add"
							disabled={!name || !quantity || quantity < 0}
						></Button>
						<Button handleClick={clearFields} buttonText="Clear" />
					</>
				) : (
					<Button handleClick={removeItem} buttonText="Remove" />
				)}
			</div>
		</div>
	)
}

export default ShoppingItem
