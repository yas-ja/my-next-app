"use client";

import { isAuthenticatedSelector } from "@/redux/authSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Root = () => {
  const router = useRouter();
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  const path = isAuthenticated ? "/home" : "/auth/login";

  useEffect(() => {
    router.push(path);
  });
};

export default Root;
