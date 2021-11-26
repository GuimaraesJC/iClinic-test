import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

import arrowLeft from '../../assets/icons/arrow-left.svg';

function Master() {
  const [masterName, setMasterName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Promise.race([
      fetch('https://swapi.dev/api/people/1'),
      fetch('https://swapi.dev/api/people/4')
    ])
      .then(response => response.json())
      .then(data => setMasterName(data.name));
  }, []);

  return (
    <S.Container>
      <Link to="/">
      <S.ReturnContainer>
        <img src={arrowLeft} alt="Back" />
        <span>back</span>
      </S.ReturnContainer>
      </Link>
      <S.Button>choose your path again, Padawan</S.Button>
      <S.ImageContainer></S.ImageContainer>
      <S.MasterInfo>Your master is <span>{masterName}</span></S.MasterInfo>
    </S.Container>
  );
}

export default Master;
