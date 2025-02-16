import Link from "next/link";
import { LoginForm } from "./components/LoginForm";

const Login = () => {
  return (
    <>
      <div className="flex w-full min-h-screen flex-col items-center justify-center">
        <h1 className="font-bold text-xl m-4">ログイン</h1>
        <LoginForm />
        <Link
          href="/auth/register"
          className="block mt-4 text-blue-500 text-sm hover:text-blue-700 hover:underline "
        >
          新規登録はこちら
        </Link>
      </div>
    </>
  );
};

export default Login;
