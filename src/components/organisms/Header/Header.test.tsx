import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderComponent from "./Header";

describe("HeaderComponent", () => {
  test("renders the HeaderComponent with logo and links", () => {
    render(<HeaderComponent />);

    const logoElement = screen.getByAltText("Logo");
    expect(logoElement).toBeInTheDocument();

    const marketplaceLink = screen.getByText("Marketplace");
    const rankingsLink = screen.getByText("Rankings");
    const connectWalletLink = screen.getByText("Connect a wallet");

    expect(marketplaceLink).toBeInTheDocument();
    expect(rankingsLink).toBeInTheDocument();
    expect(connectWalletLink).toBeInTheDocument();
  });

  test("renders the Sign Up button and icon", () => {
    render(<HeaderComponent />);

    const signUpButton = screen.getByText("Sign Up");
    expect(signUpButton).toBeInTheDocument();

    const userIcon = screen.getByTestId("ci-user-icon");
    expect(userIcon).toBeInTheDocument();
  });

  test("calls the onClick handler when Sign Up button is clicked", () => {
    render(<HeaderComponent />);

    const signUpButton = screen.getByText("Sign Up");
    fireEvent.click(signUpButton);
  });
});
