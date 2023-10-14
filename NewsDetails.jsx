import { useParams } from "react-router-dom";
import "../Styles/NewsDetails.css";
import Loader from "./Loader";

const NewsDetails = ({ newsData, loading }) => {
  const { id } = useParams();
  const article = newsData.find((newsData) => newsData.id === id);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="news-details-page df">
          <div className="news-details">
            {loading ? (
              <Loader />
            ) : article.id ? (
              <>
                <div className="news-header">
                  <span className="nd-heading">NEWS {id}</span>
                </div>
                <div className="news-img">
                  <img src={article.urlToImage} alt="" />
                </div>
                <div className="n-title-author-source">
                  <p className="nd-title">{article.title}</p>
                  <p className="nd-date">{article.publishedAt}</p>
                  <p className="nd-author">{article.author}</p>
                  <p className="nd-source">
                    {article.source && article.source.name}
                  </p>
                </div>
                <div className="n-content">
                  <p className="nd-txt">{article.description}</p>
                </div>
              </>
            ) : (
              <p>No news article with ID {id} found.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NewsDetails;
