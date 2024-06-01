// src/components/ui/Input.tsx
import React from 'react';

const Input: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return <input type="text" placeholder={placeholder} />;
};

export default Input;
