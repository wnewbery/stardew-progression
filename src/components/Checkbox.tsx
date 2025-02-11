import { ReactNode } from "react";

interface CheckboxProps {
  children?: ReactNode;
  label?: string;
  className?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}
export default function Checkbox({ children, label, className, checked, onChange }: CheckboxProps) {
  return (
    <label className={className ?? "block"}>
      <input type="checkbox" className="mr-4" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {label}
      {children}
    </label>
  );
}