'use client';

import { ReactNode } from "react";
import { ThemeProvider } from "./theme-toggle/theme-provider";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

export default function Providers({
    session,
    children
  }: {
    session: SessionProviderProps['session'];
    children: ReactNode;
  }) {
    return (
      <>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SessionProvider session={session}>{children}</SessionProvider>
        </ThemeProvider>
      </>
    );
  }