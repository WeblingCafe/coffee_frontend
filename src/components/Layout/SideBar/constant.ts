import { ITabList } from 'types/layout';

export const TAB_LIST: ITabList[] = [
  {
    label: '메뉴',
    iconPath: 'ic-tab-menu',
    path: '/menu',
    subMenu: [
      {
        index: 0,
        path: '/menu/category',
        name: '카테고리관리',
      },
      {
        index: 1,
        path: '/menu',
        name: '메뉴관리',
      },
    ],
  },
  {
    label: '정산',
    iconPath: 'ic-tab-settlement',
    path: '/settlement',
  },
  {
    label: '주문',
    iconPath: 'ic-tab-orders',
    path: '/orders',
  },
  {
    label: '공지사항',
    iconPath: 'ic-tab-announcement',
    path: '/announcement',
  },
];
