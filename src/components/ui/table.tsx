"use client"

import * as React from "react";

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {}
interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}
interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {}
interface TableHeaderProps extends React.HTMLAttributes<HTMLTableCellElement> {}

export const Table: React.FC<TableProps> = ({ className, ...props }) => {
  return <table className={`min-w-full divide-y divide-gray-200 ${className}`} {...props} />;
};

export const TableRow: React.FC<TableRowProps> = ({ className, ...props }) => {
  return <tr className={`bg-white ${className}`} {...props} />;
};

export const TableHead: React.FC<TableHeadProps> = ({ className, ...props }) => {
  return <thead className={`bg-gray-50 ${className}`} {...props} />;
};

export const TableBody: React.FC<TableBodyProps> = ({ className, ...props }) => {
  return <tbody className={`bg-white divide-y divide-gray-200 ${className}`} {...props} />;
};

export const TableCell: React.FC<TableCellProps> = ({ className, ...props }) => {
  return <td className={`px-6 py-4 whitespace-nowrap ${className}`} {...props} />;
};

export const TableHeader: React.FC<TableHeaderProps> = ({ className, ...props }) => {
  return <th className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`} {...props} />;
};
