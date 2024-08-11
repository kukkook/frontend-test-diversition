import React, { useState } from "react";

const GenerateNumbers = ({ onNumbersUpdate }) => {
    const [numbers, setNumbers] = useState({
        firstPrize: "",
        secondPrize1: "",
        secondPrize2: "",
        secondPrize3: "",
        twoDigitPrize: "",
        closePrize: "",
        closePrize2: "",
    });

    const generateNumbers = () => {
        let firstPrize = Math.floor(Math.random() * 900) + 100;
        let secondPrize1 = Math.floor(Math.random() * 900) + 100;
        let secondPrize2 = Math.floor(Math.random() * 900) + 100;
        let secondPrize3 = Math.floor(Math.random() * 900) + 100;
        let twoDigit = Math.floor(Math.random() * 90) + 10;

        while (secondPrize1 === firstPrize) {
            secondPrize1 = Math.floor(Math.random() * 900) + 100;
        }

        while (secondPrize2 === firstPrize || secondPrize2 === secondPrize1 || secondPrize3 === firstPrize || secondPrize3 === secondPrize1 || secondPrize2 === secondPrize3) {
            secondPrize2 = Math.floor(Math.random() * 900) + 100;
            secondPrize3 = Math.floor(Math.random() * 900) + 100;
        }

        let closePrizeNum = firstPrize + 1;
        let closePrizeNum2 = firstPrize - 1;

        while (closePrizeNum < 100 || closePrizeNum >= 1000 || closePrizeNum === firstPrize || closePrizeNum === secondPrize1 || closePrizeNum === secondPrize2 || closePrizeNum === secondPrize3) {
            closePrizeNum = firstPrize + 1;
        }

        while (
            closePrizeNum2 < 100 ||
            closePrizeNum2 >= 1000 ||
            closePrizeNum2 === firstPrize ||
            closePrizeNum2 === secondPrize1 ||
            closePrizeNum2 === secondPrize2 ||
            closePrizeNum2 === secondPrize3
        ) {
            closePrizeNum2 = firstPrize - 1;
        }

        // let unitDigit = firstPrize % 10;
        // let tensDigit = Math.floor(firstPrize / 10) % 10;
        // let twoDigitPrize = parseInt(String(tensDigit) + String(unitDigit));

        const newNumbers = {
            firstPrize: firstPrize,
            secondPrize1: secondPrize1,
            secondPrize2: secondPrize2,
            secondPrize3: secondPrize3,
            twoDigitPrize: twoDigit,
            closePrize: ("0" + closePrizeNum).slice(-3),
            closePrize2: ("0" + closePrizeNum2).slice(-3),
        };

        setNumbers(newNumbers);
        onNumbersUpdate(newNumbers);
    };

    return (
        <div className="container-solid center">
            <h2>ผลการออกรางวัลล็อตเตอรี่ Diversition</h2>
            <button id="random-btn" onClick={generateNumbers}>
                ดำเนินการสุ่มรางวัล
            </button>
            <table className="center">
                <tbody>
                    <tr>
                        <td colSpan="2" id="first">
                            รางวัลที่ 1
                        </td>
                        <td colSpan="2" id="firstPrize">
                            {numbers.firstPrize}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" id="near">
                            รางวัลเลขข้างเคียงรางวัลที่ 1
                        </td>
                        <td colSpan="1" id="secondPrizeNum1">
                            {numbers.closePrize}
                        </td>
                        <td colSpan="1" id="secondPrizeNum2">
                            {numbers.closePrize2}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="1" id="second">
                            รางวัลที่ 2
                        </td>
                        <td id="SecondPrize1">{numbers.secondPrize1}</td>
                        <td id="SecondPrize2">{numbers.secondPrize2}</td>
                        <td id="SecondPrize3">{numbers.secondPrize3}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" id="two">
                            รางวัลเลขท้าย 2 ตัว
                        </td>
                        <td colSpan="2" id="twoDigitPrize">
                            {numbers.twoDigitPrize}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GenerateNumbers;
