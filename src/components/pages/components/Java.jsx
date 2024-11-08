import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const Java = () => {

  const navigate = useNavigate()

  return (   
   <>
    <ParentStyled>
      <h1 onClick={() => navigate("/2")}>Go Back</h1>
      <h1>JAVA</h1>
    </ParentStyled>
      <ButtonStyled>
      <button onClick={() => navigate("/react")} >REACT</button>
      <button onClick={() => navigate("/vue")} >VUE</button>
      </ButtonStyled>
      <HtmlStyled>
        <h2>Java – это многоплатформенный, объектно-ориентированный и сетецентрический язык, который сам по себе может использоваться как платформа. Это быстрый, безопасный и надежный язык программирования для всего: от мобильных приложений и корпоративного ПО до приложений для работы с большими данными и серверных технологий.
        </h2>
        </HtmlStyled>
    </>

  )
}

export default Java;


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
    background-color: #0c40a1df;
    color: white;
    border-radius: 10px
  }
`


const HtmlStyled = styled.div`
  border: 2px solid;
  width: 420px;
  height: 410px;
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
