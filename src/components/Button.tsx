import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger" | "warning" | "success" | "info"| "light" | "dark"| "link"| "white"| "muted"; // Range of values from bootstraps buttons
  onClick?: () => void;
}
const Button = ({ children,onClick,color }: ButtonProps) => {
  return (
    <button type="button" className={"btn btn-"+color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
