import {FC, useEffect, useState} from "react";

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
            setErrorSize({...errorSize, forMinSize: true })
            setNewDiapason({...newDiapason, minNumber: newDiapason.maxNumber})
        } else {
            setErrorSize({...errorSize, forMinSize: false})
            setNewDiapason({...newDiapason, minNumber: +e.currentTarget.value})
        }
    }

    return <div style={{border: "2px solid red"}}>
        <div>
            <h2>max value</h2>
            <input type="text" onChange={maxNumberHandler} value={+newDiapason.maxNumber}/>
             {
                errorSize.forMaxSize ? <div>
                    <p style={{color: "red"}}>You number incorrect!</p>
                </div> : false
            }
        </div>
        <div>
            <h2>min value</h2>
            <input type="text" onChange={minNumberHandler} value={+newDiapason.minNumber}/>
            {
                errorSize.forMinSize ? <div>
                    <p style={{color: "red"}}>You number high than max value!</p>
                </div> : false
            }
        </div>
        <button onClick={() => {
            setNumber()
        }}>set
        </button>
    </div>
}