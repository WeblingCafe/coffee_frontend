import styled from 'styled-components';
import { flex } from 'styles/flex';
import CategoryTitle from './categoryTitle';
import ButtonBox from './buttonBox';

interface CategoryHeaderSectionProps {
  categoryNum: number;
}

const CategoryHeaderSection = (props: CategoryHeaderSectionProps) => {
  const { categoryNum } = props;

  return (
    <HeaderSectionWrapper>
      <CategoryTitle categoryNum={categoryNum}></CategoryTitle>
      <ButtonBox />
    </HeaderSectionWrapper>
  );
};

const HeaderSectionWrapper = styled.div`
  ${flex('space-between', 'flex-start')}
  padding: 24px 22px;
`;

export default CategoryHeaderSection;
