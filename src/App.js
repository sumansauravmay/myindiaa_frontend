import Allroutes from "./AllRoutes/Allroutes";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

// npx tailwindcss init configfull --full

function App() {
  return (
    <>
      <Navbar />
      <Allroutes />
      <Footer/>
     
    </>
  );
}

export default App;
