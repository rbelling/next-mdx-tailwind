import '@/styles/globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body>{children}</body>
    </html>
  );
}
