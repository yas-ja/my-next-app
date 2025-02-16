import { User } from "@/types/api/user";
import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

/**認証関連情報を管理 */
export type AuthSliceState = {
  /**
   * ユーザーがログイン済みかどうか
   * ```
   * true : ログイン済み
   * false : 未ログイン
   * ```
   */
  isAuthenticated: boolean;

  /**
   * ユーザー情報
   */
  user: User | null;

  /**
   * ログインの際発行されるトークン
   */
  token: string | null;

  /**
   * ローディング管理のフラグ
   */
  loading: boolean;

  /**
   *  ログイン関連のエラー
   */
  error: string | null;
};

export type LoginRequest = CaseReducer<AuthSliceState>;
export type LoginSuccess = CaseReducer<
  AuthSliceState,
  PayloadAction<Pick<AuthSliceState, "user" | "token">>
>;
export type LoginFailure = CaseReducer<
  AuthSliceState,
  PayloadAction<AuthSliceState["error"]>
>;
export type Logout = CaseReducer<AuthSliceState>;
