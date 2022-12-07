import { useSelector } from 'react-redux'
import { ItemsState } from './types'
import ShoppingItem from './components/ShoppingItem'
import logo from './images/logo.jpg'

function App() {
	const items = useSelector<ItemsState, ItemsState>(state => state)
	return (
		<div className="app-wrapper">
			<div className="header">
				<img className="header__logo" src={logo} alt="logo" />
				<label className="header__label">Shopping List</label>
			</div>
			<div className="column-headers">
				<h2>Item</h2>
				<h2>Quantity</h2>
			</div>

			<div className="list">
				{items.length === 0 ? (
					<span className='no-item'>No shopping items</span>
				) : (
					items.map(item => {
						return <ShoppingItem key={item.id} item={item} action="update" />
					})
				)}
			</div>

			<div className="add-container">
				<h2>Add new item</h2>
				<ShoppingItem action="add" />
			</div>
		</div>
	)
}

export default App
