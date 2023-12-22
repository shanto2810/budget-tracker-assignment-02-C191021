
import { useEntries } from "../hooks/useEntries";

export default function Income(){
    
    const {entries,handleDelete} = useEntries();
    const newIncome = entries.filter((item) => item.type === "income");

    return(
           <div>
        <h2 className="border-b pb-2 font-medium text-green-600">Income</h2>
 
        <ul id="income-list" className="divide-y">
        {newIncome.map((item) => (
          <li className="py-2.5"  key={item.id}>
            <div className="group flex justify-between gap-2 text-sm">
              <span>{item.description}</span>

              <div>
                <span className="text-green-600">{item.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
                <span
                  className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                  onClick={()=>
                    handleDelete(item.id)}
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