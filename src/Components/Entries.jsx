import Expense from "./Expense";
import Income from "./income";
export default function Entries(){

 
  
  

    return(
      
      <div className="mx-auto my-8 grid max-w-4xl grid-cols-1 gap-8 px-5 text-sm md:grid-cols-2" >
            <Income/>

           <Expense/>

     </div>
     
    )
}