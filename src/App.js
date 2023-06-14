import { useState } from "react";
import ToggleButton from "./componenets/ToggleButton";
import StepButtons from "./componenets/StepButtons";
import NavigateButtons from "./componenets/NavigateButtons";
import StepText from "./componenets/StepText";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Be happy 😀",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const nbSteps = messages.length;

  return (
    <>
      <ToggleButton isOpen={isOpen} onToggle={setIsOpen} />
      {isOpen && (
        <div className="steps">
          <StepButtons step={step} nbSteps={nbSteps} />
          <StepText step={step} message={messages[step - 1]} />
          <NavigateButtons
            step={step}
            nbSteps={nbSteps}
            onPreviousClick={() => setStep((s) => Math.max(s - 1, 1))}
            onNextClick={() => setStep((s) => Math.min(s + 1, nbSteps))}
          />
        </div>
      )}
    </>
  );
}
