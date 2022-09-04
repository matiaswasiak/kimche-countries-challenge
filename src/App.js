import Home from "./components/pages/Home";
import { SearchCountriesProvider } from "./context/searchCountriesContext";

function App() {
  return (
    <SearchCountriesProvider>
      <Home />
    </SearchCountriesProvider>
  );
}

export default App;
