import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    id: "1",
    date: "2024-01-01",
    categoryType: "収入",
    categoryName: "給料",
    amount: "+300,000",
    memo: "1月分給料",
  },
  {
    id: "2",
    date: "2024-01-01",
    categoryType: "支出",
    categoryName: "食費",
    amount: "-20,000",
    memo: "カレー用",
  },
];

const History = () => {
  return (
    <Table className="my-20">
      <TableHeader>
        <TableRow>
          <TableHead>日付</TableHead>
          <TableHead>収支種別</TableHead>
          <TableHead>項目</TableHead>
          <TableHead>金額</TableHead>
          <TableHead className="text-right">メモ</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data) => (
          <TableRow key={data.id}>
            <TableCell className="font-medium">{data.date}</TableCell>
            <TableCell className="font-medium">{data.categoryType}</TableCell>
            <TableCell>{data.categoryName}</TableCell>
            <TableCell>{data.amount}</TableCell>
            <TableCell className="text-right">{data.memo}</TableCell>
            <TableCell>
              <div className="flex justify-center gap-x-5 ">
                <Button className="bg-blue-500 text-white">編集</Button>
                <Button className="bg-red-500 text-white">削除</Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
};

export default History;
