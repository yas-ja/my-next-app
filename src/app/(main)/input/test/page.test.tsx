import { describe, expect, test } from "vitest";
import { renderInputPage } from "./utils/render";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("入力画面テスト", () => {
  describe("画面表示", () => {
    describe("支出", () => {
      test("「支出」タブが表示されている", () => {
        renderInputPage();

        const tab = screen.getByRole("tab", {
          name: "支出",
        });
        expect(tab).toBeInTheDocument();
      });
      describe("入力項目", () => {
        test("日付が表示されている", () => {
          renderInputPage();

          // input=dateをgetByRoleで取得できないのでgetByLabelTextでテスト
          const date = screen.getByLabelText("日付");
          expect(date).toBeInTheDocument();
        });
        test("カテゴリーが表示されている", () => {
          renderInputPage();

          screen.debug();

          const category = screen.getByRole("combobox", {
            name: "カテゴリー",
          });
          expect(category).toBeInTheDocument();
        });
        test("金額が表示されている", () => {
          renderInputPage();

          const amount = screen.getByRole("spinbutton", {
            name: "金額",
          });
          expect(amount).toBeInTheDocument();
        });
        test("メモが表示されている", () => {
          renderInputPage();

          const memo = screen.getByRole("textbox", {
            name: "メモ",
          });
          expect(memo).toBeInTheDocument();
        });
        describe("ボタン", () => {
          test("保存ボタンが表示されている", () => {
            renderInputPage();

            screen.debug();

            const saveButton = screen.getByRole("button", {
              name: "保存",
            });
            expect(saveButton).toBeInTheDocument();
          });
          test("クリアボタンが表示されている", () => {
            renderInputPage();

            const clearButton = screen.getByRole("button", {
              name: "クリア",
            });
            expect(clearButton).toBeInTheDocument();
          });
        });
      });
    });
    describe("収入", () => {
      test("「収入」タブが表示されている", async () => {
        renderInputPage();

        const tab = screen.getByRole("tab", {
          name: "収入",
          selected: false,
        });
        userEvent.click(tab);
        const selectedTab = await screen.findByRole("tab", {
          name: "収入",
          selected: true,
        });
        expect(selectedTab).toBeInTheDocument();
      });
      describe("入力項目", () => {
        const initialize = async () => {
          renderInputPage();

          const tab = screen.getByRole("tab", {
            name: "収入",
          });
          userEvent.click(tab);

          await screen.findByRole("tab", {
            name: "収入",
            selected: true,
          });
        };
        test("日付が表示されている", async () => {
          await initialize();

          // input=dateをgetByRoleで取得できないのでgetByLabelTextでテスト
          const date = screen.getByLabelText("日付");
          expect(date).toBeInTheDocument();
        });
        test("カテゴリーが表示されている", async () => {
          await initialize();

          const category = screen.getByRole("combobox", {
            name: "カテゴリー",
          });
          expect(category).toBeInTheDocument();
        });
        test("金額が表示されている", async () => {
          await initialize();

          const amount = screen.getByRole("spinbutton", {
            name: "金額",
          });
          expect(amount).toBeInTheDocument();
        });
        test("メモが表示されている", async () => {
          await initialize();

          const memo = screen.getByRole("textbox", {
            name: "メモ",
          });
          expect(memo).toBeInTheDocument();
        });
        describe("ボタン", () => {
          test("保存ボタンが表示されている", async () => {
            await initialize();

            const saveButton = screen.getByRole("button", {
              name: "保存",
            });
            expect(saveButton).toBeInTheDocument();
          });
          test("クリアボタンが表示されている", async () => {
            await initialize();

            const clearButton = screen.getByRole("button", {
              name: "クリア",
            });
            expect(clearButton).toBeInTheDocument();
          });
        });
      });
    });
  });
  // describe("ロジック", () => {});
});
