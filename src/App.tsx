import { useState, useEffect } from "react";
import ButtonContainer from "./components/ButtonContainer";
import InputField from "./components/InputField";

function App() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);
  const [expression, setExpression] = useState("0");

  const calculate = (firstValue: string, secondValue: string, operation: string): string => {
    const first = parseFloat(firstValue);
    const second = parseFloat(secondValue);

    const operations: { [key: string]: () => number } = {
      "+": () => first + second,
      "-": () => first - second,
      "x": () => first * second,
      "/": () => second !== 0 ? first / second : NaN,
      "%": () => first % second
    };

    if (!operations[operation]) {
      return "Error";
    }

    const result = operations[operation]();

    return isNaN(result) ? "Error" : result.toString();
  };

  const formatOperatorForDisplay = (op: string): string => {
    switch (op) {
      case "x": return "×";
      case "-": return "−";
      default: return op;
    }
  };

  const handleButtonClick = (value: string) => {
    if (/^[0-9]$/.test(value)) {
      if (waitingForNewValue) {
        setDisplay(value);
        setExpression(expression + value);
        setWaitingForNewValue(false);
        return;
      }

      const newDisplay = display === "0" ? value : display + value;
      setDisplay(newDisplay);
      setExpression(expression === "0" ? value : expression + value);
      return;
    }

    if (["+", "-", "x", "/", "%"].includes(value)) {
      const lastChar = expression.slice(-1);
      const isLastCharOperator = ["+", "−", "×", "/", "%"].includes(lastChar);

      if (isLastCharOperator) {
        return;
      }

      if (previousValue === null) {
        setPreviousValue(display);
        setExpression(display + formatOperatorForDisplay(value));
      } else if (operation) {
        const result = calculate(previousValue, display, operation);
        setDisplay(result);
        setPreviousValue(result);
        setExpression(expression + formatOperatorForDisplay(value));
      }
      setOperation(value);
      setWaitingForNewValue(true);
      return;
    }

    switch (value) {
      case "C":
        setDisplay("0");
        setPreviousValue(null);
        setOperation(null);
        setWaitingForNewValue(false);
        setExpression("0");
        break;

      case "<":
        if (display.length > 1) {
          const newDisplay = display.slice(0, -1);
          setDisplay(newDisplay);
          setExpression(expression.length > 1 ? expression.slice(0, -1) : "0");
          break;
        }
        setDisplay("0");

        if (operation && previousValue) {
          setExpression(previousValue + formatOperatorForDisplay(operation));
        } else {
          setExpression("0");
        }
        break;

      case "=":
        if (operation && previousValue !== null) {
          const result = calculate(previousValue, display, operation);
          setDisplay(result);
          setExpression(result);
          setPreviousValue(null);
          setOperation(null);
          setWaitingForNewValue(true);
        }
        break;

      case ".":
        if (waitingForNewValue) {
          setDisplay("0.");
          setExpression(expression + "0.");
          setWaitingForNewValue(false);
        } else if (display.indexOf(".") === -1) {
          setDisplay(display + ".");
          setExpression(expression + ".");
        }
        break;
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const { key } = event;

      if (/[0-9+\-*/.=%]/.test(key) || key === "Enter" || key === "Escape" || key === "Backspace") {
        event.preventDefault();
      }

      const keyMap: { [key: string]: string } = {
        "*": "x",
        "Enter": "=",
        "Escape": "C",
        "Backspace": "<"
      };

      if (/[0-9.]/.test(key)) {
        handleButtonClick(key);
      }
      else if (keyMap[key]) {
        handleButtonClick(keyMap[key]);
      }
      else if (["+", "-", "/", "%", "="].includes(key)) {
        handleButtonClick(key);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [display, previousValue, operation, waitingForNewValue, expression]);

  return (
    <div className="mx-auto my-5 border rounded shadow p-4 py-5 d-flex flex-column justify-content-center gap-4" style={{ maxWidth: "350px" }}>
      <InputField value={expression} />
      <ButtonContainer handleOnClick={handleButtonClick} />
    </div>
  );
}

export default App;
