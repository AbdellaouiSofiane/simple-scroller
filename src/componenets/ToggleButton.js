import "./ToggleButton.css";

export default function ToggleButton({ isOpen, onToggle }) {
  return (
    <button className="close" onClick={() => onToggle((isOpen) => !isOpen)}>
      {isOpen ? <span>-</span> : "+"}
    </button>
  );
}
