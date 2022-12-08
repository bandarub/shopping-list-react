
// For reducer actions
export const actionTypes = {
	addItem: 'ADD_ITEM',
	updateItem : 'UPDATE_ITEM',
	removeItem: 'REMOVE_ITEM'
}
export type ItemsState = ItemType[];
export type Types = 'ADD_ITEM' | 'UPDATE_ITEM'| 'REMOVE_ITEM'
export type ActionType = {type: Types,payload:ItemType}

// Ggeneric types

export type InputValueType = string | number| null;
export type ItemType = {id:number, name: InputValueType, quantity: InputValueType}
export type ItemActionType = 'add' | 'update'