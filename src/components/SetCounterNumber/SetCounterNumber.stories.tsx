import {SetCounterNumber} from "./SetCounterNumber";
import {Meta} from "@storybook/react";
import {useState} from "react";



let meta:Meta<typeof SetCounterNumber> = {
    component: SetCounterNumber
}

export default meta;


export let SetCounterNumberStories = () => {
    let [diapason, setDiapason] = useState({"maxNumber": 5, "minNumber": 0});
    let [renderSetting, setRender] = useState(false)
    return(
        <div>
             <SetCounterNumber renderSetting={renderSetting} setRender={setRender} maxSize = {diapason.maxNumber} minSize = {diapason.minNumber} setDiapason={() => {} }/>
        </div>
    )}