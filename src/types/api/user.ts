/**ユーザー情報 */
export type User = {
  /**
   * ユーザーID
   */
  id: number;

  /**
   * ユーザー名
   */
  name: string;

  /**
   * ユーザーのメールアドレス
   */
  email: string;

  /**
   * ユーザーのパスワード
   */
  password: string;

  /**
   * ユーザーの作成日時
   */
  createdAt: Date;

  /**
   * ユーザーの更新日時
   */
  updatedAt: Date;
};
