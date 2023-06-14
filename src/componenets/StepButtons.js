import StepButton from "./StepButton";
import "./StepButtons.css";

export default function StepButtons({ step, nbSteps }) {
  return (
    <div className="numbers">
      {[...Array(nbSteps).keys()].map((_, index) => (
        <StepButton
          key={index}
          index={index + 1}
          step={step}
          nbSteps={nbSteps}
        />
      ))}
    </div>
  );
}
