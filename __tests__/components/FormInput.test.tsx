import { render, screen } from "@testing-library/react-native";
import Header from "../../src/components/Header";
import FormInput from "../../src/components/FormInput";

describe("Form input component", () => {
  it("should render error message if isError is true", () => {
    const onChange = jest.fn();
    const labelText = "label test";
    const errorText = "error test";

    render(
      <FormInput
        value="testValue"
        label={labelText}
        onChange={onChange}
        isError={true}
        errorMessage={errorText}
      />,
    );

    expect(screen.getByText(labelText)).toBeOnTheScreen();
    expect(screen.getByText(errorText)).toBeOnTheScreen();
  });

  it("should not render error message if isError is true", () => {
    const onChange = jest.fn();
    const labelText = "label test";
    const errorText = "error test";

    render(
      <FormInput
        value="testValue"
        label={labelText}
        onChange={onChange}
        isError={false}
        errorMessage={errorText}
      />,
    );

    expect(screen.getByText(labelText)).toBeOnTheScreen();
    expect(() => screen.getByText(errorText)).toThrow();
  });
});
