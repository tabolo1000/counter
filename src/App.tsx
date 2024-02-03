import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {DisplayCounter} from "./components/DisplayCounter/DisplayCounter";
import {SetCounterNumber} from "./components/SetCounterNumber/SetCounterNumber";

function App() {
    const initialState = () => {
        const storedValue = localStorage.getItem("diapasonValue");
        return storedValue ? JSON.parse(storedValue) : {"maxNumber": 5, "minNumber": 1};
    };

    const [diapason, setDiapason] = useState(initialState);
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

    useEffect(() => {
        localStorage.setItem("diapasonValue", JSON.stringify(diapason));
    }, [diapason]); // Вызывается только при изменении diapason


  debugger
  return (
    <div className="App">
        <SetCounterNumber maxSize={diapason.maxNumber} minSize={diapason.minNumber} setDiapason={setDiapason}/>
        <DisplayCounter maxSize={diapason.maxNumber} minSize={diapason.minNumber}/>
    </div>
  );
}

export default App;
