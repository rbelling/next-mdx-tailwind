import '@/styles/globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="flex justify-center">
        <main className="p-6 max-w-screen-2xl">{children}</main>
      </body>
    </html>
  );
}
