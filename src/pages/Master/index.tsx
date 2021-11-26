import * as S from './styles';

import arrowLeft from '../../assets/icons/arrow-left.svg';

function Master() {
  return (
    <S.Container>
      <S.ReturnContainer>
        <img src={arrowLeft} alt="Back" />
        <span>back</span>
      </S.ReturnContainer>
      <S.Button>choose your path again, Padawan</S.Button>
      <S.ImageContainer></S.ImageContainer>
      <S.MasterInfo>Your master is <span>Darth Vader</span></S.MasterInfo>
    </S.Container>
  );
}

export default Master;
