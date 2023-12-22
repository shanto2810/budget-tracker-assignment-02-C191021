import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
export default function Header(){
    return(
      <div className="bg-gradient-to-r from-violet-400 to-violet-600">
      <Navbar />
      <HeroSection/>
    
    </div>
    )
}