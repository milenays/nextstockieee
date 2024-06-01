// src/components/ui/Button.tsx
"use client"

import React from 'react';

const Button: React.FC<{ onClick: () => void }> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
