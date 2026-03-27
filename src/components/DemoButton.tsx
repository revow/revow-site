"use client";

import DemoModal from "./DemoModal";

interface DemoButtonProps {
  labels: {
    title: string;
    sub: string;
    name: string;
    email: string;
    company: string;
    role: string;
    phone: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  buttonText: string;
  className?: string;
}

export default function DemoButton({ labels, buttonText, className }: DemoButtonProps) {
  return (
    <DemoModal
      labels={labels}
      trigger={
        <span className={className}>
          {buttonText}
        </span>
      }
    />
  );
}
