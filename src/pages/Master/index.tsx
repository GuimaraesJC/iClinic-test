import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

import arrowLeft from '../../assets/icons/arrow-left.svg';

function Master() {
  const [masterName, setMasterName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    Promise.race([
      fetch('https://swapi.dev/api/people/1'),
      fetch('https://swapi.dev/api/people/4')
    ])
      .then(response => response.json())
      .then(data => setMasterName(data.name));
  }

  useEffect(() => {
    Promise.race([
      fetch('https://swapi.dev/api/people/1'),
      fetch('https://swapi.dev/api/people/4')
    ])
      .then(response => response.json())
      .then(data => setMasterName(data.name));
  }, []);

  return (
    <S.Container master={masterName}>
      <Link to="/">
      <S.ReturnContainer master={masterName}>
        <img src={arrowLeft} alt="Back" />
        <span>back</span>
      </S.ReturnContainer>
      </Link>
      <S.Button master={masterName} disabled={true} onClick={handleClick}>choose your path again, Padawan</S.Button>
      <S.ImageContainer master={masterName}></S.ImageContainer>
      <S.MasterInfo master={masterName}>Your master is <span>{masterName}</span></S.MasterInfo>
    </S.Container>
  );
}

export default Master;
