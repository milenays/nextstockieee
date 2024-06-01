"use client";

import '../styles/globals.css';
import React from 'react';
import Button from '@/components/ui/Button';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
