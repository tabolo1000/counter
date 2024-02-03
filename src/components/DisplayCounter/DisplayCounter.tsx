import {FC, useEffect, useState} from "react";
import {number} from "prop-types";

type DisplayCounterType = {
    maxSize: number,
    minSize: number,
}
export let DisplayCounter:FC<DisplayCounterType> = ({maxSize, minSize}) => {
    let initialState:any = () => {
        let numberCounter = localStorage.getItem("countValue");
        return (numberCounter) ? numberCounter : minSize;
    }

    let [currentValue, setCurrentValue ] = useState( () => parseInt(initialState()));

    // useEffect(() => {
    //     let numberCounter = localStorage.getItem("countValue");
    //     if(numberCounter){
    //         let stringJs = JSON.parse(numberCounter)
    //        setCurrentValue(stringJs)
    //     }
    // }, []);

    useEffect(() => {
        localStorage.setItem("countValue", JSON.stringify(currentValue))
    }, [currentValue]);
    let incHandler = () => {
        if(currentValue < maxSize){
            setCurrentValue(++currentValue)
        }else if(currentValue > maxSize){
            setCurrentValue(maxSize)
        }
    }

    let resetHandler = () => {
        setCurrentValue(+minSize)
    }

    return <div>
        <div style = {{border: "2px solid red"}}>
            <h1 style = {(currentValue == maxSize ? {color: "red", fontSize: "3em"} : {})}>
                {
                    (currentValue > maxSize) ? maxSize : ""
                }
                {
                    (currentValue < minSize) ?  minSize : currentValue
                }
            </h1>
        </div>
        <div style = {{border: "2px solid blue"}}>
            <button onClick = {() => {incHandler()}}>inc</button>
            <button onClick = {() => {resetHandler()}}>reset</button>
        </div>
    </div>
}