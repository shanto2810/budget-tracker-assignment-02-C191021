import Income from "./Income";
import Expense from "./Expense";
export default function IncomeExpense() {



  const Data = [
    { id:1 ,description: 'Website Project', amount: 50000, type: 'income' },
    { id:2 ,description: 'Salary', amount: 26500, type: 'income' },
    { id:3 ,description: 'Mobile App Project', amount: 21000, type: 'income' },
    { id:4 ,description: 'Groceries 1', amount: -15000, type: 'expense' },
    { id:5 ,description: 'Electric Bill', amount: -2500, type: 'expense' },
    { id:6 ,description: 'House Rent', amount: -4600, type: 'expense' },
    { id:7 ,description: 'Phone Bill', amount: -1000, type: 'expense' },
    { id:8 ,description: '1 Week Travel', amount: -1280, type: 'expense' },
  ];


  return (

    <div className="mx-auto my-8 grid max-w-4xl grid-cols-1 gap-8 px-5 text-sm md:grid-cols-2" >

      <Income Props={Data} />

      <Expense Props={Data} />

    </div>


  )
}