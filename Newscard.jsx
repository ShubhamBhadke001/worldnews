import PropTypes from "prop-types";
import "../Styles/Newscard.css";
import { Link } from "react-router-dom";
const Newscard = ({ articles }) => {
  const { publishedAt, title, description, id, urlToImage } = articles;
  return (
    <>
      <div className="news-card m1">
        <div className="content ">
          <p className="news-date">{publishedAt.slice(0, 10)}</p>
          <p className="news-title">{title.slice(0, 50)}...</p>
          <p className="news-txt">{description.slice(0, 80)}...</p>
          {/* <Link to={`/news/${id}`} className="next-btn">
            Read More <i className="fa-solid fa-chevron-right"></i>
          </Link> */}
          <button className="next-btn">
            Read More <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <img src={urlToImage} alt={title.slice(0, 10)} />
      </div>
    </>
  );
};

Newscard.propTypes = {
  articles: PropTypes.object.isRequired,
};
export default Newscard;
