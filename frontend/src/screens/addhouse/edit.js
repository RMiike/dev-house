import React, { useState } from 'react';
import styled from 'styled-components'
import { useAuth } from '../../context/auth'

const AddHouse = ({location}) => {
  const { editarCasa } = useAuth()
  const [form, setForm] = useState({ status: false })
  const [selectedFile, setSelectedFile] = useState()

  function dadosForm(e) {
    let newForm = form
    form[e.target.name] = e.target.value
    setForm(newForm)
  }

  function handleSubmit(e){
    e.preventDefault()
    editarCasa(selectedFile, form,location.pathname)
  }

  return (
    <MContainer>
      <h1>Como é a casa que você está anunciando?</h1>
      <div>
      <form
        onSubmit={handleSubmit}
      >
        <input type="text" name='description' placeholder='Descrição' onChange={dadosForm} />
        <input type="text" name='location' placeholder='Localização' onChange={dadosForm} />
        <input type="number" name='price' placeholder='Preço' onChange={dadosForm} />
        <input className='file' type="file" name="resume" onChange={(e) => setSelectedFile(e.target.files[0])} />
        <button type='submit'>Enviar</button>
      </form>
      </div>
    </MContainer>
  );
};

export default AddHouse;

const MContainer = styled.div`
display: flex;
flex-direction: column;
align-items:center;
  width: 100%;
  height: 90vh;
  max-width: 1820px;
background: #EEEEEE;

  h1 {
    color: #999;
  }
  div {
    
    width: 90%;
    height: 60%;
    border: 1px solid rgba(170, 170, 170, 0.4);
    border-radius: 10px;
    padding: 40px;
  }
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input{
    background: transparent;
    margin: 10px auto;
    max-width: 540px;
    height: 40px;
  }
  .file {
    width: 100%;
    color: transparent;
  }
  button{
    width: 240px;
    height: 40px;
    background: transparent;
    border: 1px solid rgba(170, 170, 170, 0.4);
    border-radius: 10px;
    &:hover {
      color:#fff;
      background:rgba(170, 170, 170, 0.4);
      transition: all 1s;
    }
  }
`