import React from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";

const ArticleDetail = ({ articles }) => {
  const { id } = useParams();
  const article = articles?.find((a) => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-500">Article not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        to="/"
        className="inline-block text-blue-600 hover:text-blue-700 hover:underline text-sm mb-6 transition-colors"
      >
        ← Back to Articles
      </Link>
      <article className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            {article.title}
          </h1>
          <div className="text-sm text-gray-500 space-y-1">
            <p className="font-medium">{article.byline}</p>
            <p>{article.published_date}</p>
          </div>
        </header>
        <section className="text-gray-700 leading-relaxed space-y-4">
          <p className="text-lg font-medium">{article.abstract}</p>
          <div className="prose max-w-none prose-blue">
            {article.content || "No additional content available."}
          </div>
        </section>
      </article>
    </div>
  );
};

ArticleDetail.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      abstract: PropTypes.string,
      byline: PropTypes.string,
      published_date: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
};

export default ArticleDetail;
