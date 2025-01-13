import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  if (!articles.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-500">No articles found</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        NY Times Most Popular Articles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.id}`}
            data-testid="article-item"
            className="flex flex-col justify-between h-full p-5 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg hover:border-gray-300 transition duration-300"
          >
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-3">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                {article.abstract}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="font-medium">{article.byline}</span>
                <span>{article.published_date}</span>
              </div>
            </div>
            <div className="mt-4 text-blue-500 font-medium text-sm self-end">
              Read More →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      abstract: PropTypes.string,
      byline: PropTypes.string,
      published_date: PropTypes.string,
    })
  ).isRequired,
};

export default ArticleList;
