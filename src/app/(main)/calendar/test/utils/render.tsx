import { render } from "@testing-library/react";
import mockRouter from "next-router-mock";
import Calender from "../../page";

export const renderCalenderPage = () => {
  mockRouter.push("/calender");
  render(<Calender />);
};
