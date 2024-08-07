import React, { useState } from 'react';
import './App.css';
import GenerateNumbers from './components/GenerateNumbers';
import CheckNumber from './components/CheckNumber';

function App() {
    const [numbers, setNumbers] = useState({
        firstPrize: '',
        secondPrize1: '',
        secondPrize2: '',
        secondPrize3: '',
        twoDigit: '',
        closePrize: '',
        closePrize2: ''
    });

    const handleNumbersUpdate = (newNumbers) => {
        setNumbers(newNumbers);
    };

    return (
        <div className="App">
            <header className="App-header center">
                <h1>รางวัลล็อตเตอรี่ Diversition</h1>
            </header>
            <div className="container-solid">
                <GenerateNumbers onNumbersUpdate={handleNumbersUpdate} />
                <CheckNumber numbers={numbers} />
            </div>
        </div>
    );
}

export default App;
