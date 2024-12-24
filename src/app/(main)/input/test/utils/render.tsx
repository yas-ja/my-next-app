import { render } from "@testing-library/react";
import Input from "../../page";
import mockRouter from "next-router-mock";

export const renderInputPage = () => {
  mockRouter.push("/input");
  render(<Input />);
};
