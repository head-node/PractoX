import "./App.css";
import Banner from "./components/Banner"; 
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <>
      <div className="container"> 
        <SearchBar/>
        <Banner />
      </div>
    </>
  );
}

export default App;
