// src/app/layout.tsx
"use client"

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Button from '@/components/ui/Button';

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <html lang="en">
      <body>
        <Button onClick={() => console.log('Button clicked')}>Click Me</Button>
        <Component {...pageProps} />
      </body>
    </html>
  );
}
