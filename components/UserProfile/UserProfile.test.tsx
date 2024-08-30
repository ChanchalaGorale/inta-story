import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserProfile from "@/components/UserProfile/UserProfile";
import { User } from "@/types/user";

jest.mock(
  "@/components/Avatar/Avatar",
  () =>
    ({ size, user, click }: { size: string; user: User; click: () => void }) =>
      (
        <div data-testid="avatar" onClick={click}>
          Avatar Component with size {size} and user {user.name}
        </div>
      )
);

describe("UserProfile Component", () => {
  const mockUser = {
    id: 1,
    name: "John Doe",
    seen: false,
    avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    stories: [],
  };
  const mockOnClose = jest.fn();

  test("renders without crashing and displays user information", () => {
    render(<UserProfile user={mockUser} onClose={mockOnClose} />);

    expect(screen.getByTestId("avatar")).toBeInTheDocument();
    expect(
      screen.getByText(
        `Avatar Component with size size-12 and user ${mockUser.name}`
      )
    ).toBeInTheDocument();

    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
  });

  test("calls onClose when close button is clicked", () => {
    render(<UserProfile user={mockUser} onClose={mockOnClose} />);

    fireEvent.click(screen.getByText("X"));

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("calls goToUserprofile when Avatar is clicked", () => {
    render(<UserProfile user={mockUser} onClose={mockOnClose} />);

    fireEvent.click(screen.getByTestId("avatar"));
  });
});
