"use client";

import { useUserContext } from "@/context/auth/userContext";
import Link from "next/link";

export default function Chat() {
  const { user } = useUserContext();
  return (
    <main>
      <h1>Chat</h1>
      <Link href={"/inicio"}>Home</Link>
      <p>{user?.username}</p>
    </main>
  );
}
