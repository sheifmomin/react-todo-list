import './AddExpenses.css';

const onAddExpenses = props => {
	const onClickHandler = () => {
		props.showFormHandler();
	};
	
	return <button onClick={onClickHandler}>Add Expense</button>
}

export default onAddExpenses;