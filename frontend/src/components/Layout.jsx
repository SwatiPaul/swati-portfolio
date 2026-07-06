import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
