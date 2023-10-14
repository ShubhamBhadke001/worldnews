import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navigation from "./Components/Navigation";
import NewscardItem from "./Components/NewscardItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsDetails from "./Components/NewsDetails";

function App() {
  const [newsdata, setNewsdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleNewsSearch();
  }, []);

  const handleNewsSearch = async (topic) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/news?topic=${topic || "infosys"}`);
      setNewsdata(response.data.articles);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  console.log(newsdata);

  return (
    <>
      <BrowserRouter>
        <Navigation onSearch={handleNewsSearch} />
        <Routes>
          <Route
            path="/"
            element={<NewscardItem newsData={newsdata} loading={loading} />}
          />
          <Route
            path="/news/:id"
            element={<NewsDetails newsData={newsdata} loading={loading} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
