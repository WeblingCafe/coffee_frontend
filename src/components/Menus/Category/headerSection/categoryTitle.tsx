import styled from 'styled-components';
import { font } from 'styles/fonts';

interface CategoryTitleProps {
  categoryNum: number;
}

const CategoryTitle = (props: CategoryTitleProps) => {
  const { categoryNum } = props;
  return (
    <TitleBox>
      <Title>카테고리 관리</Title>
      <Num>{categoryNum}</Num>
    </TitleBox>
  );
};

export default CategoryTitle;

const TitleBox = styled.div`
  display: flex;
  gap: 8px;
`;

const Title = styled.span`
  ${font(18, 700, 16.8)}
`;

const Num = styled.span`
  ${font(18, 600, 17)};
  color: rgba(47, 47, 47, 0.4);
`;
