import styled from 'styled-components';
import { flex } from 'styles/flex';

const ButtonBox = () => {
  return (
    <ButtonBoxWrapper>
      <button>1</button>
      <button>2</button>
    </ButtonBoxWrapper>
  );
};

const ButtonBoxWrapper = styled.div`
  ${flex('center', 'center')}
`;

export default ButtonBox;
