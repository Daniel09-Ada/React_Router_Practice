import React from 'react'
import styled from 'styled-components';

const HomePage = () => {
  return (
    <HomePageStyled>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpB4y72DOASiDIwVqHebCgD8MvgKB430xLSXhTNWDTklVFoum05WH9ILYJkQN7mCeZsvw&usqp=CAU" alt="" />
    </HomePageStyled>
  )
}

export default HomePage;

const HomePageStyled = styled.div`
  margin-top: 20px;
  width: 100%;
  >img {
    width: 400px;
    height: 400px;
    box-shadow: rgba(227, 223, 223, 0.553)1px 7px 17px; 
}
`
