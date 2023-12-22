import Header from "./Components/Header";
import Entries from "./Components/Entries";
import AddEntry from "./Components/AddEntry";
import { EntriesProvider } from "./Context/EntriesContext";
export default function App() {

return(


  <EntriesProvider>
<Header/>
  <AddEntry/>
<Entries/>
</EntriesProvider>



  )
}