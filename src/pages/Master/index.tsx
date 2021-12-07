import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/Button';

import { fetchMasters } from 'utils/api';

import * as S from './styles';

import arrowLeft from 'assets/icons/arrow-left.svg';


function Master() {
  const [masterName, setMasterName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  function handleFetch() {
    setIsLoading(true);

    (async () => {
      const masterName = await fetchMasters();

      setMasterName(masterName);
      setIsLoading(false);
    })();
  }

  function handleClick() {
    handleFetch();
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <S.Container master={masterName}>
      <Link to="/">
        <S.ReturnContainer master={masterName}>
          <img src={arrowLeft} alt="Back" />
          <span>back</span>
        </S.ReturnContainer>
      </Link>

      <S.ButtonContainer>
        <Button
          label="choose your path again, Padawan"
          size="large"
          font="normal"
          master={masterName}
          disabled={isLoading}
          onClickFn={handleClick}
        />
      </S.ButtonContainer>
      <S.ImageContainer master={masterName} data-testid="img-container"></S.ImageContainer>

      <S.MasterInfoContainer>
        <S.MasterInfoText master={masterName}>Your master is&nbsp;</S.MasterInfoText>
        <S.MasterInfoName master={masterName}>{masterName}</S.MasterInfoName>
      </S.MasterInfoContainer>
    </S.Container>
  );
}

export default Master;
