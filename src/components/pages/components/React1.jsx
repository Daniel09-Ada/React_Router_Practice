import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const React1 = () => {

  const navigate = useNavigate()

  return (
    <>
    <ParentStyled>
      <h1 onClick={() => navigate("/2")}>Go Back</h1>
      <h1>JAVA</h1>
    </ParentStyled>
      <ButtonStyled>
      <button onClick={() => navigate("/vue")} >VUE</button>
      <button onClick={() => navigate("/html")} >HTML</button>
      </ButtonStyled>
      <HtmlStyled>
        <h2>React — это библиотека для языка программирования JavaScript с открытым исходным кодом для разработки пользовательских интерфейсов. Она помогает быстро и легко реализовать реактивность — явление, когда в ответ на изменение одного элемента меняется все остальное. У React открытый исходный код и мощное сообщество.</h2>
        </HtmlStyled>
    </>
  )
}

export default React1;


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
    background-color: #0c40a1df;
    color: white;
    padding: 6px 10px;
    border-radius: 10px
  }
`


const HtmlStyled = styled.div`
  border: 2px solid;
  width: 490px;
  height: 370px;
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


