import "../styles/buttons.css";

interface IButtonProps {
  text: string;
  href?: string;
  secondary?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; 
  disabled?: boolean;
}

export default function Button({
  text,
  href,
  secondary = false,
  onClick,
  type = "button",
  disabled = false,
}: IButtonProps) {
  const className = `btn ${secondary ? "btn-secondary" : "btn-primary"} ${disabled ? "btn-disabled" : ""}`;

  if (href) {
    return (
      <a href={href} className={className} aria-disabled={disabled}>
        {text}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type} disabled={disabled}>
      {text}
    </button>
  );
}
