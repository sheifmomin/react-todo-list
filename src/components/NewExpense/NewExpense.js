import { useState } from 'react'; 
import ExpenseForm from './ExpenseForm';
import AddExpense from './AddExpenses';
import './NewExpense.css';

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		props.onAddExpense(expenseData);
	}
	
	const startEditingHandler = () => {
		setIsEditing(!isEditing);
	}
	
	return (
		<div className="new-expense">
			{ !isEditing && <AddExpense showFormHandler={startEditingHandler} />}
			{ isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={startEditingHandler} /> }
		</div>
	) 
}

export default NewExpense;