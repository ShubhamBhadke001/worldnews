import { useState } from "react";
import "../Styles/Navigation.css";

const Navigation = ({ onSearch }) => {
  const [topic, setTopic] = useState("");
  // const [news, setNews] = useState("");

  // const fetchData = (event) => {
  //   if (event.key === "Enter") {
  //     axios
  //       .get("/api/news")
  //       .then((res) => {
  //         setNews(res.data.articles);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //     setTopic("");
  //   }
  // };
  const fetchData = (event) => {
    if (event.key === "Enter") {
      onSearch(topic);
      setTopic("");
    }
  };
  return (
    <>
      <div className="navbar dfc">
        <div className="logo-search df wrap">
          <div className="app-logo df">
            <p>
              <span className="logo-span">World</span>News
            </p>
          </div>
          <div className="search ">
            <input
              className="search-in  bround bnone"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter topic"
              onKeyDown={fetchData}
            />
          </div>
        </div>
        {/* <div className="filter-topic-navbar df  wrap">
          <a className="search-cats df" href="#">
            Education
          </a>
          <a className="search-cats df " href="#">
            Sports
          </a>
          <a className="search-cats df" href="#">
            Political
          </a>
          <a className="search-cats df" href="#">
            Worldwide
          </a>
          <a className="search-cats df" href="#">
            Entertaiment
          </a>
        </div> */}
      </div>
    </>
  );
};

export default Navigation;
