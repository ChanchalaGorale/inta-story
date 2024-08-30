import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Avatar from "@/components/Avatar/Avatar";
import { User } from "@/types/user";

const mockUser: User = {
  id: 1,
  name: "Alice",
  avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  stories: [],
  seen: false,
};

describe("Avatar Component", () => {
  test("renders Avatar with correct image and name", () => {
    render(<Avatar user={mockUser} size={"size-20"} click={() => {}} />);

    const avatarImage = screen.getByRole("img") as HTMLImageElement;

    expect(avatarImage).toHaveAttribute("alt", mockUser.name);

    expect(avatarImage.src).toContain("randomuser.me");
  });
});
