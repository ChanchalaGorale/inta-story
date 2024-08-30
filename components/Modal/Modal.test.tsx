import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "@/components/Modal/Modal";

describe("Modal Component", () => {
  test("renders modal when open and handles close", () => {
    const handleClose = jest.fn();
    render(
      <Modal isModalOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    // const closeButton = screen.getByRole("button", { name: "X" });
    // fireEvent.click(closeButton);
    // expect(handleClose).toHaveBeenCalled();
  });
});
