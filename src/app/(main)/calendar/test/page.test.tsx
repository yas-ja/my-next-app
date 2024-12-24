import { describe, expect, test } from "vitest";
import { renderCalenderPage } from "./utils/render";
import { screen } from "@testing-library/react";
import { testIdByCalender } from "../page";

describe("カレンダー画面テスト", () => {
  describe("画面表示", () => {
    test("カレンダーが表示されている", () => {
      renderCalenderPage();

      const calender = screen.getByTestId(testIdByCalender);
      expect(calender).toBeInTheDocument();
    });
  });
  // describe("ロジック", () => {})
});
