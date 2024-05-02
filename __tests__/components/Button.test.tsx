import { render, screen, userEvent } from "@testing-library/react-native";
import CustomButton from "../../src/components/Button";

test("Button component", async () => {
  const onSubmit = jest.fn();

  const user = userEvent.setup();
  render(<CustomButton label="test" onPress={onSubmit} />);

  await user.press(screen.getByTestId("customButton"));
  expect(onSubmit).toHaveBeenCalled();
});
