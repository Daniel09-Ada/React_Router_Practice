import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const Header2 = () => {

  const navigate2 = useNavigate()


  return (
    <>
    <Header2Styled>
      <h2 onClick={() => navigate2("/")} >HOME</h2>
      <h2 onClick={() => navigate2("/html")} >HTML</h2>
      <h2 onClick={() => navigate2("/css")} >CSS</h2>
      <h2 onClick={() => navigate2("/js")} >JS</h2>
      <h2 onClick={() => navigate2("/java")} >JAVA</h2>
    </Header2Styled>
    {/* <Outlet/> */}
    <ParentStyled>
      <ItDivStyled>
        <ItStyled>
      <h1><b><q>IT</q></b></h1>
        </ItStyled>
        <h2>Что такое IT? Это сокращение словосочетания "Information Technology", которое в переводе с английского звучит как «информационные технологии». IT – это процессы создания, хранения, обмена информацией, а также способы реализации этих процессов.</h2>
      </ItDivStyled>

    </ParentStyled>
    </>

  )
}

export default Header2;

const Header2Styled = styled.header`
  border: 2px solid;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url(https://png.pngtree.com/thumb_back/fh260/background/20201028/pngtree-abstract-technology-background-technical-electric-image_443494.jpg);
  > h2{
    list-style-type: none;
    text-decoration: none;
    border-bottom: none;
    color: white  ;
  }
  & .link1 , .link2 , .link3 , .link4 {
    color: black;
    text-decoration: none;
  }
`

const ParentStyled = styled.div`
  width: 100%;
  height: 700px;
`

const ItStyled = styled.div`
  width: 120px;
  height: 80px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`

const ItDivStyled = styled.div`
  border: 2px solid;
  width: 520px;
  height: 350px;
  margin: auto;
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #0000009a;
  > h2 {
    color: white
  }
`
