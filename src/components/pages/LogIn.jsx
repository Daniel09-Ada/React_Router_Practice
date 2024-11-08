import React, { useState } from 'react'
import styled from 'styled-components';
import { MdError } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const LogIn = () => {

  const navigate = useNavigate()

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit1 = () => {
    if (input1 && input2 && input3) { 
      navigate('/2'); 
    } else {
      setError(true);
    }
  };


  
  return (
    <LogInStyled>
      <input type="text" value={input1}  onChange={(e) => { setInput1(e.target.value); setError(false); }} placeholder="эл.почта"/>
      <input type="text" value={input2} onChange={(e) => { setInput2(e.target.value); setError(false); }} placeholder="имя" />
      <input type="number" value={input3} onChange={(e) => { setInput3(e.target.value); setError(false); }} placeholder="номер телефона" />
      {error && <span style={{ color: 'red' }}> <MdError/> Пополните данные!</span>}
      <button onClick={handleSubmit1} >Войти</button>
    </LogInStyled>
  )
  

}
export default LogIn;

const LogInStyled = styled.div`
    border: 2px solid;
    width: 300px;
    height: 200px;
    margin: auto;
    margin-top: 19px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url(https://t4.ftcdn.net/jpg/08/19/19/87/240_F_819198706_Ml2oK9kHtAxmwGXzC7gndUO9xwvHozkT.jpg);
    > button {
      padding: 6px 10px;
      background-color: #0c40a1df;
      color: white;
      border-radius: 10px
    }
    > input , button {
        margin-top: 20px;
    }
`
