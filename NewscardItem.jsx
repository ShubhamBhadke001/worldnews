import Loader from "./Loader";
import Newscard from "./Newscard";

const NewscardItem = ({ newsData, loading }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-items df wrap p1">
          {newsData && newsData.length > 0 ? (
            newsData.map((article) => (
              <Newscard key={article.url} articles={article} />
            ))
          ) : (
            <p>No news articles to display.</p>
          )}
        </div>
      )}
    </>
  );
};

export default NewscardItem;
