import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";

export const LoginForm = () => {
  return (
    <form className="m-4 flex flex-col gap-4 w-[350px]">
      <label htmlFor="email">メールアドレス</label>
      <Input type="email" name="email" />
      <label htmlFor="password">パスワード</label>
      <Input type="password" name="password" />
      <Button type="submit" className="w-full bg-black hover:opacity-80 my-4">
        ログイン
      </Button>
    </form>
  );
};
