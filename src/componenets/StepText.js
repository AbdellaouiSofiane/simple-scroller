import "./StepText.css";

export default function StepText({ step, message }) {
  return (
    <p className="message">
      Step {step}: {message}
    </p>
  );
}
