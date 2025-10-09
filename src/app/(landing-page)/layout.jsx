import Header from "@/components/Header";
import React from "react";

export default function LandingPageLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
