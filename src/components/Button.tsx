import "../styles/buttons.css";

interface IButtonProps {
  text: string;
  href?: string; 
  secondary?: boolean;
  onClick?: () => void; 
}

export default function Button({ text, href, secondary, onClick }: IButtonProps) {
  const className = secondary ? "btn-secondary" : "btn-primary";

  if (href) {
    return (
      <a href={href} className={className}>
        {text}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
