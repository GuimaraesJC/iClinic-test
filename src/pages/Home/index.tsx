import { Link } from 'react-router-dom';

import * as S from './styles';

function Home() {
  return (
    <S.Container>
      <S.Title>Welcome to <span>iClinic</span></S.Title>
      <S.Subtitle>Frontend challenge - by <span>Jean Carlos Guimarães</span></S.Subtitle>

      <Link to="/master">
        <S.Button>Start</S.Button>
      </Link>
    </S.Container>
  );
}

export default Home;
