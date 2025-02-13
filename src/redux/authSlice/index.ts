import { createSelector, createSlice } from "@reduxjs/toolkit";
import * as types from "./type";
import { RootState } from "../store";

const initialState: types.AuthSliceState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null,
};

/**
 * ログイン処理の開始
 * @returns 以下を設定
 *  - loading: true
 *  - error: null
 */
const loginRequest: types.LoginRequest = (state) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

/**
 * ログイン処理の成功
 * @param user - ユーザー情報
 * @param token -  ログインの際発行されるトークン
 *
 * @returns 以下を設定
 * - isAuthenticated: true
 * - user: ユーザー情報
 * - token:  ログインの際発行されるトークン
 * - loading: false
 */
const loginSuccess: types.LoginSuccess = (state, { payload }) => {
  return {
    ...state,
    isAuthenticated: true,
    user: payload.user,
    token: payload.token,
    loading: false,
  };
};

/**
 * ログイン処理の失敗
 * @param error - ログイン関連のエラー
 *
 * @returns 以下を設定
 * - isAuthenticated: false
 * - loading: false
 * - error: payload
 */
const loginFailure: types.LoginFailure = (state, { payload }) => {
  return {
    ...state,
    isAuthenticated: false,
    loading: false,
    error: payload,
  };
};

/**
 * ログアウト
 * @returns 初期値（認証情報を持たない状態）にリセット
 */
const logout: types.Logout = () => {
  return {
    ...initialState,
  };
};

export const { actions, reducer } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout,
  },
});

const rootSelector = (state: RootState): types.AuthSliceState => state.auth;

export const isAuthenticatedSelector = createSelector(
  rootSelector,
  (state) => state.isAuthenticated
);

export const authUserSelector = createSelector(
  rootSelector,
  (state) => state.user
);

export const accessTokenSelector = createSelector(
  rootSelector,
  (state) => state.token
);

export const authLoadingSelector = createSelector(
  rootSelector,
  (state) => state.loading
);

export const authErrorSelector = createSelector(
  rootSelector,
  (state) => state.error
);
