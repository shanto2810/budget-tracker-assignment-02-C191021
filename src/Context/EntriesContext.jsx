import { createContext, useEffect } from "react";
import uuid from "react-uuid";
import { useState } from "react";



export const EntriesContext = createContext();

export function EntriesProvider({children}){

    const [entries , setEntries] = useState(function(){
     
      const value =localStorage.getItem("entries");
      if(!value) return[];
          return JSON.parse(value);
    });
    
      const  totalIncome=entries.filter((item) => item.type === "income").reduce((prev,item)=>prev+item.amount,0)
      const  totalExpense=entries.filter((item) => item.type === "expense").reduce((prev,item)=>prev+item.amount,0)   
      const Budget=(totalIncome-totalExpense).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    
      const handleDelete = (id) => {
        setEntries(entries.filter((item) => item.id !== id));
      };
    
useEffect(()=>{
localStorage.setItem("entries",JSON.stringify(entries));
}, [entries] );


      return (
    <EntriesContext.Provider value={{entries,setEntries,totalIncome,totalExpense,handleDelete,Budget}}>
       
       {children}
       
        </EntriesContext.Provider >
);
}