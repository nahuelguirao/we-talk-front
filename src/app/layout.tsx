"use client";
import { ReactNode } from "react";
import { UserContextProvider } from "@/context/auth/userContext";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    //ROOT LAYOUT
    <html lang="es">
      <head>
        <title>We Talk</title>
        <meta name="description" content="¡Bienvenid@ a WeTalk!" />
      </head>
      <body>
        <UserContextProvider>
          <Toaster //Toaster Config.
            toastOptions={{
              style: {
                fontWeight: 500,
                textAlign: "center",
                position: "relative",
                zIndex: 100,
              },
            }}
          />
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
