import styled from 'styled-components';
import { flex } from 'styles/flex';
import { font } from 'styles/fonts';
import CheckBox from 'components/common/Checkbox';

interface RowProps {
  data: {
    categoryId: number;
    categoryName: string;
  }[];
}

export default function TableRow(data: RowProps) {
  console.log(typeof data, data.data);
  return (
    <Wrapper>
      {data.data &&
        data.data?.map(el => (
          <Row>
            <CheckBox />
            <Item key={el.categoryId}>{el.categoryName}</Item>
          </Row>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Row = styled.ul`
  ${flex('', 'center')};
  ${font(12, 400, 24)};
  padding: 10px 20px;
`;

const Item = styled.li`
  // ${flex('center', 'center')};
  padding: 13px 8px;
  gap: 4px;
`;
