import { InputDetails } from "@/features/input/InputDetails";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Input = () => {
  return (
    <Tabs defaultValue="expenses" className="w-[400px]  mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="expenses">支出</TabsTrigger>
        <TabsTrigger value="income">収入</TabsTrigger>
      </TabsList>
      <TabsContent value="expenses" className="p-5">
        <InputDetails categoryType="expenses" />
      </TabsContent>
      <TabsContent value="income" className="p-5">
        <InputDetails categoryType="income" />
      </TabsContent>
    </Tabs>
  );
};

export default Input;
