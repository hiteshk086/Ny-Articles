import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  test("renders the navigation links", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Check if the navigation links are present
    const homeLink = screen.getByText(/home/i);
    const aboutLink = screen.getByText(/about/i);
    const contactLink = screen.getByText(/contact/i); // Example links

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test("renders the home page by default", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    // Check if the home page content is displayed
    const homeContent = screen.getByText(/welcome to the home page/i); // Adjust text based on actual content
    expect(homeContent).toBeInTheDocument();
  });

  test("navigates to the about page", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    );

    // Check if the about page content is displayed
    const aboutContent = screen.getByText(/about us/i); // Adjust text based on actual content
    expect(aboutContent).toBeInTheDocument();
  });

  test("displays a 404 page for unknown routes", () => {
    render(
      <MemoryRouter initialEntries={["/unknown"]}>
        <App />
      </MemoryRouter>
    );

    // Check if the 404 content is displayed
    const notFoundContent = screen.getByText(/page not found/i); // Adjust text based on actual 404 message
    expect(notFoundContent).toBeInTheDocument();
  });
});
