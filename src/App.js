import Allroutes from "./AllRoutes/Allroutes";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      {/*api- https://myindiaa-deployement.onrender.com */}
      <Navbar />
      <Allroutes />
      <Footer/>
    </>
  );
}

export default App;
