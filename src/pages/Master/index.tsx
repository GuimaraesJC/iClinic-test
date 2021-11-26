import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

import arrowLeft from '../../assets/icons/arrow-left.svg';

import { fetchMasters} from '../../utils/api';

function Master() {
  const [masterName, setMasterName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    setIsLoading(true);

    Promise.race([
      fetch('https://swapi.dev/api/people/1'),
      fetch('https://swapi.dev/api/people/4')
    ])
      .then(response => response.json())
      .then(data => {
        setMasterName(data.name);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    setIsLoading(true);

    Promise.race([
      fetch('https://swapi.dev/api/people/1'),
      fetch('https://swapi.dev/api/people/4')
    ])
      .then(response => response.json())
      .then(data => {
        setMasterName(data.name);
        setIsLoading(false);
      });
  }, []);

  return (
    <S.Container master={masterName}>
      <Link to="/">
        <S.ReturnContainer master={masterName}>
          <img src={arrowLeft} alt="Back" />
          <span>back</span>
        </S.ReturnContainer>
      </Link>

      <S.Button master={masterName} disabled={isLoading} onClick={handleClick}>choose your path again, Padawan</S.Button>
      <S.ImageContainer master={masterName}></S.ImageContainer>

      <S.MasterInfoContainer>
        <S.MasterInfoText master={masterName}>Your master is&nbsp;</S.MasterInfoText>
        <S.MasterInfoName master={masterName}>{masterName}</S.MasterInfoName>
      </S.MasterInfoContainer>
    </S.Container>
  );
}

export default Master;
