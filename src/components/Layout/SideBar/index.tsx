import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Tab from './Tab';

import { TAB_LIST } from './constant';
import { flex } from 'styles/flex';

export default function SideBar() {

  const handleLogout = () => {
    alert('logout!');
  }


  return (
    <Container>
      <Link href="/">
        <LogoWrapper>
          <Image alt="logo" src="/icons/ic-string-logo.svg" width={200} height={32} />
          <div>
            <Image alt="sub-logo" src="/icons/ic-sub-string-logo.svg" width={125} height={20} />
          </div>
        </LogoWrapper>
      </Link>
      <TabWrapper>
        {TAB_LIST.map(({ label, iconPath, path, subMenu }, idx) => (
          <Tab key={`label-${idx}`} label={label} path={path} iconPath={iconPath} subMenu={subMenu} hasArrowIcon/>
        ))}
      </TabWrapper>
      <LogoutBtnWrapper onClick={handleLogout}>
        <Tab label="로그아웃" iconPath='ic-logout' hasArrowIcon={false} />
      </LogoutBtnWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0%;
  right: 80.21%;
  top: 0%;
  bottom: 0%;
  width: 20%;
  min-height: 100vh;
  padding: 33px 0;
  border: 1.12778px solid #eff0f6;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 0px 20px 20px 0px;
`;

const LogoWrapper = styled.div`
  ${flex('center', 'center', 'column')}
  position: relative;
  padding: 0 24px;

  div {
    margin-top: 8px;
    position: relative;
    left: 34px;
  }
`;

const TabWrapper = styled.div`
  margin-top: 50px;
`;

const LogoutBtnWrapper = styled.div`
  position:absolute;
  bottom: 0;

`