import styled from 'styled-components';
import { flex } from 'styles/flex';
import Button from 'components/common/Button';

const ButtonBox = () => {
  return (
    <ButtonBoxWrapper>
      <Button contents="삭제" />
      <Button contents="카테고리 추가" backgroundColor="#1582FF" />
    </ButtonBoxWrapper>
  );
};

const ButtonBoxWrapper = styled.div`
  ${flex('center', 'center')}
`;

export default ButtonBox;
