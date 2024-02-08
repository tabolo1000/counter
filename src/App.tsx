import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {DisplayCounter} from "./components/DisplayCounter/DisplayCounter";
import {SetCounterNumber} from "./components/SetCounterNumber/SetCounterNumber";
import styled from "styled-components";

function App() {
    const initialState = () => {
        const storedValue = localStorage.getItem("diapasonValue");
        return storedValue ? JSON.parse(storedValue) : {"maxNumber": 5, "minNumber": 1};
    };

    const [diapason, setDiapason] = useState(initialState);
    const [renderSetting, setRender] = useState(false)


    useEffect(() => {
        localStorage.setItem("diapasonValue", JSON.stringify(diapason));
    }, [diapason]); // Вызывается только при изменении diapason


    debugger
    return (
        <AppStyled>
            {(renderSetting) ? (
                <SetCounterNumber setRender={setRender} renderSetting={renderSetting} maxSize={diapason.maxNumber} minSize={diapason.minNumber} setDiapason={setDiapason}/>
            ) : (

                <DisplayCounter setRender={setRender} renderSetting={renderSetting} maxSize={diapason.maxNumber}
                                minSize={diapason.minNumber}/>
            )
            }
        </AppStyled>
    );
}

export default App;

let AppStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`


// let [diapason, setDiapason] = useState({"maxNumber": 5, "minNumber": 1});


// useEffect(() => {

//     let numberCounter = localStorage.getItem("diapasonValue");
//     if(numberCounter){
//         let stringJs = JSON.parse(numberCounter)
//         setDiapason(stringJs)
//         debugger
//     }
// }, []);
//
// useEffect(() => {
//     localStorage.setItem("diapasonValue", JSON.stringify(diapason))
// }, [diapason]);


// useEffect(() => {
//     const storedValue = localStorage.getItem("diapasonValue");
//     if (storedValue) {
//         setDiapason(JSON.parse(storedValue));
//     }
// }, []); // Вызывается только при монтировании компонента, так как зависимости пусты