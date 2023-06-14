export default function Button({ text, onClick, children, isVisible }) {
  return (
    <button
      style={{
        backgroundColor: "#7950f2",
        color: "#fff",
        visibility: isVisible ? "visible" : "hidden",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
