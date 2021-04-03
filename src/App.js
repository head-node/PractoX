import "./App.css";
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import CovidCard from "./components/CovidCard";
function App() {
  return (
    <>
      <div className="container">
        <SearchBar />
        <Banner />
        <section className="section-card">
          <Card />
        </section>
        <section className="section-covid">
          <CovidCard />
        </section>
      </div>
    </>
  );
}

export default App;
