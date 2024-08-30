import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ShowStory from "@/components/Story/Story";
import { Story } from "@/types/story";

const mockStory: Story = {
  id: 1,
  imageUrl: "https://example.com/image.jpg",
  title: "Test Story",
  seen: false,
};

describe("ShowStory Component", () => {
  const handleSwipe = jest.fn();

  test("renders story image and handles click", () => {
    render(<ShowStory story={mockStory} swipe={handleSwipe} />);

    const image = screen.getByRole("img") as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("example.com");
    expect(image).toHaveAttribute("alt", mockStory.title);
  });

  test("calls swipe function on image click", () => {
    render(<ShowStory story={mockStory} swipe={handleSwipe} />);

    const image = screen.getByRole("img");
    fireEvent.click(image);

    expect(handleSwipe).toHaveBeenCalled();
  });
});
