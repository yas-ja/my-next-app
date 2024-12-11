"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CategoryType = {
  value: string;
  displayName: string;
};

const expensesCategories: CategoryType[] = [
  { value: "fixed", displayName: "固定費" },
  { value: "food", displayName: "食費" },
  { value: "daily", displayName: "日用品" },
  { value: "transportation", displayName: "交通費" },
  { value: "clothes", displayName: "衣服" },
  { value: "entertainment", displayName: "交際費" },
  { value: "hobby", displayName: "趣味" },
  { value: "others", displayName: "その他" },
];

const incomeCategories: CategoryType[] = [
  { value: "salary", displayName: "給料" },
  { value: "additional", displayName: "副収入" },
  { value: "others", displayName: "その他" },
];

export const InputDetails = ({
  categoryType,
}: {
  categoryType: "expenses" | "income";
}) => {
  const categories =
    categoryType === "expenses" ? expensesCategories : incomeCategories;

  const onCancel = () => {
    // TODO: フォームの値をクリア
  };

  return (
    <form>
      <div className="my-5">
        <label htmlFor="date" className="font-bold">
          日付
        </label>
        <Input
          type="date"
          id="date"
          name="date"
          className="my-5 w-full flex-col"
        />
      </div>
      <div className="my-5">
        <label htmlFor="category" className="font-bold">
          カテゴリー
        </label>
        <Select name="category">
          <SelectTrigger id="category" className="my-5">
            <SelectValue placeholder="カテゴリを選んでください" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category, index) => (
              <SelectItem key={index} value={category.value}>
                {category.displayName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="my-5">
        <label htmlFor="amount" className="font-bold">
          金額
        </label>
        <Input type="number" id="amount" name="amount" className="my-5" />
      </div>
      <div className="my-5 flex flex-col">
        <label htmlFor="memo" className="font-bold">
          メモ
        </label>
        <textarea
          id="memo"
          name="memo"
          className="my-5 border border-black"
          cols={30}
          rows={5}
        />
      </div>
      <div className="flex justify-between">
        <div className="my-5">
          <Button type="submit">保存</Button>
        </div>
        <div className="my-5">
          <Button type="button" onClick={onCancel} variant="outline">
            クリア
          </Button>
        </div>
      </div>
    </form>
  );
};
