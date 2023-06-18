import styled from 'styled-components';
import { flex } from 'styles/flex';
import CategoryTitle from './categoryTitle';
import ButtonBox from './buttonBox';

const CategoryHeaderSection = () => {
  return (
    <HeaderSectionWrapper>
      {/* 타이틀에 카테고리 개수 내리기 */}
      <CategoryTitle></CategoryTitle>
      <ButtonBox />
    </HeaderSectionWrapper>
  );
};

const HeaderSectionWrapper = styled.div`
  ${flex('space-between', 'flex-start')}
`;

export default CategoryHeaderSection;
