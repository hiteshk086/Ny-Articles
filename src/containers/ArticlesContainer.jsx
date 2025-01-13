// src/containers/ArticlesContainer.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchMostPopularArticles } from "../services/api";
import ArticleList from "../components/ArticleList";
import ArticleDetail from "../components/ArticleDetail";

const ArticlesContainer = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchMostPopularArticles();
        setArticles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Routes>
      <Route path="/" element={<ArticleList articles={articles} />} />
      <Route
        path="/article/:id"
        element={<ArticleDetail articles={articles} />}
      />
    </Routes>
  );
};

export default ArticlesContainer;
