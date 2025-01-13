import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ArticleList from "../components/ArticleList";
import "@testing-library/jest-dom";

const mockArticles = [
  {
    id: 1,
    title: "Test Article",
    abstract: "Test Abstract",
    byline: "By Test Author",
    published_date: "2024-01-13",
  },
];

// Create a wrapper component with Router
const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(<Router>{ui}</Router>);
};

describe("ArticleList Component", () => {
  it("renders articles list", () => {
    renderWithRouter(<ArticleList articles={mockArticles} />);

    expect(screen.getByText("Test Article")).toBeInTheDocument();
    expect(screen.getByText("Test Abstract")).toBeInTheDocument();
    expect(screen.getByText("By Test Author")).toBeInTheDocument();
  });

  it("renders no articles message when array is empty", () => {
    renderWithRouter(<ArticleList articles={[]} />);
    expect(screen.getByText("No articles found")).toBeInTheDocument();
  });
});
