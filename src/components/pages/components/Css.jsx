import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CSS = () => {

  const navigate = useNavigate()

  return (
    <>
    <ParentStyled>
      <h1 onClick={() => navigate("/2")}>Go Back</h1>
      <h1>CSS</h1>
    </ParentStyled>
      <ButtonStyled>
        <button onClick={() => navigate("/js")} >JS</button>
        <button onClick={() => navigate("/java")} >JAVA</button>
      </ButtonStyled>
      <HtmlStyled>
        <h2>CSS — формальный язык декодирования и описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML). Также может применяться к любым XML-документам, например, к SVG или XUL.</h2>
        </HtmlStyled>
    </>
  )
}

export default CSS;


const ParentStyled = styled.div`
  border: 2px solid;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url(https://png.pngtree.com/thumb_back/fh260/background/20201028/pngtree-abstract-technology-background-technical-electric-image_443494.jpg);
  > h1{
    color: white;
  }
  
`

const ButtonStyled = styled.button`
  border: 2px solid;
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  margin-top: 20px;
  background-color: #0000009a;
  > button {
    padding: 6px 10px;
    padding: 6px 10px;
    background-color: #0c40a1df;
    color: white;
  }
`


const HtmlStyled = styled.div`
  border: 2px solid;
  width: 420px;
  height: 350px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #0000009a;
  > h2 {
    color: white
  }
`
