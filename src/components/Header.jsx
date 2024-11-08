import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
    <HeaderStyled>
      <Link to='/' className='logo' ><h2>IT-LOGO</h2></Link>
      <Link to='login' className='login' ><h2>Регистрация</h2></Link>
    </HeaderStyled>
    <div>
      <Outlet/>
    </div>
    </  >
  )
}

export default Header;

const HeaderStyled = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url(https://png.pngtree.com/thumb_back/fh260/background/20201028/pngtree-abstract-technology-background-technical-electric-image_443494.jpg);
  & .logo , .login  {
    color: white;
    text-decoration: none;
  }
  & .login :hover {
    text-decoration: underline;
  }
  & .logo :hover {
    text-decoration: underline;
  }
`



