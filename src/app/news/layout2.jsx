import Header from "@/components/Header";
import React from "react";

export default function NewsPageLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
