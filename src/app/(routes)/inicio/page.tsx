"use client";

import { useUserContext } from "@/context/auth/userContext";
import Link from "next/link";

export default function Home() {
  const { user } = useUserContext();
  return (
    <main>
      <h1>Hola, {user?.username}</h1>
      <Link href={"/chat"}>chat</Link>
    </main>
  );
}
