import "./App.css";


import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Listings from "./components/Listings/Listings";
import Contracts from "./components/Contracts/Contracts";

function App() {
  return (
    <div className="App">
      <Navbar />
        <About />
        <Listings />
        <Footer />
    </div>
  );
}

export default App;
