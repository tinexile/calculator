import "./App.css";
import { useState } from "react";
function App() {
  const [curVal, setCurlVal] = useState("");
  const [prevVal, setPrevVal] = useState("");
  const [op, setOp] = useState("");

  function handleDecimalClick(i) {
    setCurlVal((prev) => prev + i);
  }
  function handleClear() {
    setCurlVal("");
    setPrevVal("");
    setOp("");
  }

  function handlePercent() {
    setCurlVal((prev) => prev / 100);
  }
  function handleSqrt() {
    setCurlVal((prev) => Math.sqrt(prev));
  }
  function handleOp(op) {
    setOp(op);
    setPrevVal(curVal);
    setCurlVal("");
  }
  function handleEquals() {
    const prev = parseFloat(prevVal);
    const curr = parseFloat(curVal);

    if (op === "÷") {
      setCurlVal(prev / curr);
      setPrevVal("");
      setOp("");
    } else if (op === "x") {
      setCurlVal(prev * curr);
      setPrevVal("");
      setOp("");
    } else if (op === "-") {
      setCurlVal(prev - curr);
      setPrevVal("");
      setOp("");
    } else if (op === "+") {
      setCurlVal(prev + curr);
      setPrevVal("");
      setOp("");
    }
  }
  const handleDisplay = () => {
    if (curVal.length === 0) {
      return 0;
    }  else if (curVal === '.') {
      return "0.";
    }
    
    else {
      return parseFloat(curVal).toLocaleString();
    }
  };

  return (
    <>
      <div className="h-screen w-screen  bg-gray-100">
        <div
          className="max-w-[400px] grid grid-cols-4 gap-6 font-bold text-2xl
                    [&>button]:bg-red-400 
                      [&>button]:rounded-xl 
                      [&>button]:py-3 
                      [&>button]:shadow-md 
                    [&>button]:hover:bg-gray-300                 
                      [&>button]:transition 
                      [&>button]:duration-200 
                      [&>button]:active:scale-95"
        >
          {/* Main screen result showing */}
          <div className="col-span-4 gap-y-10 text-right">{handleDisplay()}</div>

          {/* first row of calculator */}

          <button onClick={() => handleClear()}>C</button>
          <button onClick={() => handlePercent()}>%</button>
          <button onClick={() => handleSqrt()}>√</button>
          <button onClick={() => handleOp("÷")}>÷</button>

          {/* Second Row */}

          <button onClick={() => handleDecimalClick("7")}>7</button>
          <button onClick={() => handleDecimalClick("8")}>8</button>
          <button onClick={() => handleDecimalClick("9")}>9</button>
          <button onClick={() => handleOp("x")}>x</button>

          {/* Third Row */}

          <button onClick={() => handleDecimalClick("4")}>4</button>
          <button onClick={() => handleDecimalClick("5")}>5</button>
          <button onClick={() => handleDecimalClick("6")}>6</button>
          <button onClick={() => handleOp("-")}>-</button>

          {/* Fourth Row */}

          <button onClick={() => handleDecimalClick("1")}>1</button>
          <button onClick={() => handleDecimalClick("2")}>2</button>
          <button onClick={() => handleDecimalClick("3")}>3</button>
          <button onClick={() => handleOp("+")}>+</button>

          {/* fifth row */}

          <button
            className="col-span-2"
            onClick={() => handleDecimalClick("0")}
          >
            0
          </button>
          <button onClick={() => handleDecimalClick(".")}>.</button>
          <button onClick={() => handleEquals()}> =</button>
        </div>
      </div>
    </>
  );
}

export default App;
