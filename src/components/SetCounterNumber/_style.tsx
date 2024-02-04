import styled, {css} from "styled-components";






const COLOR_BORDER_TEXT = "rgba(0,139,97,0.89)";
const COLOR_TEXT_BUTTON = "rgba(0,1,1,0.92)"



//____________________________________________________________


let FlexStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
`



let BorderSizeAndColorLineStyled = css`
  border: 2px solid ${COLOR_BORDER_TEXT};
  border-radius: 10px;
`

export let ButtonsStyled = styled.div`
  ${FlexStyled}; 
  ${BorderSizeAndColorLineStyled};
  padding: 10px;
  margin: 10px 0;
`

export let ButtonStyled = styled.button`
    ${BorderSizeAndColorLineStyled};
    color: ${COLOR_TEXT_BUTTON};
    font-size: 25px;
    font-weight: bold;
    background-color: ${COLOR_BORDER_TEXT};
    margin: 0 auto;
`

export let IncrementNumber = styled.div`
  ${FlexStyled};
  font-size: 60px;
  color: ${COLOR_BORDER_TEXT};
  font-weight: bold;
  height: 100%;
`

export let ContainerIncrementNumber = styled.div`
  ${BorderSizeAndColorLineStyled};
  height: 70%;
`

export let MainBlockStyled = styled.div`
    ${BorderSizeAndColorLineStyled};
    width: 20%;
    height: 25%;
    padding: 10px;
    margin: 5%;
`


//---------------------

export let ContainerValueNumber = styled.div`
  ${BorderSizeAndColorLineStyled};
  ${FlexStyled};
  height: 70%;
  flex-direction: column;
`

export let ValueDiapasonStyled = styled.h2`
    color: ${COLOR_BORDER_TEXT};
    font-size: 20px;
`
export let InputValueDiapasonStyled = styled.input`
    ${BorderSizeAndColorLineStyled};
    border-radius: 0;
    text-align: center;
    width: 100%;
`

export let InputSectionStyled = styled.div`
   ${FlexStyled};
`