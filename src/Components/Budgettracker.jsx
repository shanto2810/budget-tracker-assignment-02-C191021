import Header from "./Header";
import AddEntry from "./AddEntry";
import IncomeExpense from "./IncomeExpense";
export default function Budgettracker(){
    return(
        <div>
        <Header />
        <AddEntry />
        <IncomeExpense />
        </div>
    );
}