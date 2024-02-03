
import {DisplayCounter} from "./DisplayCounter";
import {Meta} from "@storybook/react";
import {useState} from "react";


const meta: Meta<typeof DisplayCounter> = {
  component: DisplayCounter,
};

export default meta;



export let DisplayCounterStory = () => {
    let [diapason, setDiapason] = useState({"maxNumber": 5, "minNumber": 0});
    return <DisplayCounter maxSize={diapason.maxNumber} minSize={diapason.minNumber} />
}

