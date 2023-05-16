import Footer from "@newsletter/components/layout/components/Footer";
import Header from "@newsletter/components/layout/components/Header";
import MainContent from "@newsletter/components/layout/MainContent";
import { Theme as ThemeInterface } from "@newsletter/utils/interfaces";
import { ReactNode } from "react";

interface MainLayoutProps {
  children?: ReactNode;
  theme: ThemeInterface;
}

export default function MainLayout({ children, theme }: MainLayoutProps) {
  return (
    <>
      <Header theme={theme} />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
}
