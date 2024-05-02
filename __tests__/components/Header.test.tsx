import { render, screen } from "@testing-library/react-native";
import Header from "../../src/components/Header";

test("Header component", async () => {
  render(<Header />);

  const bancoText = screen.getByText("BANCO");

  expect(bancoText).toBeOnTheScreen();
});
