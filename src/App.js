import React, { useState, useRef } from "react";
import "./App.css";
import GenerateNumbers from "./components/GenerateNumbers";
import CheckNumber from "./components/CheckNumber";

function App() {
    const [numbers, setNumbers] = useState({
        firstPrize: "",
        secondPrize1: "",
        secondPrize2: "",
        secondPrize3: "",
        twoDigit: "",
        closePrize: "",
        closePrize2: "",
    });

    const checkNumberRef = useRef();

    const handleNumbersUpdate = (newNumbers) => {
        setNumbers(newNumbers);
        if (checkNumberRef.current) {
            checkNumberRef.current.resetState();
        }
    };

    return (
        <div className="App">
            <header className="App-header center">
                <h1>รางวัลล็อตเตอรี่ Diversition</h1>
            </header>
            <div className="container-solid">
                <GenerateNumbers onNumbersUpdate={handleNumbersUpdate} />
                <CheckNumber ref={checkNumberRef} numbers={numbers} />
            </div>
        </div>
    );
}

export default App;
