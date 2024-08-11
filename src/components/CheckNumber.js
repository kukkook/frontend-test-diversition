import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const CheckNumber = forwardRef(({ numbers }, ref) => {
    const [userNumber, setUserNumber] = useState("");
    const [result, setResult] = useState("");
    const [win, setWin] = useState(undefined);
    const [winPrize, setWinPrize] = useState(false);

    useImperativeHandle(ref, () => ({
        resetState() {
            setUserNumber("");
            setResult("");
            setWin(undefined);
            setWinPrize(false);
        },
    }));

    useEffect(() => {
        if (!numbers.firstPrize) {
            setWin(undefined);
        }
    }, [numbers]);

    const handleCheckNumber = () => {
        if (!numbers.firstPrize) {
            setResult("ทำการสุ่มรางวัลก่อน");
            setWin(undefined);
            return;
        }
        if (userNumber === "") {
            setResult("กรุณากรอกตัวเลขเพื่อทำการตรวจรางวัล");
            setWin(undefined);
            return;
        }

        let message = "ยินดีด้วย, คุณถูกรางวัล: ";
        let winSomething = false;

        // 1st Prize
        if (userNumber === numbers.firstPrize.toString()) {
            message += "รางวัลที่ 1";
            winSomething = true;
        }

        // 2nd Prize
        if (userNumber === numbers.secondPrize1.toString() || userNumber === numbers.secondPrize2.toString() || userNumber === numbers.secondPrize3.toString()) {
            if (winSomething) {
                message += " และ รางวัลที่ 2";
            } else {
                message += "รางวัลที่ 2";
            }
            winSomething = true;
        }

        // 2-digit Prize (last two digits match)
        if (userNumber.slice(-2) === numbers.twoDigitPrize.toString()) {
            if (winSomething) {
                message += " และ รางวัลเลขท้ายสองตัว";
            } else {
                message += "รางวัลเลขท้ายสองตัว";
            }
            winSomething = true;
        }

        // Close to 1st Prize
        if (userNumber === numbers.closePrize || userNumber === numbers.closePrize2) {
            if (winSomething) {
                message += " และ รางวัลเลขข้างเคียงรางวัลที่ 1";
            } else {
                message += "รางวัลเลขข้างเคียงรางวัลที่ 1";
            }
            winSomething = true;
        }

        if (winSomething) {
            setResult(message + "!");
            setWinPrize(true);
        } else {
            setResult("เสียใจด้วย คุณไม่ถูกรางวัล");
            setWinPrize(false);
        }

        setWin(winSomething);
    };

    return (
        <div className="container-solid center">
            <div className="input-row">
                <label htmlFor="number">เลขล็อตเตอรี่: </label>
                <input type="text" id="number" value={userNumber} onChange={(e) => setUserNumber(e.target.value)} />
                <button onClick={handleCheckNumber} id="check-btn">
                    ตรวจรางวัล
                </button>
            </div>
            <p id="result" className={win === undefined ? "" : winPrize ? "winning-result" : "not-win"}>
                {result}
            </p>
        </div>
    );
});

export default CheckNumber;
