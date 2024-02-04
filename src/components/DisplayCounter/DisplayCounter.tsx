import {FC, useEffect, useState} from "react";

import {
    ButtonsStyled, ButtonStyled,
    ContainerIncrementNumber,
    IncrementNumber,
    MainBlockStyled
} from "../SetCounterNumber/_style";

type DisplayCounterType = {
    maxSize: number,
    minSize: number,
}
export let DisplayCounter: FC<DisplayCounterType> = ({maxSize, minSize}) => {
    let initialState: any = () => {
        let numberCounter = localStorage.getItem("countValue");
        return (numberCounter) ? numberCounter : minSize;
    }

    let [currentValue, setCurrentValue] = useState(() => parseInt(initialState()));

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
        if (currentValue < maxSize) {
            setCurrentValue(++currentValue)
        } else if (currentValue > maxSize) {
            setCurrentValue(maxSize)
        }
    }

    let resetHandler = () => {
        setCurrentValue(+minSize)
    }

    return (
        <MainBlockStyled>
            <ContainerIncrementNumber>
                <IncrementNumber style={(currentValue == maxSize ? {color: "red", fontSize: "5em"} : {})}>
                    {
                        (currentValue > maxSize) ? maxSize : "" || (currentValue < minSize) ? minSize : currentValue
                    }

                </IncrementNumber>
            </ContainerIncrementNumber>
            <ButtonsStyled>
                <ButtonStyled onClick={() => {
                    incHandler()
                }}>inc
                </ButtonStyled>
                <ButtonStyled onClick={() => {
                    resetHandler()
                }}>reset
                </ButtonStyled>
            </ButtonsStyled>
        </MainBlockStyled>
    );



};









