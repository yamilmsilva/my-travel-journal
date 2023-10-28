import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Footer from "./components/Footer"
import './App.css';
import data from "./Data"
//import { library } from "@fortawesome/fontawesome-svg-core";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.key} {...item} />;
  });

  return (
    <div className="hoy">
     <Navbar/>
     <section className="cards-list">{cards}</section>
     <Footer/>
    </div>
  );
}

export default App;
