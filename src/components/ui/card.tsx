"use client"

import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ className, ...props }) => {
  return <div className={`bg-white shadow rounded-md ${className}`} {...props} />;
};

export const CardHeader: React.FC<CardHeaderProps> = ({ className, ...props }) => {
  return <div className={`p-4 border-b border-gray-200 ${className}`} {...props} />;
};

export const CardTitle: React.FC<CardTitleProps> = ({ className, ...props }) => {
  return <div className={`text-lg font-medium ${className}`} {...props} />;
};

export const CardContent: React.FC<CardContentProps> = ({ className, ...props }) => {
  return <div className={`p-4 ${className}`} {...props} />;
};

export const CardFooter: React.FC<CardFooterProps> = ({ className, ...props }) => {
  return <div className={`p-4 border-t border-gray-200 ${className}`} {...props} />;
};
