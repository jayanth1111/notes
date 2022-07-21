
import './App.css';
import {Navbar,Home,Education,Skills,Projects,Certificates,Contact,Footer} from "./components/Index"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Education/>
      <Skills/>
      <Projects/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
