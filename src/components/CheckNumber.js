import React, { useState, useEffect } from 'react';

const CheckNumber = ({ numbers }) => {
    const [userNumber, setUserNumber] = useState('');
    const [result, setResult] = useState('');
    const [win, setWin] = useState(undefined);
    const [winPrize, setWinPrize] = useState(false);

    useEffect(() => {
        if (!numbers.firstPrize) {
            // setResult('ทำการสุ่มรางวัลก่อน');
            setWin(undefined);
        }
    }, [numbers]);

    const handleCheckNumber = () => {
        if (!numbers.firstPrize) {
            setResult('ทำการสุ่มรางวัลก่อน');
            setWin(undefined);
            return;
        }
        if (userNumber === '') {
            setResult('กรุณากรอกตัวเลขเพื่อทำการตรวจรางวัล');
            setWin(undefined);
            return;
        }

        if (userNumber === numbers.firstPrize.toString()) {
            setResult("ยินดีด้วย, คุณถูกรางวัลที่ 1!");
            setWinPrize(true);
        } else if (userNumber === numbers.secondPrize1.toString() ||
            userNumber === numbers.secondPrize2.toString() ||
            userNumber === numbers.secondPrize3.toString()) {
            setResult("ยินดีด้วย, คุณถูกรางวัลที่ 2!");
            setWinPrize(true);
        } else if (userNumber === numbers.closePrize ||
            userNumber === numbers.closePrize2) {
            setResult("ยินดีด้วย, คุณถูกรางวัลเลขข้างเคียงรางวัลที่1!");
            setWinPrize(true);
        } else if (userNumber.slice(-2) === numbers.twoDigitPrize.toString()) {
            setResult("ยินดีด้วย, คุณถูกรางวัลเลขท้ายสองตัว!");
            setWinPrize(true);
        } else {
            setResult("เสียใจด้วย คุณไม่ถูกรางวัล");
            setWinPrize(false);
        }

        setWin(result.includes("ยินดีด้วย"));
    };

    return (
        <div className="container-solid center">
            <div className="input-row">
                <label htmlFor="number">เลขล็อตเตอรี่: </label>
                <input
                    type="text"
                    id="number"
                    value={userNumber}
                    onChange={(e) => setUserNumber(e.target.value)}
                />
                <button onClick={handleCheckNumber} id="check-btn">ตรวจรางวัล</button>
            </div>
            <p id="result" className={win === undefined ? '' : winPrize ? 'winning-result' : 'not-win'}>
                {result}
            </p>
        </div>
    );
};

export default CheckNumber;
