import React, { useState } from "react";
console.log('yellow');
const Changecase = () => {
    const [text, settext] = useState("enter You Text here");

    const convertCase = (e) => {
        let lowerCaseText = text.toLowerCase();
        if (e.target.innerHTML == "Lower case") {
            settext(lowerCaseText);
            console.log(lowerCaseText.charAt(8));
        }
        let UpperCaseText = text.toUpperCase();
        if (e.target.innerHTML == "Upper case") {
            settext(UpperCaseText);
        }
        if (e.target.value == "Default") {
            settext(text)
        }

    };
    const changeText = (e) => {
        settext(e.target.value)

    }
    return (
        <>
            <div className="container mx-auto my-5 d-flex flex-column">
                <div className="text-center fw-bold fs-3">Changecase</div>
                <div className="input-group w-50 m-auto">
                    <textarea
                        onChange={changeText}
                        className="form-control w-50 m-auto border-none shadow-none"
                        value={text}
                    ></textarea>
                </div>
                <div className="btns container w-50 mx-auto my-5">
                    <button onClick={convertCase} className="btn btn-primary ms-5 mx-3">
                        Upper case
                    </button>
                    <button onClick={convertCase} className="btn btn-primary me-5 ms-5 mx-3">Default</button>
                    <button onClick={convertCase} className="btn btn-primary me-5 mx-3">
                        Lower case
                    </button>
                </div>
            </div>
        </>
    );
};

export default Changecase;
