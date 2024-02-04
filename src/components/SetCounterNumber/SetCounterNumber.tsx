import {FC, useState} from "react";
import {
    ButtonsStyled,
    ButtonStyled, ContainerIncrementNumber, ContainerValueNumber,
    InputSectionStyled,
    InputValueDiapasonStyled,
    MainBlockStyled, ValueDiapasonStyled
} from "./_style";

type SetCounterNumberType = {
    maxSize: number,
    minSize: number,
    setDiapason: any,
}

export let SetCounterNumber: FC<SetCounterNumberType> = ({
                                                             maxSize, minSize, setDiapason
                                                         }) => {

    let [newDiapason, setNewDiapason] = useState({"maxNumber": maxSize, "minNumber": minSize});

    let [errorSize, setErrorSize] = useState({
        forMaxSize: false,
        forMinSize: false,
    })

    let setNumber = () => {
        setDiapason(newDiapason)
    }

    let maxNumberHandler = (e: any) => {
        if (newDiapason.maxNumber >= newDiapason.minNumber || +e.currentTarget.value >= newDiapason.minNumber) {
            setErrorSize({...errorSize, forMaxSize: false})
            setNewDiapason({...newDiapason, maxNumber: +e.currentTarget.value});
        } else {
            setErrorSize({...errorSize, forMaxSize: true})
        }
    }
    let minNumberHandler = (e: any) => {
        let valueInput = +e.currentTarget.value;
        debugger
        if (valueInput > newDiapason.maxNumber) {
            setErrorSize({...errorSize, forMinSize: true})
            setNewDiapason({...newDiapason, minNumber: newDiapason.maxNumber})
        } else {
            setErrorSize({...errorSize, forMinSize: false})
            setNewDiapason({...newDiapason, minNumber: +e.currentTarget.value})
        }
    }

    return (
            <MainBlockStyled>
               <ContainerValueNumber>
                <InputSectionStyled>
                    <ValueDiapasonStyled style = {{width: "40%"}}>max value:</ValueDiapasonStyled>
                    <div style = {{width: "40%"}}>
                        <InputValueDiapasonStyled type="text" onChange={maxNumberHandler} value={+newDiapason.maxNumber}/>
                    </div>
                    {/*{*/}
                    {/*    errorSize.forMaxSize ? <div>*/}
                    {/*        <p style={{color: "red"}}>You number incorrect!</p>*/}
                    {/*    </div> : false*/}
                    {/*}*/}
                </InputSectionStyled>
                <InputSectionStyled>
                    <ValueDiapasonStyled style={{width: "40%"}}>start value:</ValueDiapasonStyled>
                    <div style={{width: "40%"}}>
                        <InputValueDiapasonStyled type="text" onChange={minNumberHandler} value={+newDiapason.minNumber}/>
                    </div>
                </InputSectionStyled>
                   {
                       (errorSize.forMaxSize || errorSize.forMinSize) ? <div>
                            <p style={{color: "red"}}>You diapason is incorrect!</p>
                        </div> : false
                    }
               </ContainerValueNumber>
                <ButtonsStyled>
                    <ButtonStyled onClick={() => {
                        setNumber()
                    }}>set
                    </ButtonStyled>
                </ButtonsStyled>
            </MainBlockStyled>
    )
}

