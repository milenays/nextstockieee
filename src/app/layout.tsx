// src/app/layout.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Button from '@/components/ui/Button';

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <html lang="en">
      <body>
        <Component {...pageProps} />
      </body>
    </html>
  );
}
