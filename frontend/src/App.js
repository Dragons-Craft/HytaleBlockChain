import "./App.css";


import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Listings from "./components/Listings/Listings";

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
