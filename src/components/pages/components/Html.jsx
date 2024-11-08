import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Html = () => {

  const navigate = useNavigate()

  return (
    <>
    <ParentStyled>
      <h1 onClick={() => navigate('/2')} >Go Back</h1>
      <h1>HTML</h1>
    </ParentStyled>
      <ButtonStyled>
        <button onClick={() => navigate("/css")} >CSS</button>
        <button onClick={() => navigate("/js")} >JS</button>
      </ButtonStyled>
      <HtmlStyled>
        <h2>HTML - это код, который используется для структурирования и отображения веб-страницы и её контента. Например, контент может быть структурирован внутри множества параграфов, маркированных списков или с использованием изображений и таблиц данных.</h2>
      </HtmlStyled>
    </>
  )
}

export default Html;


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
