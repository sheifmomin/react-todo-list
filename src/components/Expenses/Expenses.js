import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('all');
  const [expenses, setExpenses] = useState(props.expenses);

  const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
    if(selectedYear !== "all") {
      setExpenses(props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear));
    } else {
      setExpenses(props.expenses);
    }
    
	}

  return (
    <div>
       <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={expenses} />
        <ExpensesList items={expenses} />
      </Card>
    </div>
    
  );
}

export default Expenses;
