import Button from "./Button";
import "./NavigateButtons.css";

export default function NavigateButtons({
  step,
  nbSteps,
  onPreviousClick,
  onNextClick,
}) {
  return (
    <div className="buttons">
      <Button text={"Previous"} isVisible={step > 1} onClick={onPreviousClick}>
        <span>👈</span> Previous
      </Button>
      <Button text={"Next"} isVisible={step < nbSteps} onClick={onNextClick}>
        Next <span>👉</span>
      </Button>
    </div>
  );
}
