import styled, { css } from 'styled-components';
import { flex } from 'styles/flex';
import { font } from 'styles/fonts';
import CheckBox from 'components/common/Checkbox';

interface RowProps {
  data: {
    categoryId: number;
    categoryName: string;
  }[];
  handleClick?: (index: number) => void;
  selectedIndexes: Array<Number>;
}

export default function TableRow({ data, handleClick, selectedIndexes }: RowProps) {
  // console.log('===data', data);
  return (
    <Wrapper>
      {data &&
        data?.map(el => (
          <Row key={el.categoryId}>
            <CheckBox
              active={selectedIndexes.includes(el.categoryId)}
              onClick={() => {
                handleClick(el.categoryId);
              }}
            />
            <Item>{el.categoryName}</Item>
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

const CheckBoxContainer = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 16px;
  border-radius: 10px;
  border: 1px solid #c0c0c0;
  background-color: white;
  cursor: pointer;
`;

const Item = styled.li`
  // ${flex('center', 'center')};
  padding: 13px 8px;
  gap: 4px;
`;
