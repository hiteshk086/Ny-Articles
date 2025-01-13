// src/__tests__/ArticleDetail.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ArticleDetail from "../components/ArticleDetail";
import "@testing-library/jest-dom";

const mockArticles = [
  {
    id: 1,
    title: "Test Article",
    abstract: "Test Abstract",
    byline: "By Test Author",
    published_date: "2024-01-13",
    content: "Test content",
  },
];

const renderWithRouter = (ui, { route = "/article/1" } = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/article/:id" element={ui} />
      </Routes>
    </MemoryRouter>
  );
};

describe("ArticleDetail Component", () => {
  it("renders article detail", () => {
    renderWithRouter(<ArticleDetail articles={mockArticles} />);

    expect(screen.getByText("Test Article")).toBeInTheDocument();
    expect(screen.getByText("Test Abstract")).toBeInTheDocument();
    expect(screen.getByText("By Test Author")).toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders not found message for invalid article", () => {
    renderWithRouter(<ArticleDetail articles={mockArticles} />, {
      route: "/article/999",
    });
    expect(screen.getByText("Article not found")).toBeInTheDocument();
  });
});
