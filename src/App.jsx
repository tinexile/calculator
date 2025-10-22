import "./App.css";

function App() {


const [input, setInput] = useState("");

  return (
    <>
      <div className="h-screen w-screen  bg-gray-100">
        <div
          className="max-w-[400px] grid grid-cols-4 gap-6 font-bold text-2xl
                    [&>button]:bg-gray-200 
                      [&>button]:rounded-xl 
                      [&>button]:py-3 
                      [&>button]:shadow-md 
                    [&>button]:hover:bg-gray-300                 
                      [&>button]:transition 
                      [&>button]:duration-200 
                      [&>button]:active:scale-95"
        >
          {/* Main screen result showing */}
          <div className="col-span-4 gap-y-10">it will show result here</div>
          
          {/* first row of calculator */}

          <button>(</button>
          <button>C</button>
          <button>)</button>
          <button>/</button>

          {/* Second Row */}

          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>x</button>

          {/* Third Row */}

          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>

          {/* Fourth Row */}

          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>

          {/* fifth row */}

          <button className="col-span-2">0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
