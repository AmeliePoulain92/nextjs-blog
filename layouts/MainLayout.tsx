import Footer from "@newsletter/components/layout/components/Footer";
import Header from "@newsletter/components/layout/components/Header";
import MainContent from "@newsletter/components/layout/MainContent";
import { ReactNode } from "react";

interface MainLayoutProps {
  children?: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
}
