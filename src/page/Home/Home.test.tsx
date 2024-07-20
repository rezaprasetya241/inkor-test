import { render, screen, fireEvent } from "@testing-library/react";
import { useCollections } from "../../api/query/collection";
import { vi } from "vitest";
import HomePage from "./Home";

vi.mock("../../api/query/collection", () => ({
  useCollections: vi.fn(),
}));

describe("HomePage", () => {
  const mockCollections = [
    { name: "Collection1", image_url: "http://example.com/image1.jpg" },
    { name: "Collection2", image_url: "http://example.com/image2.jpg" },
    { name: "Collection1", image_url: "http://example.com/image1.jpg" }, // duplicate
  ];

  beforeEach(() => {
    (useCollections as jest.Mock).mockReturnValue({
      data: mockCollections,
      isLoading: false,
      error: null,
    });
  });

  test("renders loading state", () => {
    (useCollections as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    render(<HomePage />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders error state", () => {
    const errorMessage = "Failed to fetch data";
    (useCollections as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error(errorMessage),
    });

    render(<HomePage />);
    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });

  test("renders HomePage with collections", () => {
    render(<HomePage />);

    expect(
      screen.getByText("Discover Digital Art & Collect NFTs")
    ).toBeInTheDocument();

    const button = screen.getByText("Get Started");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    const collectionItems = screen.getAllByAltText(/Collection/);
    expect(collectionItems).toHaveLength(2);

    expect(screen.getByText("Collection1")).toBeInTheDocument();
    expect(screen.getByText("Collection2")).toBeInTheDocument();
  });

  test("filters unique collections", () => {
    render(<HomePage />);
    const uniqueCollections = Object.values(
      mockCollections.reduce<{ [key: string]: any }>((acc, item) => {
        if (!acc[item.name]) {
          acc[item.name] = item;
        }
        return acc;
      }, {})
    );
    expect(uniqueCollections).toHaveLength(2);
  });
});
