import "./App.css";
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
function App() {
  return (
    <>
      <div className="container">
        <SearchBar />
        <Banner />
        <section className="section-card">
          <Card />
        </section>
      </div>
    </>
  );
}

export default App;
