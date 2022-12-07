import { actionTypes, ActionType, ItemsState } from './types'
import { initialShoppingList } from './utils'

const initialState: ItemsState = initialShoppingList
export const itemsReducer = (
	state: ItemsState = initialState,
	action: ActionType
) => {
	switch (action.type) {
		case actionTypes.addItem:
			return [...state, action.payload];
		case actionTypes.updateItem:
			return state.map(item =>
				item.id === action.payload.id
					? {
							...item,
							name: action.payload.name,
							quantity: action.payload.quantity
					  }
					: item
			);
		case actionTypes.removeItem:
			const updatedList = state.filter(item => item.id !== action.payload.id);
			return updatedList.map((item, index) => ({ ...item, id: index+1 }));
		default:
			return state;
	}
}
