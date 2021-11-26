import React from 'react';

import * as S from './styles/App.styles'

function App() {
  return (
    <S.Container>
      <S.Title>Welcome to <span>iClinic</span></S.Title>
      <S.Subtitle>Frontend challenge - by <span>Jean Carlos Guimarães</span></S.Subtitle>

      <S.Button>Start</S.Button>
    </S.Container>
  );
}

export default App;
