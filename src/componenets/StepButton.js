export default function StepButton({ index, step }) {
  return <div className={step >= index ? "active" : ""}>{index}</div>;
}
