import {SetCounterNumber} from "./SetCounterNumber";
import {Meta} from "@storybook/react";
import {useState} from "react";



let meta:Meta<typeof SetCounterNumber> = {
    component: SetCounterNumber
}

export default meta;


export let SetCounterNumberStories = () => {
    let [diapason, setDiapason] = useState({"maxNumber": 5, "minNumber": 0});
    return(
        <div>
             <SetCounterNumber maxSize = {diapason.maxNumber} minSize = {diapason.minNumber} setDiapason={() => {} }/>
        </div>
    )}