import { render } from "@testing-library/react";
import mockRouter from "next-router-mock";
import History from "../../page";

export const renderHistoryPage = () => {
  mockRouter.push("/history");
  render(<History />);
};
