import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />

      <main className="pt-16">{children}</main>

      <Footer />
    </>
  );
}
