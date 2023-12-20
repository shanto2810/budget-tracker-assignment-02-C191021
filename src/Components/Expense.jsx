export default function Expense({Props}){

  const expenseData = Props.filter((item) => item.type === "expense")
    return(
        <div>
        <h2 className="border-b pb-2 font-medium text-red-600">Expense</h2>


        <ul id="expense-list" className="divide-y">
          {expenseData.map((item)=>(
          <li className="py-2.5" key={item.id} >
            <div className="group flex justify-between gap-2 text-sm">
              <span>{item.description}</span>
              <div>
                <span className="text-red-600">{item.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
                <span
                  className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
            
                >
                  Delete
                </span>
              </div>
            </div>
          </li>
          ))}
        </ul>
      </div>
    )
}
