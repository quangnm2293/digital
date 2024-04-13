"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { postAPI } from "../api/apis";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const data = await postAPI("auth/login", { email, password });

    router.push("/products");
  };
  return (
    <div className="flex flex-col  justify-center items-center h-screen">
      <h1 className="mb-10">Sign In</h1>
      <form di className="flex gap-10 flex-col">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-red-100 dark:bg-white rounded"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="bg-red-100 dark:bg-white rounded"
        />
        <button
          onClick={onSubmit}
          className="border border-red-100 dark:border-gray-100 rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
