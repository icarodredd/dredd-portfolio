import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "icon.ico",
  },
  title: "Dredd Portfolio",
  description: "Fullstack Developer Dredd - Portfolio",
};

export default function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}
