import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';
type ButtonType = 'button' | 'submit' | 'reset';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: ButtonType;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  target?: string;
};

export default function Button({
  children,
  variant = 'primary',
  href,
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  target,
}: ButtonProps) {
  const buttonClass = disabled
    ? 'button-disable'
    : variant === 'secondary'
      ? 'button-secondary'
      : 'button-primary';

  const classes = `${buttonClass} ${className}`.trim();

  if (href && !disabled) {
    return (
      <a href={href} target={target} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
