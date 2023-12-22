
import { useEntries } from "../hooks/useEntries";

export default function HeroSection(){

  const {Budget,totalIncome,totalExpense} =useEntries();
    return(

        <div className="mx-auto max-w-sm px-5 py-8 text-center text-white">
        <div>
          <h2>Available Budget</h2>
          <p className="mt-1 text-4xl font-medium">+ BDT <span id="total-budget">{Budget}</span></p>
        </div>

        <div
          className="mt-4 flex items-center justify-between bg-green-500 px-4 py-3 text-sm"
        >
          <p>Income</p>
          <p>+ BDT <span id="total-income">{totalIncome.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span></p>
        </div>

        <div
          className="mt-2 flex items-center justify-between bg-red-500 px-4 py-3 text-sm"
        >
          <p>Expenses</p>
          <p>- BDT <span id="total-expense">{totalExpense.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span></p>
        </div>
      </div>
    )
}