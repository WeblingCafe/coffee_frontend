import styled from 'styled-components';
import ClosedContainer from '../DropdownList/ClosedContainer';
import DropDownList from '../DropdownList';

export default function PickUpCompleteList() {
  return (
    <Container>
      <DropDownList title="픽업 완료 🔚" count={457} initialValue={false} />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 16px;
`;
