"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../public/src/app/store"; // Import your Redux store

export default function SessionProviderWrapper({ children, session }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}
