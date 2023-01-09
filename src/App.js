import { useState } from "react";
import { ImageList } from "./components/ImageList";
import { SearchBar } from "./components/SearchBar";
import searchImages from "./services/unsplashApi";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (term) => {
    const apiResult = await searchImages(term);

    setSearchResults(apiResult);
    console.log(searchResults);
  };
  return (
    <div className="App">
      <SearchBar onSubmitSearch={handleSubmit} />
      <ImageList images={searchResults} />
    </div>
  );
}

export default App;
