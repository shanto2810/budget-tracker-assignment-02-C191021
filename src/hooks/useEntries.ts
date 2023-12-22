import { useContext } from "react";
import { EntriesContext } from "../Context/EntriesContext";

export function useEntries(){
    const value =useContext(EntriesContext)
    return value;
}