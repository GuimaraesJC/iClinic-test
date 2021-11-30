import styled from 'styled-components';

import Button from '../../components/Button';

import darthVader from '../../assets/images/darth-vader.png';
import lukeSkywalker from '../../assets/images/luke-skywalker.png';

type Props = {
  master: string
}

export const Container = styled.main<Props>`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.master === 'Darth Vader' ? '#2b2b2b' : '#fbfe63'};
  height: 100vh;
  align-items: center;
  position: relative;
  padding: 0 1rem;

  @media only screen and (max-width: 800px) {
    & > :nth-child(1) { order: 1; }
    & > :nth-child(2) { order: 4; }
    & > :nth-child(3) { order: 2; }
    & > :nth-child(4) { order: 3; }
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 50px;
`;

export const ImageContainer = styled.div<Props>`
  width: 380px;
  height: 380px;
  border-radius: 50%;
  ${props => props.master === 'Darth Vader' ? '#fff;' : '#2a2a2a'};
  background: url(${props => props.master === 'Darth Vader' ? darthVader : lukeSkywalker});
  margin-top: 91px;

  @media only screen and (max-width: 800px) {
    margin-top: 210px;
  }
`;

export const MasterInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 38px;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const MasterInfoText = styled.p<Props>`
  font-size: 36px;
  line-height: 44px;
  color: ${props => props.master === 'Darth Vader' ? '#fff;' : '#2a2a2a'};
`;

export const MasterInfoName = styled.span<Props>`
  font-size: 36px;
  line-height: 44px;
  color: ${props => props.master === 'Darth Vader' ? '#fff;' : '#2a2a2a'};
  font-weight: bold;
`;

export const ReturnContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  color: ${props => props.master === 'Darth Vader' ? '#fff;' : '#2a2a2a'};
  position: absolute;
  top: 45px;
  left: 52px;

  transition: filter 0.2s;

  img {
    width: 30px;
    height: 25px;
  }

  span {
    font-size: 18px;
    line-height: 22px;
    margin-left: 10px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
