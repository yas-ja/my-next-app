import { describe, expect, test } from "vitest";
import { renderHistoryPage } from "./utils/render";
import { screen } from "@testing-library/react";

describe("履歴画面テスト", () => {
  describe("画面表示", () => {
    describe("表の見出し", () => {
      test("「日付」が表示されている", () => {
        renderHistoryPage();

        const tableHeaderDate = screen.getByRole("columnheader", {
          name: "日付",
        });
        expect(tableHeaderDate).toBeInTheDocument();
      });
      test("「収支種別」が表示されている", () => {
        renderHistoryPage();

        const tableHeaderDate = screen.getByRole("columnheader", {
          name: "収支種別",
        });
        expect(tableHeaderDate).toBeInTheDocument();
      });
      test("「項目」が表示されている", () => {
        renderHistoryPage();

        const tableHeaderDate = screen.getByRole("columnheader", {
          name: "項目",
        });
        expect(tableHeaderDate).toBeInTheDocument();
      });
      test("「金額」が表示されている", () => {
        renderHistoryPage();

        const tableHeaderDate = screen.getByRole("columnheader", {
          name: "金額",
        });
        expect(tableHeaderDate).toBeInTheDocument();
      });
      test("「メモ」が表示されている", () => {
        renderHistoryPage();

        const tableHeaderDate = screen.getByRole("columnheader", {
          name: "メモ",
        });
        expect(tableHeaderDate).toBeInTheDocument();
      });
    });
    // TODO:表項目の表示にはAPIのモックが必要なため、ロジックと一緒に実装
    // describe("表の項目",() => {})
  });
  //   describe("ロジック", () => {});
});
