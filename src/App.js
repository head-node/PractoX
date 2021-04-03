import "./App.css";
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import CovidCard from "./components/CovidCard";
import Slider from "./components/Slider";
function App() {
  return (
    <>
      <div className="container-fluid">
        <SearchBar />
        <Banner />
        <section className="section-card">
          <Card />
        </section>
        <section className="section-covid">
          <CovidCard />
        </section>
        <hr/>
        <section className="slide-quotes">
          <Slider />
        </section>
      </div>
    </>
  );
}

export default App;
