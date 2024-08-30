import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header/Header";
import { jest } from "@jest/globals";

jest.mock("next/link", () => {
  return ({ children }: { children: React.ReactNode }) => children;
});

describe("Header Component", () => {
  test("renders the header and link correctly", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();

    const text = screen.getByText("Instagram Local App");
    expect(text).toBeInTheDocument();
  });
});
