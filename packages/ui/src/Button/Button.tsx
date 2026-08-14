import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "8px",
        backgroundColor: "#6200EE",
        color: "#FFF",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
      }}
      {...props}
    >
      {children}
    </button>
  );
};
