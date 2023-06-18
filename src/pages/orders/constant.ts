import { IOrderListHeader, IOrderList } from "types/order";

export const ORDER_HEADER_LIST: IOrderListHeader[] = [
  {
    value: '주문 시간',
    columnName: 'time',
  },
  {
    value: '받는 사람',
    columnName: 'recipientId',
  },
  {
    value: '메뉴명',
    columnName: 'menuId',
  },
  {
    value: 'hot/ice',
    columnName: 'category',
  },
  {
    value: '개인컵 지참',
    columnName: 'personalCup',
  },
  {
    value: '요청사항',
    columnName: 'request',
  },
  {
    value: '주문취소',
    columnName: 'cancel',
  },
  {
    value: '호출하기',
    columnName: 'call',
  },
];

export const ORDER_ROW_LIST: IOrderList[] = [
  {
    time: '10:00',
    recipientId: 'Ariel',
    menuId: '아메리카노',
    category: 'hot',
    personalCup: true,
    request: '시럽 넣어주세요',
  },
  {
    time: '10:00',
    recipientId: 'Ariel',
    menuId: '아메리카노',
    category: 'hot',
    personalCup: true,
    request: '시럽 넣어주세요',
  },
  {
    time: '10:00',
    recipientId: 'Ariel',
    menuId: '아메리카노',
    category: 'hot',
    personalCup: true,
    request: '시럽 넣어주세요',
  },
  {
    time: '10:00',
    recipientId: 'Ariel',
    menuId: '아메리카노',
    category: 'hot',
    personalCup: true,
    request: '시럽 넣어주세요',
  }
]

