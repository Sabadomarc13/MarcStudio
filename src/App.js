import Purpose from "./components/Purpose";
import Blog from "./components/Blog";
import Hero from "./components/Hero";
import Industry from "./components/Industry";
import Navbar from "./components/Navbar";
import Research from "./components/Research";
import School from "./components/School";
import Seminar from "./components/Seminar";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Purpose/>
      <Industry/>
      <School/>
      <Blog/>
      <Research/>
      <Seminar/>
    </div>
  );
}

export default App;
