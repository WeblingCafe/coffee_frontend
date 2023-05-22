import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';


import { font } from 'styles/fonts';
import { flex } from 'styles/flex';

import { Path } from 'types/layout';


interface ITabProps {
  label: string;
  path?: Path;
  iconPath: string;
  hasArrowIcon: boolean;
}

export default function Tab({ label, iconPath, path, hasArrowIcon }: ITabProps) {
  const { pathname } = useRouter();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (pathname === path) {
      setActive(true);
      return;
    }
    setActive(false);
  }, [pathname, path]);

  return (
    <TabContainer active={active}>
      <Link href={path? path: '/'}>
        <TabItem active={active}>
          <div>
          <Image src={`/icons/${iconPath}${active ? '-blue' : ''}.svg`} width={32} height={32} alt="tab-icon" />
          <span>{label}</span>
          </div>
          {hasArrowIcon && <Image src={`/icons/ic-arrow-${active ? 'up' : 'down'}.svg`} width={12} height={12} alt="arrow-icon" />}
        </TabItem>
      </Link>
    </TabContainer>
  );
}

interface IActive {
  active: boolean;
}

const TabContainer = styled.div<IActive>`
  padding: 22.5px 29.8px 22.5px 22.5px;
  ${({active}) => active && css`
  border-left : 4px solid #4480F7`
}
`;

const Active = css`
  color: #3392ff;
`;

const TabItem = styled.div<IActive>`
  ${flex('space-between', 'center')}
  ${font(24, 500)}
  color: #646464;
  cursor: pointer;
  ${props => props.active && Active}

  &:hover {
    ${Active}
  }

  div{
    ${flex('flex-start', 'center')}
    gap: 16px;
  }

  span {
    display: block;
  }
`;
